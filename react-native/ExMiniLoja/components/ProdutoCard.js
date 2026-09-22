import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';

export default function ProdutoCard({
  produto,
  adicionarCarrinho,
}) {

  function formatarPreco(valor) {

    return `R$ ${valor
      .toFixed(2)
      .replace('.', ',')}`;

  }

  return (

    <View style={styles.produto}>

      <View style={styles.produtoTopo}>

     <View
     style={[
     styles.produtoImagemContainer,
     !produto.disponivel &&
     styles.produtoImagemIndisponivel,
     ]}
     >
     <Image
     source={produto.imagem}
     style={styles.produtoImagem}
     resizeMode="contain"
   />
   </View>

        <View style={styles.informacao}>

          <Text style={styles.categoria}>
            {produto.categoria}
          </Text>

          <Text style={styles.nome}>
            {produto.nome}
          </Text>

          <Text style={styles.preco}>
            {formatarPreco(produto.preco)}
          </Text>

        </View>

      </View>

      <View style={styles.rodape}>

        <View style={styles.statusContainer}>

          <View
            style={[
              styles.bolinha,
              !produto.disponivel &&
                styles.bolinhaIndisponivel,
            ]}
          />

          <Text
            style={[
              styles.status,
              produto.disponivel
                ? styles.disponivel
                : styles.indisponivel,
            ]}
          >
            {produto.disponivel
              ? 'Em estoque'
              : 'Indisponível'}
          </Text>

        </View>

        <Pressable
          style={[
            styles.botao,
            !produto.disponivel &&
              styles.botaoDesativado,
          ]}
          onPress={() =>
            adicionarCarrinho(produto)
          }
          disabled={!produto.disponivel}
        >

          <Text style={styles.botaoTexto}>
            +
          </Text>

          <Text style={styles.botaoTexto}>
            Adicionar
          </Text>

        </Pressable>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  produto: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 17,
    marginBottom: 12,
  },

  produtoTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  produtoIcone: {
    width: 54,
    height: 54,
    borderRadius: 15,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  produtoIconeIndisponivel: {
    backgroundColor: '#f3f4f6',
  },

  produtoIconeTexto: {
    color: '#2563eb',
    fontSize: 23,
    fontWeight: '700',
  },

  informacao: {
    flex: 1,
  },

  categoria: {
    color: '#9ca3af',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  nome: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },

  preco: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '900',
  },

  rodape: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bolinha: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#22c55e',
    marginRight: 6,
  },

  bolinhaIndisponivel: {
    backgroundColor: '#ef4444',
  },

  status: {
    fontSize: 10,
    fontWeight: '800',
  },

  disponivel: {
    color: '#16a34a',
  },

  indisponivel: {
    color: '#dc2626',
  },

  botao: {
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 11,
    backgroundColor: '#2563eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoDesativado: {
    opacity: 0.35,
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '900',
    marginHorizontal: 2,
  },

  produtoImagemContainer: {
  width: 90,
  height: 90,
  borderRadius: 16,
  backgroundColor: '#f8fafc',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 15,
  overflow: 'hidden',
},

produtoImagemIndisponivel: {
  opacity: 0.45,
},

produtoImagem: {
  width: 75,
  height: 75,
},

});