import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import Header from './components/Header';
import BarraPesquisa from './components/BarraPesquisa';
import FiltroDisponibilidade from './components/FiltroDisponibilidade';
import ProdutoCard from './components/ProdutoCard';
import Carrinho from './components/Carrinho';

export default function App() {



  const [pesquisa, setPesquisa] = useState('');
  const [somenteDisponiveis, setSomenteDisponiveis] =
    useState(false);

  const [carrinho, setCarrinho] = useState([]);



  const produtos = [
  {
    id: 1,
    nome: 'Notebook',
    preco: 3500,
    disponivel: true,
    categoria: 'Tecnologia',
    imagem: require('./assets/notebook.jpg'),
  },

  {
    id: 2,
    nome: 'Mouse',
    preco: 80,
    disponivel: true,
    categoria: 'Acessórios',
    imagem: require('./assets/mouse.jpg'),
  },

  {
    id: 3,
    nome: 'Teclado',
    preco: 150,
    disponivel: false,
    categoria: 'Acessórios',
    imagem: require('./assets/teclado.jpg'),
  },

  {
    id: 4,
    nome: 'Monitor',
    preco: 1200,
    disponivel: true,
    categoria: 'Tecnologia',
    imagem: require('./assets/monitor.jpg'),
  },

  {
    id: 5,
    nome: 'Headset',
    preco: 250,
    disponivel: true,
    categoria: 'Áudio',
    imagem: require('./assets/headset.jpg'),
  },
];



  function adicionarCarrinho(produto) {
  setCarrinho((atual) => {
    const existe = atual.find(
      (item) => item.id === produto.id
    );

    if (existe) {
      return atual.map((item) =>
        item.id === produto.id
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item
      );
    }

    return [
      ...atual,
      {
        ...produto,
        quantidade: 1,
      },
    ];
  });
}



  function aumentarQuantidade(id) {

    setCarrinho(

      carrinho.map((item) =>

        item.produto.id === id

          ? {
              ...item,
              quantidade:
                item.quantidade + 1,
            }

          : item

      )

    );

  }



  function diminuirQuantidade(id) {

    setCarrinho(

      carrinho

        .map((item) =>

          item.produto.id === id

            ? {
                ...item,
                quantidade:
                  item.quantidade - 1,
              }

            : item

        )

        .filter(
          (item) =>
            item.quantidade > 0
        )

    );

  }


  function finalizarCompra() {

    if (carrinho.length === 0) {

      Alert.alert(
        'Carrinho vazio',
        'Adicione algum produto antes de finalizar.'
      );

      return;
    }

    Alert.alert(
      'Compra realizada!',
      'Sua compra foi finalizada com sucesso.'
    );

    setCarrinho([]);

  }



  const produtosFiltrados =
    produtos.filter((produto) => {

      const correspondePesquisa =
        produto.nome
          .toLowerCase()
          .includes(
            pesquisa.toLowerCase()
          );

      const correspondeDisponibilidade =
        !somenteDisponiveis ||
        produto.disponivel;

      return (
        correspondePesquisa &&
        correspondeDisponibilidade
      );

    });



  const total = carrinho.reduce(
  (soma, item) =>
    soma + item.preco * item.quantidade,
  0
);

const quantidadeItens = carrinho.reduce(
  (soma, item) =>
    soma + item.quantidade,
  0
);


  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
    >

    

      <Header
        quantidadeItens={quantidadeItens}
      />

     

      <View style={styles.apresentacao}>

        <Text style={styles.pequenoTitulo}>
          NOSSA LOJA
        </Text>

        <Text style={styles.titulo}>
          Encontre o que você precisa.
        </Text>

        <Text style={styles.descricao}>
          Produtos selecionados para facilitar
          suas compras.
        </Text>

      </View>

    

      <BarraPesquisa
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />

  

      <FiltroDisponibilidade
        somenteDisponiveis={
          somenteDisponiveis
        }
        setSomenteDisponiveis={
          setSomenteDisponiveis
        }
      />



      <View style={styles.secaoHeader}>

        <Text style={styles.secaoTitulo}>
          PRODUTOS
        </Text>

        <Text style={styles.resultados}>
          {produtosFiltrados.length}{' '}
          produtos encontrados
        </Text>

      </View>

      {produtosFiltrados.length === 0 ? (

        <View style={styles.vazio}>

          <Text style={styles.vazioIcone}>
            ⌕
          </Text>

          <Text style={styles.vazioTitulo}>
            Nenhum produto encontrado
          </Text>

          <Text style={styles.vazioTexto}>
            Tente pesquisar por outro produto.
          </Text>

        </View>

      ) : (

        produtosFiltrados.map((produto) => (

          <ProdutoCard
            key={produto.id}
            produto={produto}
            adicionarCarrinho={
              adicionarCarrinho
            }
          />

        ))

      )}

   

      <Carrinho
        carrinho={carrinho}
        quantidadeItens={quantidadeItens}
        total={total}
        aumentarQuantidade={
          aumentarQuantidade
        }
        diminuirQuantidade={
          diminuirQuantidade
        }
        finalizarCompra={
          finalizarCompra
        }
      />

    

      <View style={styles.footer}>

        <Text style={styles.footerMarca}>
          MY STORE HENRY
        </Text>

        <Text style={styles.footerTexto}>
          Mini loja desenvolvida com React Native
        </Text>

      </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },

  conteudo: {
    padding: 20,
    paddingTop: 28,
    paddingBottom: 45,
  },

  apresentacao: {
    marginBottom: 24,
  },

  pequenoTitulo: {
    color: '#2563eb',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 7,
  },

  titulo: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 36,
  },

  descricao: {
    color: '#6b7280',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 19,
  },

  secaoHeader: {
    marginBottom: 13,
  },

  secaoTitulo: {
    color: '#111827',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
  },

  resultados: {
    color: '#9ca3af',
    fontSize: 11,
    marginTop: 4,
  },

  vazio: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    paddingVertical: 38,
  },

  vazioIcone: {
    color: '#2563eb',
    fontSize: 34,
    marginBottom: 10,
  },

  vazioTitulo: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '800',
  },

  vazioTexto: {
    color: '#9ca3af',
    fontSize: 11,
    marginTop: 5,
  },

  footer: {
    alignItems: 'center',
    marginTop: 25,
  },

  footerMarca: {
    color: '#2563eb',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
  },

  footerTexto: {
    color: '#9ca3af',
    fontSize: 9,
    marginTop: 5,
  },

});