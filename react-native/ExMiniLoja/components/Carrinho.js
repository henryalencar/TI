import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';

export default function Carrinho({
  carrinho,
  quantidadeItens,
  total,
  aumentarQuantidade,
  diminuirQuantidade,
  finalizarCompra,
}) {
  return (
    <View style={styles.container}>

      <View style={styles.tituloContainer}>
        <View>
          <Text style={styles.titulo}>Seu carrinho</Text>
          <Text style={styles.subtitulo}>
            {quantidadeItens} {quantidadeItens === 1 ? 'item' : 'itens'}
          </Text>
        </View>

        <Text style={styles.total}>
          R$ {total.toFixed(2).replace('.', ',')}
        </Text>
      </View>

      {carrinho.length === 0 ? (

        <View style={styles.vazio}>
          <Text style={styles.iconeVazio}>🛒</Text>

          <Text style={styles.textoVazio}>
            Seu carrinho está vazio
          </Text>

          <Text style={styles.subtextoVazio}>
            Adicione produtos para começar sua compra.
          </Text>
        </View>

      ) : (

        <>
          {carrinho.map((item) => (

            <View key={item.id} style={styles.item}>

              {/* IMAGEM DO PRODUTO */}
              <View style={styles.imagemContainer}>
                <Image
                  source={item.imagem}
                  style={styles.imagem}
                  resizeMode="contain"
                />
              </View>

              {/* INFORMAÇÕES */}
              <View style={styles.informacoes}>

                <Text style={styles.nome} numberOfLines={1}>
                  {item.nome}
                </Text>

                <Text style={styles.preco}>
                  R$ {item.preco.toFixed(2).replace('.', ',')}
                </Text>

                {/* CONTROLE DE QUANTIDADE */}
                <View style={styles.quantidadeContainer}>

                  <Pressable
                    style={styles.botaoQuantidade}
                    onPress={() => diminuirQuantidade(item.id)}
                  >
                    <Text style={styles.botaoTexto}>−</Text>
                  </Pressable>

                  <Text style={styles.quantidade}>
                    {item.quantidade}
                  </Text>

                  <Pressable
                    style={styles.botaoQuantidade}
                    onPress={() => aumentarQuantidade(item.id)}
                  >
                    <Text style={styles.botaoTexto}>+</Text>
                  </Pressable>

                </View>

              </View>

              {/* SUBTOTAL */}
              <Text style={styles.subtotal}>
                R$ {(item.preco * item.quantidade)
                  .toFixed(2)
                  .replace('.', ',')}
              </Text>

            </View>

          ))}

          {/* TOTAL */}
          <View style={styles.resumo}>

            <View style={styles.linha}>
              <Text style={styles.label}>Subtotal</Text>

              <Text style={styles.valor}>
                R$ {total.toFixed(2).replace('.', ',')}
              </Text>
            </View>

            <View style={styles.linha}>
              <Text style={styles.label}>Entrega</Text>

              <Text style={styles.entrega}>
                Grátis
              </Text>
            </View>

            <View style={styles.linhaTotal}>
              <Text style={styles.totalLabel}>
                Total
              </Text>

              <Text style={styles.totalValor}>
                R$ {total.toFixed(2).replace('.', ',')}
              </Text>
            </View>

            <Pressable
              style={styles.finalizar}
              onPress={finalizarCompra}
            >
              <Text style={styles.finalizarTexto}>
                FINALIZAR COMPRA
              </Text>
            </Pressable>

          </View>
        </>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },

  tituloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
  },

  subtitulo: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 3,
  },

  total: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2563eb',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },

  imagemContainer: {
    width: 75,
    height: 75,
    borderRadius: 14,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },

  imagem: {
    width: 62,
    height: 62,
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },

  preco: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
  },

  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  botaoQuantidade: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563eb',
  },

  quantidade: {
    width: 32,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },

  subtotal: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
  },

  resumo: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    color: '#64748b',
  },

  valor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },

  entrega: {
    fontSize: 14,
    fontWeight: '700',
    color: '#16a34a',
  },

  linhaTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
  },

  totalValor: {
    fontSize: 20,
    fontWeight: '900',
    color: '#2563eb',
  },

  finalizar: {
    backgroundColor: '#2563eb',
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  finalizarTexto: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  vazio: {
    alignItems: 'center',
    paddingVertical: 35,
  },

  iconeVazio: {
    fontSize: 40,
    marginBottom: 10,
  },

  textoVazio: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
  },

  subtextoVazio: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 5,
    textAlign: 'center',
  },

});