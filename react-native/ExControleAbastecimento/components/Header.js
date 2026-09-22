import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default function Header() {

  return (

    <View style={styles.header}>

      <View style={styles.conteudo}>

        <View style={styles.icone}>

          <Text style={styles.iconeTexto}>
            ⛽
          </Text>

        </View>


        <View style={styles.textos}>

          <Text style={styles.titulo}>
            Controle de Abastecimento
          </Text>

          <Text style={styles.subtitulo}>
            Gerencie seus gastos com combustível
          </Text>

        </View>

      </View>

    </View>

  );
}


const styles = StyleSheet.create({

  header: {
    backgroundColor: '#111827',
    paddingHorizontal: 20,
    paddingTop: 27,
    paddingBottom: 27,
  },

  conteudo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icone: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  iconeTexto: {
    fontSize: 26,
  },

  textos: {
    flex: 1,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '900',
  },

  subtitulo: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 5,
  },

});