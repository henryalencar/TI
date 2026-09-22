import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default function AbastecimentoCard({
  abastecimento
}) {

  function formatarValor(numero) {

    return numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  }


  function formatarQuilometragem(numero) {

    return numero.toLocaleString('pt-BR');

  }


  return (

    <View style={styles.card}>

      <View style={styles.icone}>

        <Text style={styles.iconeTexto}>
          ⛽
        </Text>

      </View>


      <View style={styles.informacoes}>

        <Text style={styles.data}>
          {abastecimento.data}
        </Text>

        <Text style={styles.km}>
          {formatarQuilometragem(
            abastecimento.quilometragem
          )} km
        </Text>

      </View>


      <View style={styles.valorArea}>

        <Text style={styles.valor}>
          {formatarValor(abastecimento.valor)}
        </Text>

        <Text style={styles.status}>
          Abastecimento
        </Text>

      </View>

    </View>

  );
}


const styles = StyleSheet.create({

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icone: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  iconeTexto: {
    fontSize: 21,
  },

  informacoes: {
    flex: 1,
  },

  data: {
    fontSize: 15,
    fontWeight: '900',
    color: '#111827',
  },

  km: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 5,
  },

  valorArea: {
    alignItems: 'flex-end',
  },

  valor: {
    fontSize: 14,
    fontWeight: '900',
    color: '#111827',
  },

  status: {
    fontSize: 9,
    color: '#9ca3af',
    marginTop: 4,
  },

});