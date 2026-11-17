
import React, { useCallback, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';

import { useRouter, useFocusEffect } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import {
  Produto,
  Movimentacao,
  listarProdutos,
  listarMovimentacoes,
} from '../database/database';

import BarraInferior from '../components/barraInferior';

export default function VisaoGeral() {
  const router = useRouter();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [movimentacoes, setMovimentacoes] = useState<Movimentacao[]>([]);
  const [carregando, setCarregando] = useState(true);

  const carregarEstoque = useCallback(async () => {
    try {
      setCarregando(true);

      const [dadosProdutos, dadosMovimentacoes] = await Promise.all([
        listarProdutos(),
        listarMovimentacoes(),
      ]);

      setProdutos(dadosProdutos);
      setMovimentacoes(dadosMovimentacoes);
    } catch (erro) {
      console.error('Erro ao carregar dashboard:', erro);
    } finally {
      setCarregando(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarEstoque();
    }, [carregarEstoque])
  );

  // ESTATÍSTICAS

  const produtosBaixos = produtos.filter(
    (produto) => produto.quantidade <= produto.estoque_minimo
  );

  const totalProdutos = produtos.length;

  const valorTotalEstoque = produtos.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );

  const totalEntradas = movimentacoes
    .filter((movimentacao) => movimentacao.tipo === 'ENTRADA')
    .reduce((total, movimentacao) => total + movimentacao.quantidade, 0);

  const totalSaidas = movimentacoes
    .filter((movimentacao) => movimentacao.tipo === 'SAIDA')
    .reduce((total, movimentacao) => total + movimentacao.quantidade, 0);

  const formatarMoeda = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollConteudo}
      >
        {/* CABEÇALHO */}
        <View style={styles.topo}>
          <View style={styles.iconeTopo}>
            <FontAwesome name="bar-chart" size={30} color="#FFFFFF" />
          </View>

          <Text style={styles.tituloTopo}>
            Visão geral
          </Text>

          <Text style={styles.subtituloTopo}>
            Acompanhe as informações do seu estoque.
          </Text>
        </View>

        <View style={styles.conteudo}>
          {/* TÍTULO */}
          <View style={styles.cabecalhoSecao}>
            <Text style={styles.tituloSecao}>
              Resumo do estoque
            </Text>

            <Text style={styles.subtituloSecao}>
              Informações atualizadas dos seus produtos
            </Text>
          </View>

          {carregando ? (
            <View style={styles.carregandoResumo}>
              <ActivityIndicator size="small" color="#2563EB" />

              <Text style={styles.textoCarregando}>
                Atualizando informações...
              </Text>
            </View>
          ) : (
            <View style={styles.gradeEstatisticas}>
              {/* PRODUTOS */}
              <View style={styles.cartaoEstatistica}>
                <View style={[styles.iconeEstatistica, { backgroundColor: '#DBEAFE' }]}>
                  <FontAwesome name="cube" size={21} color="#2563EB" />
                </View>

                <Text style={styles.numeroEstatistica}>
                  {totalProdutos}
                </Text>

                <Text style={styles.nomeEstatistica}>
                  Produtos cadastrados
                </Text>
              </View>

              {/* VALOR TOTAL */}
              <View style={styles.cartaoEstatistica}>
                <View style={[styles.iconeEstatistica, { backgroundColor: '#DCFCE7' }]}>
                  <FontAwesome name="money" size={21} color="#16A34A" />
                </View>

                <Text style={styles.numeroEstatisticaValor}>
                  {formatarMoeda(valorTotalEstoque)}
                </Text>

                <Text style={styles.nomeEstatistica}>
                  Valor total do estoque
                </Text>
              </View>

              {/* ENTRADAS */}
              <View style={styles.cartaoEstatistica}>
                <View style={[styles.iconeEstatistica, { backgroundColor: '#FEF3C7' }]}>
                  <FontAwesome name="arrow-down" size={21} color="#D97706" />
                </View>

                <Text style={styles.numeroEstatistica}>
                  {totalEntradas.toLocaleString('pt-BR')}
                </Text>

                <Text style={styles.nomeEstatistica}>
                  Unidades que entraram
                </Text>
              </View>

              {/* SAÍDAS */}
              <View style={styles.cartaoEstatistica}>
                <View style={[styles.iconeEstatistica, { backgroundColor: '#FEE2E2' }]}>
                  <FontAwesome name="arrow-up" size={21} color="#DC2626" />
                </View>

                <Text style={styles.numeroEstatistica}>
                  {totalSaidas.toLocaleString('pt-BR')}
                </Text>

                <Text style={styles.nomeEstatistica}>
                  Unidades que saíram
                </Text>
              </View>
            </View>
          )}

          {/* ALERTA DE ESTOQUE */}
          {carregando ? (
            <View style={styles.carregando}>
              <ActivityIndicator size="small" color="#2563EB" />

              <Text style={styles.textoCarregando}>
                Verificando estoque...
              </Text>
            </View>
          ) : (
            <View
              style={[
                styles.alertaEstoque,
                produtosBaixos.length > 0
                  ? styles.alertaPerigo
                  : styles.alertaSucesso,
              ]}
            >
              <View style={styles.alertaTopo}>
                <View
                  style={[
                    styles.alertaIcone,
                    produtosBaixos.length > 0
                      ? styles.iconePerigo
                      : styles.iconeSucesso,
                  ]}
                >
                  <FontAwesome
                    name={
                      produtosBaixos.length > 0
                        ? 'exclamation-triangle'
                        : 'check-circle'
                    }
                    size={23}
                    color={
                      produtosBaixos.length > 0
                        ? '#DC2626'
                        : '#16A34A'
                    }
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.alertaTitulo,
                      {
                        color:
                          produtosBaixos.length > 0
                            ? '#991B1B'
                            : '#166534',
                      },
                    ]}
                  >
                    {produtosBaixos.length > 0
                      ? 'Atenção ao estoque!'
                      : 'Estoque em dia!'}
                  </Text>

                  <Text
                    style={[
                      styles.alertaDescricao,
                      {
                        color:
                          produtosBaixos.length > 0
                            ? '#991B1B'
                            : '#166534',
                      },
                    ]}
                  >
                    {produtosBaixos.length > 0
                      ? `${produtosBaixos.length} produto(s) precisam de reposição.`
                      : 'Nenhum produto precisa de reposição no momento.'}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.numeroAlerta,
                    {
                      color:
                        produtosBaixos.length > 0
                          ? '#DC2626'
                          : '#16A34A',
                    },
                  ]}
                >
                  {produtosBaixos.length}
                </Text>
              </View>

              {produtosBaixos.length > 0 && (
                <View style={styles.listaAlerta}>
                  {produtosBaixos.slice(0, 3).map((produto) => (
                    <View
                      key={produto.id}
                      style={styles.produtoAlerta}
                    >
                      {produto.imagem ? (
                        <Image
                          source={{ uri: produto.imagem }}
                          style={styles.fotoAlerta}
                        />
                      ) : (
                        <View style={styles.fotoPadrao}>
                          <FontAwesome
                            name="cube"
                            size={17}
                            color="#DC2626"
                          />
                        </View>
                      )}

                      <View style={{ flex: 1 }}>
                        <Text
                          style={styles.nomeAlerta}
                          numberOfLines={1}
                        >
                          {produto.nome}
                        </Text>

                        <Text style={styles.quantidadeAlerta}>
                          Disponível: {produto.quantidade} • Mínimo: {produto.estoque_minimo}
                        </Text>
                      </View>

                      <FontAwesome
                        name="exclamation-circle"
                        size={17}
                        color="#DC2626"
                      />
                    </View>
                  ))}

                  {produtosBaixos.length > 3 && (
                    <Text style={styles.maisProdutos}>
                      E mais {produtosBaixos.length - 3} produto(s)...
                    </Text>
                  )}

                  <TouchableOpacity
                    style={styles.botaoVerProdutos}
                    onPress={() => router.push('/produtos')}
                  >
                    <Text style={styles.textoVerProdutos}>
                      Ver todos os produtos
                    </Text>

                    <FontAwesome
                      name="arrow-right"
                      size={14}
                      color="#DC2626"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}

          {/* ATUALIZAÇÃO */}
          <View style={styles.informacao}>
            <FontAwesome name="info-circle" size={20} color="#2563EB" />

            <Text style={styles.textoInformacao}>
              Os dados são atualizados automaticamente ao abrir esta tela.
            </Text>
          </View>

          <Text style={styles.rodape}>
            Meu Estoque • Visão geral
          </Text>
        </View>
      </ScrollView>

      {/* NAVEGAÇÃO INFERIOR */}
      <BarraInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  scrollConteudo: {
    paddingBottom: 20,
  },

  topo: {
    backgroundColor: '#2563EB',
    paddingTop: 60,
    paddingBottom: 35,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  iconeTopo: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  tituloTopo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtituloTopo: {
    color: '#DBEAFE',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 21,
  },

  conteudo: {
    padding: 22,
  },

  cabecalhoSecao: {
    marginBottom: 18,
  },

  tituloSecao: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },

  subtituloSecao: {
    fontSize: 13,
    color: '#64748B',
  },

  gradeEstatisticas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 23,
  },

  cartaoEstatistica: {
    width: '48%',
    minHeight: 145,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
  },

  iconeEstatistica: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  numeroEstatistica: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#111827',
  },

  numeroEstatisticaValor: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#111827',
  },

  nomeEstatistica: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
  },

  carregandoResumo: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 22,
  },

  carregando: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },

  textoCarregando: {
    color: '#64748B',
    fontSize: 13,
  },

  alertaEstoque: {
    padding: 16,
    borderRadius: 17,
    marginBottom: 22,
    borderWidth: 1,
  },

  alertaPerigo: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
  },

  alertaSucesso: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
  },

  alertaTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  alertaIcone: {
    width: 45,
    height: 45,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconePerigo: {
    backgroundColor: '#FEE2E2',
  },

  iconeSucesso: {
    backgroundColor: '#DCFCE7',
  },

  alertaTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  alertaDescricao: {
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },

  numeroAlerta: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  listaAlerta: {
    borderTopWidth: 1,
    borderTopColor: '#FECACA',
    marginTop: 15,
    paddingTop: 12,
  },

  produtoAlerta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 9,
  },

  fotoAlerta: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },

  fotoPadrao: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nomeAlerta: {
    color: '#7F1D1D',
    fontSize: 13,
    fontWeight: 'bold',
  },

  quantidadeAlerta: {
    color: '#991B1B',
    fontSize: 11,
    marginTop: 3,
  },

  maisProdutos: {
    color: '#991B1B',
    fontSize: 12,
    marginTop: 8,
  },

  botaoVerProdutos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    backgroundColor: '#FEE2E2',
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },

  textoVerProdutos: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: 'bold',
  },

  informacao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#DBEAFE',
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
  },

  textoInformacao: {
    flex: 1,
    color: '#1E40AF',
    fontSize: 12,
    lineHeight: 18,
  },

  rodape: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 15,
  },
});
