
import React, { useCallback, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';

import { useRouter, useFocusEffect } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import {
  Produto,
  listarProdutos,
  excluirProduto,
} from '../database/database';

export default function Produtos() {
  const router = useRouter();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [pesquisa, setPesquisa] = useState('');
  const [carregando, setCarregando] = useState(true);

  const carregarProdutos = useCallback(async () => {
    try {
      setCarregando(true);

      const dados = await listarProdutos(pesquisa);
      setProdutos(dados);
    } catch (erro) {
      console.error(erro);
      Alert.alert('Erro', 'Não foi possível carregar os produtos.');
    } finally {
      setCarregando(false);
    }
  }, [pesquisa]);

  useFocusEffect(
    useCallback(() => {
      carregarProdutos();
    }, [carregarProdutos])
  );

  function confirmarExclusao(produto: Produto) {
    Alert.alert(
      'Excluir produto',
      `Deseja realmente excluir "${produto.nome}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await excluirProduto(produto.id);
              carregarProdutos();
            } catch (erro) {
              Alert.alert(
                'Não foi possível excluir',
                'Este produto possui movimentações registradas e não pode ser excluído.'
              );
            }
          },
        },
      ]
    );
  }

  function abrirEdicao(produto: Produto) {
    router.push({
      pathname: '/cadastroProduto',
      params: { id: String(produto.id) },
    });
  }

  function renderizarProduto({ item }: { item: Produto }) {
    const estoqueBaixo = item.quantidade <= item.estoque_minimo;

    return (
      <View style={styles.cartao}>

        <View style={styles.linhaTopo}>

          {/* FOTO DO PRODUTO */}
          {item.imagem ? (
            <Image
              source={{ uri: item.imagem }}
              style={styles.imagemProduto}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.iconeProduto}>
              <FontAwesome
                name="cube"
                size={25}
                color="#2563EB"
              />
            </View>
          )}

          <View style={styles.informacoes}>
            <Text style={styles.nome} numberOfLines={2}>
              {item.nome}
            </Text>

            <Text style={styles.categoria}>
              {item.categoria}
            </Text>

            <Text style={styles.codigo}>
              Código: #{item.id}
            </Text>
          </View>

          <View style={styles.acoes}>
            <TouchableOpacity
              style={styles.botaoEditar}
              onPress={() => abrirEdicao(item)}
            >
              <FontAwesome
                name="pencil"
                size={17}
                color="#2563EB"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => confirmarExclusao(item)}
            >
              <FontAwesome
                name="trash"
                size={17}
                color="#EF4444"
              />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.divisor} />

        <View style={styles.linhaInferior}>
          <View>
            <Text style={styles.rotulo}>Preço</Text>

            <Text style={styles.preco}>
              {item.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </View>

          <View>
            <Text style={styles.rotulo}>Quantidade</Text>

            <Text style={styles.quantidade}>
              {item.quantidade} unidades
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.statusEstoque,
            estoqueBaixo
              ? styles.estoqueBaixo
              : styles.estoqueNormal,
          ]}
        >
          <FontAwesome
            name={
              estoqueBaixo
                ? 'exclamation-circle'
                : 'check-circle'
            }
            size={14}
            color={estoqueBaixo ? '#DC2626' : '#16A34A'}
          />

          <Text
            style={[
              styles.statusTexto,
              {
                color: estoqueBaixo
                  ? '#DC2626'
                  : '#16A34A',
              },
            ]}
          >
            {estoqueBaixo
              ? 'Estoque baixo'
              : 'Estoque normal'}
          </Text>
        </View>

        {item.fornecedor_nome ? (
          <Text style={styles.fornecedor}>
            Fornecedor: {item.fornecedor_nome}
          </Text>
        ) : null}

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
          <FontAwesome
            name="arrow-left"
            size={19}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.titulo}>Produtos</Text>

          <Text style={styles.subtitulo}>
            Consulte seu estoque
          </Text>
        </View>
      </View>

      <View style={styles.conteudo}>

        <View style={styles.pesquisaContainer}>
          <FontAwesome
            name="search"
            size={18}
            color="#64748B"
          />

          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquisar produto ou código..."
            placeholderTextColor="#94A3B8"
            value={pesquisa}
            onChangeText={setPesquisa}
          />

          {pesquisa.length > 0 && (
            <TouchableOpacity
              onPress={() => setPesquisa('')}
            >
              <FontAwesome
                name="times-circle"
                size={18}
                color="#94A3B8"
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.resumo}>
          <View>
            <Text style={styles.resumoNumero}>
              {produtos.length}
            </Text>

            <Text style={styles.resumoTexto}>
              Produtos encontrados
            </Text>
          </View>

          <FontAwesome
            name="cube"
            size={27}
            color="#2563EB"
          />
        </View>

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => router.push('/cadastroProduto')}
        >
          <FontAwesome
            name="plus"
            size={17}
            color="#FFFFFF"
          />

          <Text style={styles.textoBotaoAdicionar}>
            Novo produto
          </Text>
        </TouchableOpacity>

        {carregando ? (
          <ActivityIndicator
            size="large"
            color="#2563EB"
            style={{ marginTop: 35 }}
          />
        ) : (
          <FlatList
            data={produtos}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderizarProduto}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.lista}
            onRefresh={carregarProdutos}
            refreshing={carregando}
            ListEmptyComponent={
              <View style={styles.vazio}>
                <FontAwesome
                  name="inbox"
                  size={48}
                  color="#CBD5E1"
                />

                <Text style={styles.vazioTitulo}>
                  Nenhum produto encontrado
                </Text>

                <Text style={styles.vazioTexto}>
                  Cadastre um produto para começar a controlar seu estoque.
                </Text>
              </View>
            }
          />
        )}

      </View>
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
    fontSize: 25,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#DBEAFE',
    fontSize: 13,
    marginTop: 3,
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  pesquisaContainer: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  inputPesquisa: {
    flex: 1,
    color: '#111827',
    fontSize: 14,
  },

  resumo: {
    backgroundColor: '#DBEAFE',
    borderRadius: 16,
    padding: 17,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  resumoNumero: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E40AF',
  },

  resumoTexto: {
    color: '#1E40AF',
    fontSize: 13,
    marginTop: 2,
  },

  botaoAdicionar: {
    height: 50,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    marginTop: 17,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  textoBotaoAdicionar: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  lista: {
    paddingBottom: 25,
  },

  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 16,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  linhaTopo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imagemProduto: {
    width: 62,
    height: 62,
    borderRadius: 13,
    backgroundColor: '#F1F5F9',
  },

  iconeProduto: {
    width: 62,
    height: 62,
    borderRadius: 13,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  informacoes: {
    flex: 1,
    marginLeft: 12,
  },

  nome: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold',
  },

  categoria: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 3,
  },

  codigo: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 3,
  },

  acoes: {
    flexDirection: 'row',
    gap: 8,
  },

  botaoEditar: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoExcluir: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divisor: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },

  linhaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rotulo: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 4,
  },

  preco: {
    color: '#111827',
    fontSize: 15,
    fontWeight: 'bold',
  },

  quantidade: {
    color: '#111827',
    fontSize: 15,
    fontWeight: 'bold',
  },

  statusEstoque: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 7,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 9,
    marginTop: 13,
  },

  estoqueBaixo: {
    backgroundColor: '#FEE2E2',
  },

  estoqueNormal: {
    backgroundColor: '#DCFCE7',
  },

  statusTexto: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  fornecedor: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 10,
  },

  vazio: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 45,
  },

  vazioTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    marginTop: 15,
  },

  vazioTexto: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 20,
  },
});
