import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';


export default function CartaoItem({ pais, onPress }) {

  return (

    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.cartao,
        pressed && styles.cartaoPressionado
      ]}
    >

      {/* IMAGEM */}

      <View style={styles.areaImagem}>

        <Image
          source={pais.imagem}
          style={styles.imagem}
        />

        {/* ETIQUETA */}

        <View style={styles.etiqueta}>
          <Text style={styles.textoEtiqueta}>
            GUIA CULTURAL
          </Text>
        </View>

      </View>


      {/* CONTEÚDO */}

      <View style={styles.conteudo}>

        {/* NOME DO PAÍS */}

        <View style={styles.linhaTitulo}>

          <View style={styles.nomeContainer}>

            <Text style={styles.bandeira}>
              {pais.bandeira}
            </Text>

            <Text style={styles.nomePais}>
              {pais.nome}
            </Text>

          </View>

          <View style={styles.circuloSeta}>
            <Text style={styles.seta}>
              →
            </Text>
          </View>

        </View>


        {/* DESCRIÇÃO */}

        <Text
          style={styles.resumo}
          numberOfLines={2}
        >
          {pais.cultura}
        </Text>


        {/* INFORMAÇÕES */}

        <View style={styles.informacoes}>

          <View style={styles.infoItem}>

            <Text style={styles.infoIcone}>
              📍
            </Text>

            <Text style={styles.infoTexto}>
              Turismo
            </Text>

          </View>


          <View style={styles.separador} />


          <View style={styles.infoItem}>

            <Text style={styles.infoIcone}>
              🍽️
            </Text>

            <Text style={styles.infoTexto}>
              Gastronomia
            </Text>

          </View>

        </View>


        {/* RODAPÉ */}

        <View style={styles.rodape}>

          <Text style={styles.verMais}>
            Explorar cultura
          </Text>

          <Text style={styles.icone}>
            →
          </Text>

        </View>

      </View>

    </Pressable>

  );
}


const styles = StyleSheet.create({

  /* CARD */

  cartao: {
    backgroundColor: '#ffffff',

    borderRadius: 20,

    marginBottom: 20,

    overflow: 'hidden',

    borderWidth: 1,

    borderColor: '#e2e8f0',

    elevation: 5,

    shadowColor: '#0f172a',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.10,

    shadowRadius: 8,
  },


  cartaoPressionado: {
    opacity: 0.92,

    transform: [
      {
        scale: 0.985
      }
    ],
  },


  /* IMAGEM */

  areaImagem: {
    position: 'relative',

    width: '100%',

    height: 195,
  },


  imagem: {
    width: '100%',

    height: '100%',

    resizeMode: 'cover',
  },


  /* ETIQUETA */

  etiqueta: {
    position: 'absolute',

    top: 14,

    left: 14,

    backgroundColor: 'rgba(15, 23, 42, 0.85)',

    paddingHorizontal: 11,

    paddingVertical: 6,

    borderRadius: 8,
  },


  textoEtiqueta: {
    color: '#ffffff',

    fontSize: 10,

    fontWeight: '800',

    letterSpacing: 1,
  },


  /* CONTEÚDO */

  conteudo: {
    padding: 18,
  },


  /* TÍTULO */

  linhaTitulo: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: 9,
  },


  nomeContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,
  },


  bandeira: {
    fontSize: 24,

    marginRight: 8,
  },


  nomePais: {
    fontSize: 23,

    fontWeight: '800',

    color: '#0f172a',
  },


  /* SETA */

  circuloSeta: {
    width: 38,

    height: 38,

    borderRadius: 19,

    backgroundColor: '#eff6ff',

    alignItems: 'center',

    justifyContent: 'center',
  },


  seta: {
    fontSize: 20,

    color: '#0284c7',

    fontWeight: '700',
  },


  /* RESUMO */

  resumo: {
    fontSize: 14,

    color: '#64748b',

    lineHeight: 21,

    marginBottom: 16,
  },


  /* INFORMAÇÕES */

  informacoes: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f8fafc',

    borderRadius: 12,

    paddingVertical: 11,

    paddingHorizontal: 12,

    marginBottom: 15,
  },


  infoItem: {
    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,
  },


  infoIcone: {
    fontSize: 15,

    marginRight: 6,
  },


  infoTexto: {
    fontSize: 12,

    fontWeight: '700',

    color: '#475569',
  },


  separador: {
    width: 1,

    height: 20,

    backgroundColor: '#cbd5e1',

    marginHorizontal: 8,
  },


  /* RODAPÉ */

  rodape: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingTop: 14,

    borderTopWidth: 1,

    borderTopColor: '#f1f5f9',
  },


  verMais: {
    fontSize: 14,

    fontWeight: '800',

    color: '#0284c7',
  },


  icone: {
    fontSize: 19,

    fontWeight: '800',

    color: '#0284c7',
  },

});