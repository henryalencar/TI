
import React, { useCallback, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useFocusEffect, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import {
  Fornecedor,
  listarFornecedores,
  salvarFornecedor,
  excluirFornecedor,
} from '../database/database';

const formularioInicial = {
  nome: '',
  cnpj: '',
  endereco: '',
  telefone: '',
  bairro: '',
  cidade: '',
  estado: '',
  email: '',
};

export default function Fornecedores() {
  const router = useRouter();

  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [pesquisa, setPesquisa] = useState('');
  const [carregando, setCarregando] = useState(true);

  const [modalAberto, setModalAberto] = useState(false);
  const [idEdicao, setIdEdicao] = useState<number | undefined>();

  const [formulario, setFormulario] = useState(formularioInicial);
  const [salvando, setSalvando] = useState(false);

  const carregarFornecedores = useCallback(async () => {
    try {
      setCarregando(true);
      const dados = await listarFornecedores(pesquisa);
      setFornecedores(dados);
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível carregar os fornecedores.');
    } finally {
      setCarregando(false);
    }
  }, [pesquisa]);

  useFocusEffect(
    useCallback(() => {
      carregarFornecedores();
    }, [carregarFornecedores])
  );

  function atualizarCampo(
    campo: keyof typeof formulario,
    valor: string
  ) {
    setFormulario((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  }

  function abrirCadastro() {
    setIdEdicao(undefined);
    setFormulario(formularioInicial);
    setModalAberto(true);
  }

  function abrirEdicao(item: Fornecedor) {
    setIdEdicao(item.id);

    setFormulario({
      nome: item.nome ?? '',
      cnpj: item.cnpj ?? '',
      endereco: item.endereco ?? '',
      telefone: item.telefone ?? '',
      bairro: item.bairro ?? '',
      cidade: item.cidade ?? '',
      estado: item.estado ?? '',
      email: item.email ?? '',
    });

    setModalAberto(true);
  }

  async function salvar() {
    if (!formulario.nome.trim()) {
      Alert.alert('Atenção', 'Informe o nome do fornecedor.');
      return;
    }

    if (
      formulario.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email.trim())
    ) {
      Alert.alert('Atenção', 'Informe um e-mail válido.');
      return;
    }

    try {
      setSalvando(true);

      await salvarFornecedor(
        {
          nome: formulario.nome.trim(),
          cnpj: formulario.cnpj.trim(),
          endereco: formulario.endereco.trim(),
          telefone: formulario.telefone.trim(),
          bairro: formulario.bairro.trim(),
          cidade: formulario.cidade.trim(),
          estado: formulario.estado.trim().toUpperCase(),
          email: formulario.email.trim(),
        },
        idEdicao
      );

      setModalAberto(false);
      setFormulario(formularioInicial);
      setIdEdicao(undefined);

      await carregarFornecedores();

      Alert.alert(
        'Sucesso',
        idEdicao
          ? 'Fornecedor atualizado!'
          : 'Fornecedor cadastrado!'
      );
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível salvar o fornecedor.');
    } finally {
      setSalvando(false);
    }
  }

  function confirmarExclusao(item: Fornecedor) {
    Alert.alert(
      'Excluir fornecedor',
      `Deseja excluir "${item.nome}"? Os produtos vinculados continuarão cadastrados, mas ficarão sem fornecedor.`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await excluirFornecedor(item.id);
              await carregarFornecedores();
            } catch (erro) {
              console.error(erro);
              Alert.alert('Erro', 'Não foi possível excluir o fornecedor.');
            }
          },
        },
      ]
    );
  }

  function renderizarFornecedor({ item }: { item: Fornecedor }) {
    return (
      <View style={styles.cartao}>
        <View style={styles.linhaCartao}>
          <View style={styles.iconeFornecedor}>
            <FontAwesome name="truck" size={23} color="#2563EB" />
          </View>

          <View style={styles.dadosFornecedor}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.codigo}>Código: #{item.id}</Text>
            {!!item.cnpj && (
              <Text style={styles.detalhe}>CNPJ: {item.cnpj}</Text>
            )}
          </View>

          <View style={styles.acoes}>
            <TouchableOpacity
              style={styles.botaoEditar}
              onPress={() => abrirEdicao(item)}
            >
              <FontAwesome name="pencil" size={16} color="#2563EB" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => confirmarExclusao(item)}
            >
              <FontAwesome name="trash" size={16} color="#DC2626" />
            </TouchableOpacity>
          </View>
        </View>

        {!!item.telefone && (
          <View style={styles.linhaDetalhe}>
            <FontAwesome name="phone" size={14} color="#64748B" />
            <Text style={styles.detalhe}>{item.telefone}</Text>
          </View>
        )}

        {!!item.email && (
          <View style={styles.linhaDetalhe}>
            <FontAwesome name="envelope" size={14} color="#64748B" />
            <Text style={styles.detalhe}>{item.email}</Text>
          </View>
        )}

        {!!(item.cidade || item.estado) && (
          <View style={styles.linhaDetalhe}>
            <FontAwesome name="map-marker" size={15} color="#64748B" />
            <Text style={styles.detalhe}>
              {[item.cidade, item.estado].filter(Boolean).join(' - ')}
            </Text>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <TouchableOpacity
          style={styles.voltar}
          onPress={() => router.back()}
        >
          <FontAwesome name="arrow-left" size={19} color="#FFFFFF" />
        </TouchableOpacity>

        <View>
          <Text style={styles.titulo}>Fornecedores</Text>
          <Text style={styles.subtitulo}>Gerencie seus fornecedores</Text>
        </View>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.pesquisaContainer}>
          <FontAwesome name="search" size={17} color="#64748B" />

          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquisar fornecedor..."
            placeholderTextColor="#94A3B8"
            value={pesquisa}
            onChangeText={setPesquisa}
          />

          {pesquisa.length > 0 && (
            <TouchableOpacity onPress={() => setPesquisa('')}>
              <FontAwesome name="times-circle" size={18} color="#94A3B8" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.resumo}>
          <View>
            <Text style={styles.numero}>{fornecedores.length}</Text>
            <Text style={styles.resumoTexto}>Fornecedores cadastrados</Text>
          </View>

          <FontAwesome name="truck" size={28} color="#2563EB" />
        </View>

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={abrirCadastro}
        >
          <FontAwesome name="plus" size={17} color="#FFFFFF" />
          <Text style={styles.textoBotao}>Novo fornecedor</Text>
        </TouchableOpacity>

        {carregando ? (
          <ActivityIndicator
            size="large"
            color="#2563EB"
            style={{ marginTop: 30 }}
          />
        ) : (
          <FlatList
            data={fornecedores}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderizarFornecedor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 25 }}
            onRefresh={carregarFornecedores}
            refreshing={carregando}
            ListEmptyComponent={
              <View style={styles.vazio}>
                <FontAwesome name="truck" size={45} color="#CBD5E1" />
                <Text style={styles.vazioTitulo}>
                  Nenhum fornecedor encontrado
                </Text>
                <Text style={styles.vazioTexto}>
                  Cadastre seus fornecedores para vinculá-los aos produtos.
                </Text>
              </View>
            }
          />
        )}
      </View>

      <Modal
        visible={modalAberto}
        animationType="slide"
        transparent
        onRequestClose={() => setModalAberto(false)}
      >
        <KeyboardAvoidingView
          style={styles.fundoModal}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.modal}>
            <View style={styles.modalTopo}>
              <View>
                <Text style={styles.modalTitulo}>
                  {idEdicao ? 'Editar fornecedor' : 'Novo fornecedor'}
                </Text>
                <Text style={styles.modalSubtitulo}>
                  Preencha os dados do fornecedor
                </Text>
              </View>

              <TouchableOpacity onPress={() => setModalAberto(false)}>
                <FontAwesome name="times" size={22} color="#64748B" />
              </TouchableOpacity>
            </View>

            <ScrollView
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.label}>Nome *</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome do fornecedor"
                placeholderTextColor="#94A3B8"
                value={formulario.nome}
                onChangeText={(v) => atualizarCampo('nome', v)}
              />

              <Text style={styles.label}>CNPJ</Text>
              <TextInput
                style={styles.input}
                placeholder="00.000.000/0000-00"
                placeholderTextColor="#94A3B8"
                value={formulario.cnpj}
                onChangeText={(v) => atualizarCampo('cnpj', v)}
              />

              <Text style={styles.label}>Endereço</Text>
              <TextInput
                style={styles.input}
                placeholder="Rua, avenida e número"
                placeholderTextColor="#94A3B8"
                value={formulario.endereco}
                onChangeText={(v) => atualizarCampo('endereco', v)}
              />

              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.input}
                placeholder="(00) 00000-0000"
                placeholderTextColor="#94A3B8"
                value={formulario.telefone}
                onChangeText={(v) => atualizarCampo('telefone', v)}
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>Bairro</Text>
              <TextInput
                style={styles.input}
                placeholder="Bairro"
                placeholderTextColor="#94A3B8"
                value={formulario.bairro}
                onChangeText={(v) => atualizarCampo('bairro', v)}
              />

              <View style={styles.linhaCampos}>
                <View style={{ flex: 2 }}>
                  <Text style={styles.label}>Cidade</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    placeholderTextColor="#94A3B8"
                    value={formulario.cidade}
                    onChangeText={(v) => atualizarCampo('cidade', v)}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Estado</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="UF"
                    placeholderTextColor="#94A3B8"
                    value={formulario.estado}
                    onChangeText={(v) => atualizarCampo('estado', v)}
                    maxLength={2}
                    autoCapitalize="characters"
                  />
                </View>
              </View>

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="fornecedor@email.com"
                placeholderTextColor="#94A3B8"
                value={formulario.email}
                onChangeText={(v) => atualizarCampo('email', v)}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TouchableOpacity
                style={[styles.botaoSalvar, salvando && { opacity: 0.6 }]}
                onPress={salvar}
                disabled={salvando}
              >
                {salvando ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <>
                    <FontAwesome name="check" size={16} color="#FFFFFF" />
                    <Text style={styles.textoBotaoSalvar}>
                      {idEdicao ? 'Salvar alterações' : 'Cadastrar fornecedor'}
                    </Text>
                  </>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelar}
                onPress={() => setModalAberto(false)}
              >
                <Text style={styles.textoCancelar}>Cancelar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

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
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#DBEAFE',
    fontSize: 13,
    marginTop: 3,
  },

  conteudo: {
    flex: 1,
    padding: 20,
  },

  pesquisaContainer: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 10,
  },

  inputPesquisa: {
    flex: 1,
    color: '#111827',
    fontSize: 14,
  },

  resumo: {
    backgroundColor: '#DBEAFE',
    borderRadius: 15,
    padding: 17,
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  numero: {
    color: '#1E40AF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  resumoTexto: {
    color: '#1E40AF',
    fontSize: 12,
  },

  botaoAdicionar: {
    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 13,
    marginTop: 16,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  linhaCartao: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconeFornecedor: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dadosFornecedor: {
    flex: 1,
    marginLeft: 11,
  },

  nome: {
    color: '#111827',
    fontSize: 15,
    fontWeight: 'bold',
  },

  codigo: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 3,
  },

  acoes: {
    flexDirection: 'row',
    gap: 7,
  },

  botaoEditar: {
    width: 34,
    height: 34,
    borderRadius: 9,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoExcluir: {
    width: 34,
    height: 34,
    borderRadius: 9,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  linhaDetalhe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 11,
  },

  detalhe: {
    color: '#64748B',
    fontSize: 12,
    flexShrink: 1,
  },

  vazio: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  vazioTitulo: {
    color: '#334155',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 14,
  },

  vazioTexto: {
    color: '#94A3B8',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 19,
  },

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },

  modal: {
    backgroundColor: '#F4F7FB',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 22,
    maxHeight: '92%',
  },

  modalTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  modalTitulo: {
    color: '#111827',
    fontSize: 19,
    fontWeight: 'bold',
  },

  modalSubtitulo: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 4,
  },

  label: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 11,
    paddingHorizontal: 13,
    color: '#111827',
    fontSize: 14,
    marginBottom: 15,
  },

  linhaCampos: {
    flexDirection: 'row',
    gap: 12,
  },

  botaoSalvar: {
    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },

  textoBotaoSalvar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  cancelar: {
    alignItems: 'center',
    padding: 15,
  },

  textoCancelar: {
    color: '#64748B',
    fontWeight: '600',
  },
});
