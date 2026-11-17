
import React, { useCallback, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { useFocusEffect, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import {
  Produto,
  Movimentacao,
  buscarProduto,
  listarMovimentacoes,
  registrarMovimentacao,
} from '../database/database';

type TipoMovimentacao = 'ENTRADA' | 'SAIDA';

export default function Movimentacoes() {
  const router = useRouter();

  const [codigo, setCodigo] = useState('');
  const [produto, setProduto] = useState<Produto | null>(null);

  const [tipo, setTipo] = useState<TipoMovimentacao>('ENTRADA');
  const [quantidade, setQuantidade] = useState('');
  const [observacao, setObservacao] = useState('');

  const [movimentacoes, setMovimentacoes] = useState<Movimentacao[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [buscando, setBuscando] = useState(false);
  const [salvando, setSalvando] = useState(false);

  // CARREGAR HISTÓRICO
  const carregarMovimentacoes = useCallback(async () => {
    try {
      setCarregando(true);

      const dados = await listarMovimentacoes();

      setMovimentacoes(dados);
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível carregar o histórico.');
    } finally {
      setCarregando(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarMovimentacoes();
    }, [carregarMovimentacoes])
  );

  // LOCALIZAR PRODUTO PELO CÓDIGO
  async function localizarProduto() {
    const codigoNumerico = Number(codigo.trim());

    if (
      !codigo.trim() ||
      !Number.isInteger(codigoNumerico) ||
      codigoNumerico <= 0
    ) {
      Alert.alert('Atenção', 'Informe um código de produto válido.');
      return;
    }

    try {
      setBuscando(true);

      const encontrado = await buscarProduto(codigoNumerico);

      if (!encontrado) {
        setProduto(null);

        Alert.alert(
          'Produto não encontrado',
          'Confira o código informado.'
        );

        return;
      }

      setProduto(encontrado);
      setQuantidade('');
    } catch (erro) {
      console.error(erro);

      Alert.alert(
        'Erro',
        'Não foi possível localizar o produto.'
      );
    } finally {
      setBuscando(false);
    }
  }

  // CONFIRMAR MOVIMENTAÇÃO
  async function confirmarMovimentacao() {
    if (!produto) {
      Alert.alert(
        'Atenção',
        'Primeiro localize um produto pelo código.'
      );

      return;
    }

    const quantidadeNumerica = Number(quantidade);

    if (
      !quantidade.trim() ||
      !Number.isInteger(quantidadeNumerica) ||
      quantidadeNumerica <= 0
    ) {
      Alert.alert(
        'Atenção',
        'Informe uma quantidade inteira maior que zero.'
      );

      return;
    }

    if (
      tipo === 'SAIDA' &&
      quantidadeNumerica > produto.quantidade
    ) {
      Alert.alert(
        'Estoque insuficiente',
        `Você possui apenas ${produto.quantidade} unidades deste produto.`
      );

      return;
    }

    const tituloAcao =
      tipo === 'ENTRADA'
        ? 'registrar a entrada'
        : 'registrar a saída';

    Alert.alert(
      'Confirmar movimentação',
      `Deseja ${tituloAcao} de ${quantidadeNumerica} unidade(s) de ${produto.nome}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: salvarMovimentacao,
        },
      ]
    );
  }

  // SALVAR MOVIMENTAÇÃO
  async function salvarMovimentacao() {
    if (!produto) return;

    try {
      setSalvando(true);

      await registrarMovimentacao(
        produto.id,
        tipo,
        Number(quantidade),
        observacao
      );

      const produtoAtualizado = await buscarProduto(produto.id);

      setProduto(produtoAtualizado);
      setQuantidade('');
      setObservacao('');

      await carregarMovimentacoes();

      Alert.alert(
        'Sucesso',
        tipo === 'ENTRADA'
          ? 'Entrada registrada e estoque atualizado!'
          : 'Saída registrada e estoque atualizado!'
      );
    } catch (erro) {
      console.error(erro);

      Alert.alert(
        'Erro',
        erro instanceof Error
          ? erro.message
          : 'Não foi possível registrar a movimentação.'
      );
    } finally {
      setSalvando(false);
    }
  }

  // FORMATAR DATA
  function formatarData(data: string) {
    if (!data) return '';

    const partes = data.split(' ');
    const dataPartes = partes[0].split('-');

    if (dataPartes.length !== 3) {
      return data;
    }

    return `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;
  }

  // CARTÃO DO HISTÓRICO
  function renderizarMovimentacao({
    item,
  }: {
    item: Movimentacao;
  }) {
    const entrada = item.tipo === 'ENTRADA';

    return (
      <View style={styles.cartaoHistorico}>
        <View
          style={[
            styles.iconeHistorico,
            entrada
              ? styles.fundoEntrada
              : styles.fundoSaida,
          ]}
        >
          <FontAwesome
            name={entrada ? 'arrow-down' : 'arrow-up'}
            size={19}
            color={entrada ? '#16A34A' : '#DC2626'}
          />
        </View>

        <View style={styles.dadosHistorico}>
          <Text style={styles.nomeHistorico}>
            {item.produto_nome || `Produto #${item.produto_id}`}
          </Text>

          <Text style={styles.dataHistorico}>
            Código: #{item.produto_id} • {formatarData(item.data)}
          </Text>

          {!!item.observacao && (
            <Text style={styles.observacaoHistorico}>
              {item.observacao}
            </Text>
          )}
        </View>

        <View style={styles.valorHistorico}>
          <Text
            style={[
              styles.quantidadeHistorico,
              {
                color: entrada ? '#16A34A' : '#DC2626',
              },
            ]}
          >
            {entrada ? '+' : '-'}
            {item.quantidade}
          </Text>

          <Text style={styles.tipoHistorico}>
            {entrada ? 'Entrada' : 'Saída'}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* CABEÇALHO */}

      <View style={styles.topo}>
        <TouchableOpacity
          style={styles.voltar}
          onPress={() => router.back()}
        >
          <FontAwesome
            name="arrow-left"
            size={19}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.titulo}>
            Movimentações
          </Text>

          <Text style={styles.subtitulo}>
            Entradas e saídas do estoque
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* FORMULÁRIO */}

        <View style={styles.formulario}>
          <Text style={styles.secao}>
            Localizar produto
          </Text>

          <Text style={styles.label}>
            Código do produto
          </Text>

          <View style={styles.linhaBusca}>
            <TextInput
              style={styles.inputCodigo}
              placeholder="Ex.: 1"
              placeholderTextColor="#94A3B8"
              value={codigo}
              onChangeText={(valor) => {
                setCodigo(valor);
                setProduto(null);
              }}
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.botaoBuscar}
              onPress={localizarProduto}
              disabled={buscando}
            >
              {buscando ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <FontAwesome
                    name="search"
                    size={16}
                    color="#FFFFFF"
                  />

                  <Text style={styles.textoBuscar}>
                    Buscar
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>

          {/* PRODUTO ENCONTRADO */}

          {produto && (
            <View style={styles.produtoEncontrado}>
              <View style={styles.iconeProduto}>
                <FontAwesome
                  name="cube"
                  size={25}
                  color="#2563EB"
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.nomeProduto}>
                  {produto.nome}
                </Text>

                <Text style={styles.categoriaProduto}>
                  {produto.categoria} • Código #{produto.id}
                </Text>

                <Text style={styles.estoqueAtual}>
                  Estoque atual: {produto.quantidade} unidades
                </Text>
              </View>

              <FontAwesome
                name="check-circle"
                size={21}
                color="#16A34A"
              />
            </View>
          )}

          <View style={styles.divisor} />

          {/* TIPO DE MOVIMENTAÇÃO */}

          <Text style={styles.secao}>
            Tipo de movimentação
          </Text>

          <View style={styles.linhaTipos}>
            <TouchableOpacity
              style={[
                styles.opcaoTipo,
                tipo === 'ENTRADA' &&
                  styles.opcaoEntradaSelecionada,
              ]}
              onPress={() => setTipo('ENTRADA')}
            >
              <FontAwesome
                name="arrow-down"
                size={19}
                color={
                  tipo === 'ENTRADA'
                    ? '#FFFFFF'
                    : '#16A34A'
                }
              />

              <Text
                style={[
                  styles.textoTipo,
                  tipo === 'ENTRADA' &&
                    styles.textoTipoSelecionado,
                ]}
              >
                Entrada
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.opcaoTipo,
                tipo === 'SAIDA' &&
                  styles.opcaoSaidaSelecionada,
              ]}
              onPress={() => setTipo('SAIDA')}
            >
              <FontAwesome
                name="arrow-up"
                size={19}
                color={
                  tipo === 'SAIDA'
                    ? '#FFFFFF'
                    : '#DC2626'
                }
              />

              <Text
                style={[
                  styles.textoTipo,
                  tipo === 'SAIDA' &&
                    styles.textoTipoSelecionado,
                ]}
              >
                Saída
              </Text>
            </TouchableOpacity>
          </View>

          {/* QUANTIDADE */}

          <Text style={styles.label}>
            Quantidade *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            placeholderTextColor="#94A3B8"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />

          {/* OBSERVAÇÃO */}

          <Text style={styles.label}>
            Observação
          </Text>

          <TextInput
            style={[
              styles.input,
              styles.inputObservacao,
            ]}
            placeholder="Motivo da movimentação (opcional)"
            placeholderTextColor="#94A3B8"
            value={observacao}
            onChangeText={setObservacao}
            multiline
            textAlignVertical="top"
          />

          {/* BOTÃO REGISTRAR */}

          <TouchableOpacity
            style={[
              styles.botaoRegistrar,
              tipo === 'SAIDA' &&
                styles.botaoRegistrarSaida,
              (!produto || salvando) && {
                opacity: 0.55,
              },
            ]}
            onPress={confirmarMovimentacao}
            disabled={!produto || salvando}
          >
            {salvando ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <FontAwesome
                  name={
                    tipo === 'ENTRADA'
                      ? 'plus-circle'
                      : 'minus-circle'
                  }
                  size={18}
                  color="#FFFFFF"
                />

                <Text style={styles.textoRegistrar}>
                  Registrar{' '}
                  {tipo === 'ENTRADA'
                    ? 'entrada'
                    : 'saída'}
                </Text>
              </>
            )}
          </TouchableOpacity>

          {!produto && (
            <Text style={styles.ajuda}>
              Localize um produto antes de registrar uma movimentação.
            </Text>
          )}
        </View>

        {/* HISTÓRICO */}

        <View style={styles.historicoTopo}>
          <View>
            <Text style={styles.tituloHistorico}>
              Histórico
            </Text>

            <Text style={styles.subtituloHistorico}>
              Últimas movimentações registradas
            </Text>
          </View>

          <FontAwesome
            name="history"
            size={23}
            color="#2563EB"
          />
        </View>

        {carregando ? (
          <ActivityIndicator
            size="large"
            color="#2563EB"
            style={{ marginVertical: 25 }}
          />
        ) : movimentacoes.length === 0 ? (
          <View style={styles.vazio}>
            <FontAwesome
              name="exchange"
              size={38}
              color="#CBD5E1"
            />

            <Text style={styles.vazioTexto}>
              Nenhuma movimentação registrada.
            </Text>
          </View>
        ) : (
          movimentacoes.map((item) => (
            <View key={item.id}>
              {renderizarMovimentacao({ item })}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

// ESTILOS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  topo: {
    backgroundColor: '#2563EB',
    paddingTop: 55,
    paddingBottom: 25,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  voltar: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#DBEAFE',
    fontSize: 13,
    marginTop: 3,
  },

  conteudo: {
    padding: 20,
    paddingBottom: 35,
  },

  formulario: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  secao: {
    color: '#111827',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  label: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },

  linhaBusca: {
    flexDirection: 'row',
    gap: 10,
  },

  inputCodigo: {
    flex: 1,
    height: 48,
    backgroundColor: '#F8FAFC',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 13,
    color: '#111827',
    fontSize: 15,
  },

  botaoBuscar: {
    width: 105,
    height: 48,
    backgroundColor: '#2563EB',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  textoBuscar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },

  produtoEncontrado: {
    backgroundColor: '#EFF6FF',
    borderRadius: 13,
    padding: 12,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },

  iconeProduto: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nomeProduto: {
    color: '#1E40AF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  categoriaProduto: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 3,
  },

  estoqueAtual: {
    color: '#16A34A',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },

  divisor: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 20,
  },

  linhaTipos: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  opcaoTipo: {
    flex: 1,
    height: 48,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
  },

  opcaoEntradaSelecionada: {
    backgroundColor: '#16A34A',
    borderColor: '#16A34A',
  },

  opcaoSaidaSelecionada: {
    backgroundColor: '#DC2626',
    borderColor: '#DC2626',
  },

  textoTipo: {
    color: '#334155',
    fontSize: 14,
    fontWeight: 'bold',
  },

  textoTipoSelecionado: {
    color: '#FFFFFF',
  },

  input: {
    height: 49,
    backgroundColor: '#F8FAFC',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 13,
    color: '#111827',
    fontSize: 14,
    marginBottom: 17,
  },

  inputObservacao: {
    height: 85,
    paddingTop: 12,
  },

  botaoRegistrar: {
    height: 51,
    backgroundColor: '#16A34A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 3,
  },

  botaoRegistrarSaida: {
    backgroundColor: '#DC2626',
  },

  textoRegistrar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  ajuda: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 10,
  },

  historicoTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
    marginBottom: 15,
  },

  tituloHistorico: {
    color: '#111827',
    fontSize: 19,
    fontWeight: 'bold',
  },

  subtituloHistorico: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 4,
  },

  cartaoHistorico: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 13,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 11,
  },

  iconeHistorico: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fundoEntrada: {
    backgroundColor: '#DCFCE7',
  },

  fundoSaida: {
    backgroundColor: '#FEE2E2',
  },

  dadosHistorico: {
    flex: 1,
  },

  nomeHistorico: {
    color: '#111827',
    fontSize: 13,
    fontWeight: 'bold',
  },

  dataHistorico: {
    color: '#94A3B8',
    fontSize: 10,
    marginTop: 4,
  },

  observacaoHistorico: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 4,
  },

  valorHistorico: {
    alignItems: 'flex-end',
  },

  quantidadeHistorico: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  tipoHistorico: {
    color: '#94A3B8',
    fontSize: 10,
    marginTop: 3,
  },

  vazio: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    alignItems: 'center',
    padding: 25,
  },

  vazioTexto: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
  },
});
