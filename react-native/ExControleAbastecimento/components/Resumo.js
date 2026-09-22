import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default function Resumo({
  quantidade,
  total
}) {

  function formatarValor(numero) {

    return numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  }


  return (

    <View style={styles.container}>

      <View style={styles.card}>

        <View style={styles.icone}>
          <Text style={styles.iconeTexto}>
            #
          </Text>
        </View>

        <View>

          <Text style={styles.numero}>
            {quantidade}
          </Text>

          <Text style={styles.label}>
            Abastecimentos
          </Text>

        </View>

      </View>


      <View style={styles.card}>

        <View style={styles.icone}>
          <Text style={styles.iconeTexto}>
            R$
          </Text>
        </View>

        <View>

          <Text style={styles.valor}>
            {formatarValor(total)}
          </Text>

          <Text style={styles.label}>
            Total gasto
          </Text>

        </View>

      </View>

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    marginHorizontal: 18,
    gap: 11,
  },

  card: {
    flex: 1,
    minHeight: 82,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  icone: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  iconeTexto: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '900',
  },

  numero: {
    fontSize: 21,
    fontWeight: '900',
    color: '#111827',
  },

  valor: {
    fontSize: 15,
    fontWeight: '900',
    color: '#111827',
  },

  label: {
    fontSize: 10,
    color: '#9ca3af',
    marginTop: 3,
  },

});