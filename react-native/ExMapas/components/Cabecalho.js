import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.header}>

      <Text style={styles.titulo}>
        Turismo em Santos
      </Text>

      <Text style={styles.subtitulo}>
        Conheça os principais pontos turísticos
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    position: 'absolute',
    top: 50,
    left: 18,
    right: 18,

    backgroundColor: '#ffffff',

    paddingVertical: 15,
    paddingHorizontal: 18,

    borderRadius: 18,

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5,
  },

  titulo: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
  },

  subtitulo: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },

});