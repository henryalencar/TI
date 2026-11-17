
import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import {
  Produto,
  Fornecedor,
  buscarProduto,
  listarFornecedores,
  salvarProduto,
} from '../database/database';

export default function CadastroProduto() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();

  const id = params.id ? Number(params.id) : undefined;
  const editando = !!id;

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('0');
  const [estoqueMinimo, setEstoqueMinimo] = useState('5');

  const [imagem, setImagem] = useState<string | null>(null);

  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [fornecedorSelecionado, setFornecedorSelecionado] =
    useState<Fornecedor | null>(null);

  const [modalFornecedores, setModalFornecedores] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    async function carregarDados() {
      try {
        const listaFornecedores = await listarFornecedores();
        setFornecedores(listaFornecedores);

        if (id) {
          const produto: Produto | null = await buscarProduto(id);

          if (!produto) {
            Alert.alert('Atenção', 'Produto não encontrado.');
            router.back();
            return;
          }

          setNome(produto.nome);
          setCategoria(produto.categoria);
          setPreco(String(produto.preco).replace('.', ','));
          setQuantidade(String(produto.quantidade));
          setEstoqueMinimo(String(produto.estoque_minimo));
          setImagem(produto.imagem ?? null);

          if (produto.fornecedor_id) {
            const fornecedor = listaFornecedores.find(
              (item) => item.id === produto.fornecedor_id
            );

            setFornecedorSelecionado(fornecedor ?? null);
          }
        }
      } catch (erro) {
        console.error(erro);
        Alert.alert('Erro', 'Não foi possível carregar os dados.');
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, [id]);

  async function escolherImagem() {
    try {
      const permissao =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissao.granted) {
        Alert.alert(
          'Permissão necessária',
          'Precisamos de acesso à galeria para selecionar uma imagem.'
        );
        return;
      }

      const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      if (!resultado.canceled && resultado.assets.length > 0) {
        setImagem(resultado.assets[0].uri);
      }
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível selecionar a imagem.');
    }
  }

  function removerImagem() {
    Alert.alert(
      'Remover imagem',
      'Deseja remover a imagem deste produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => setImagem(null),
        },
      ]
    );
  }

  async function salvar() {
    const precoNumerico = Number(preco.replace(',', '.'));
    const quantidadeNumerica = Number(quantidade);
    const estoqueMinimoNumerico = Number(estoqueMinimo);

    if (!nome.trim()) {
      Alert.alert('Atenção', 'Informe o nome do produto.');
      return;
    }

    if (!categoria.trim()) {
      Alert.alert('Atenção', 'Informe a categoria.');
      return;
    }

    if (
      preco.trim() === '' ||
      !Number.isFinite(precoNumerico) ||
      precoNumerico < 0
    ) {
      Alert.alert('Atenção', 'Informe um preço válido.');
      return;
    }

    if (
      !Number.isInteger(quantidadeNumerica) ||
      quantidadeNumerica < 0
    ) {
      Alert.alert('Atenção', 'Informe uma quantidade inteira válida.');
      return;
    }

    if (
      !Number.isInteger(estoqueMinimoNumerico) ||
      estoqueMinimoNumerico < 0
    ) {
      Alert.alert('Atenção', 'Informe um estoque mínimo válido.');
      return;
    }

    try {
      setSalvando(true);

      await salvarProduto(
        {
          nome: nome.trim(),
          categoria: categoria.trim(),
          preco: precoNumerico,
          quantidade: quantidadeNumerica,
          estoque_minimo: estoqueMinimoNumerico,
          fornecedor_id: fornecedorSelecionado?.id ?? null,
          imagem: imagem,
        },
        id
      );

      Alert.alert(
        'Sucesso',
        editando
          ? 'Produto atualizado com sucesso!'
          : 'Produto cadastrado com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/produtos'),
          },
        ]
      );
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível salvar o produto.');
    } finally {
      setSalvando(false);
    }
  }

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.topo}>
        <TouchableOpacity
          style={styles.voltar}
          onPress={() => router.back()}
        >
          <FontAwesome name="arrow-left" size={19} color="#FFFFFF" />
        </TouchableOpacity>

        <View>
          <Text style={styles.titulo}>
            {editando ? 'Editar produto' : 'Novo produto'}
          </Text>

          <Text style={styles.subtitulo}>
            Preencha os dados do produto
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.iconeCabecalho}>
          <FontAwesome name="cube" size={34} color="#2563EB" />
        </View>

        {/* IMAGEM DO PRODUTO */}
        <Text style={styles.secao}>Imagem do produto</Text>

        <View style={styles.areaImagem}>
          {imagem ? (
            <Image
              source={{ uri: imagem }}
              style={styles.imagemProduto}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.semImagem}>
              <FontAwesome name="camera" size={35} color="#94A3B8" />
              <Text style={styles.textoSemImagem}>
                Nenhuma imagem selecionada
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.botaoImagem}
          onPress={escolherImagem}
        >
          <FontAwesome name="image" size={17} color="#FFFFFF" />
          <Text style={styles.textoBotaoImagem}>
            {imagem ? 'Trocar imagem' : 'Escolher imagem'}
          </Text>
        </TouchableOpacity>

        {imagem && (
          <TouchableOpacity
            style={styles.botaoRemoverImagem}
            onPress={removerImagem}
          >
            <FontAwesome name="trash" size={15} color="#EF4444" />
            <Text style={styles.textoRemoverImagem}>
              Remover imagem
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.secao}>Informações do produto</Text>

        <Text style={styles.label}>Nome do produto *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Camiseta básica"
          placeholderTextColor="#94A3B8"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Categoria *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Roupas, Eletrônicos..."
          placeholderTextColor="#94A3B8"
          value={categoria}
          onChangeText={setCategoria}
        />

        <Text style={styles.label}>Preço (R$) *</Text>
        <TextInput
          style={styles.input}
          placeholder="0,00"
          placeholderTextColor="#94A3B8"
          value={preco}
          onChangeText={setPreco}
          keyboardType="decimal-pad"
        />

        <View style={styles.linhaCampos}>
          <View style={styles.campoMetade}>
            <Text style={styles.label}>Quantidade *</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor="#94A3B8"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.campoMetade}>
            <Text style={styles.label}>Estoque mínimo *</Text>
            <TextInput
              style={styles.input}
              placeholder="5"
              placeholderTextColor="#94A3B8"
              value={estoqueMinimo}
              onChangeText={setEstoqueMinimo}
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.secao}>Fornecedor</Text>

        <TouchableOpacity
          style={styles.seletor}
          onPress={() => setModalFornecedores(true)}
        >
          <View style={styles.seletorIcone}>
            <FontAwesome name="truck" size={19} color="#2563EB" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.seletorTitulo}>
              {fornecedorSelecionado
                ? fornecedorSelecionado.nome
                : 'Selecionar fornecedor'}
            </Text>

            <Text style={styles.seletorDescricao}>
              {fornecedorSelecionado
                ? 'Fornecedor selecionado'
                : 'Opcional'}
            </Text>
          </View>

          <FontAwesome name="chevron-down" size={15} color="#64748B" />
        </TouchableOpacity>

        {fornecedorSelecionado && (
          <TouchableOpacity
            onPress={() => setFornecedorSelecionado(null)}
            style={styles.removerFornecedor}
          >
            <FontAwesome name="times-circle" size={15} color="#EF4444" />
            <Text style={styles.textoRemover}>
              Remover fornecedor
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.botaoSalvar, salvando && { opacity: 0.6 }]}
          onPress={salvar}
          disabled={salvando}
        >
          {salvando ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <FontAwesome name="check" size={17} color="#FFFFFF" />
              <Text style={styles.textoBotao}>
                {editando ? 'Salvar alterações' : 'Cadastrar produto'}
              </Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCancelar}
          onPress={() => router.back()}
        >
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={modalFornecedores}
        transparent
        animationType="slide"
        onRequestClose={() => setModalFornecedores(false)}
      >
        <View style={styles.fundoModal}>
          <View style={styles.modal}>
            <View style={styles.modalTopo}>
              <Text style={styles.modalTitulo}>
                Escolher fornecedor
              </Text>

              <TouchableOpacity
                onPress={() => setModalFornecedores(false)}
              >
                <FontAwesome name="times" size={22} color="#64748B" />
              </TouchableOpacity>
            </View>

            <ScrollView>
              {fornecedores.length === 0 ? (
                <Text style={styles.semFornecedor}>
                  Nenhum fornecedor cadastrado.
                </Text>
              ) : (
                fornecedores.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.itemFornecedor}
                    onPress={() => {
                      setFornecedorSelecionado(item);
                      setModalFornecedores(false);
                    }}
                  >
                    <FontAwesome
                      name="truck"
                      size={19}
                      color="#2563EB"
                    />

                    <View style={{ flex: 1 }}>
                      <Text style={styles.nomeFornecedor}>
                        {item.nome}
                      </Text>
                      <Text style={styles.cidadeFornecedor}>
                        {item.cidade || 'Cidade não informada'}
                      </Text>
                    </View>

                    {fornecedorSelecionado?.id === item.id && (
                      <FontAwesome
                        name="check-circle"
                        size={20}
                        color="#16A34A"
                      />
                    )}
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>

            <TouchableOpacity
              style={styles.fecharModal}
              onPress={() => setModalFornecedores(false)}
            >
              <Text style={styles.textoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  carregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingBottom: 40,
  },

  iconeCabecalho: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 22,
  },

  secao: {
    color: '#111827',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },

  areaImagem: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 14,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
  },

  imagemProduto: {
    width: '100%',
    height: '100%',
  },

  semImagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  textoSemImagem: {
    color: '#64748B',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },

  botaoImagem: {
    height: 46,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 9,
    marginBottom: 8,
  },

  textoBotaoImagem: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  botaoRemoverImagem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    padding: 10,
    marginBottom: 12,
  },

  textoRemoverImagem: {
    color: '#EF4444',
    fontSize: 13,
    fontWeight: '600',
  },

  label: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#111827',
    marginBottom: 16,
  },

  linhaCampos: {
    flexDirection: 'row',
    gap: 12,
  },

  campoMetade: {
    flex: 1,
  },

  seletor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 13,
    gap: 12,
  },

  seletorIcone: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  seletorTitulo: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },

  seletorDescricao: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 3,
  },

  removerFornecedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 10,
  },

  textoRemover: {
    color: '#EF4444',
    fontSize: 12,
  },

  botaoSalvar: {
    height: 52,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 28,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  botaoCancelar: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  textoCancelar: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '600',
  },

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },

  modal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 22,
    maxHeight: '75%',
  },

  modalTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },

  semFornecedor: {
    textAlign: 'center',
    color: '#64748B',
    padding: 25,
  },

  itemFornecedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },

  nomeFornecedor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },

  cidadeFornecedor: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 3,
  },

  fecharModal: {
    backgroundColor: '#DBEAFE',
    height: 45,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  textoFechar: {
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
});
