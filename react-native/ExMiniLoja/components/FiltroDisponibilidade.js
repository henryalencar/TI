import React from 'react';

import {
  View,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';

export default function FiltroDisponibilidade({
  somenteDisponiveis,
  setSomenteDisponiveis,
}) {

  return (

    <View style={styles.filtro}>

      <View style={styles.iconeContainer}>

        <Text style={styles.icone}>
          ✓
        </Text>

      </View>

      <View style={styles.informacao}>

        <Text style={styles.titulo}>
          Produtos disponíveis
        </Text>

        <Text style={styles.texto}>
          Mostrar somente produtos em estoque
        </Text>

      </View>

      <Switch
        value={somenteDisponiveis}
        onValueChange={setSomenteDisponiveis}
        trackColor={{
          false: '#d1d5db',
          true: '#2563eb',
        }}
        thumbColor="#ffffff"
      />

    </View>

  );

}

const styles = StyleSheet.create({

  filtro: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  iconeContainer: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  icone: {
    color: '#2563eb',
    fontSize: 18,
    fontWeight: '900',
  },

  informacao: {
    flex: 1,
  },

  titulo: {
    color: '#111827',
    fontSize: 13,
    fontWeight: '800',
  },

  texto: {
    color: '#9ca3af',
    fontSize: 10,
    marginTop: 3,
  },

});