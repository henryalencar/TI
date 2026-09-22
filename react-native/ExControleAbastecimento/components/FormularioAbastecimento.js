import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';


export default function FormularioAbastecimento({
  cadastrarAbastecimento
}) {

  const [data, setData] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [valor, setValor] = useState('');


  function cadastrar() {

    if (
      data.trim() === '' ||
      quilometragem.trim() === '' ||
      valor.trim() === ''
    ) {

      Alert.alert(
        'Campos obrigatórios',
        'Preencha a data, a quilometragem e o valor.'
      );

      return;
    }


    const km = Number(
      quilometragem
        .replace(/\./g, '')
        .replace(',', '.')
    );


    const valorNumerico = Number(
      valor
        .replace('R$', '')
        .replace(/\./g, '')
        .replace(',', '.')
        .trim()
    );


    if (isNaN(km) || km <= 0) {

      Alert.alert(
        'Quilometragem inválida',
        'Informe uma quilometragem maior que zero.'
      );

      return;
    }


    if (isNaN(valorNumerico) || valorNumerico <= 0) {

      Alert.alert(
        'Valor inválido',
        'Informe um valor maior que zero.'
      );

      return;
    }


    cadastrarAbastecimento({
      data,
      quilometragem: km,
      valor: valorNumerico,
    });


    setData('');
    setQuilometragem('');
    setValor('');

  }


  return (

    <View style={styles.card}>

      <View style={styles.cabecalho}>

        <View>

          <Text style={styles.titulo}>
            Novo abastecimento
          </Text>

          <Text style={styles.subtitulo}>
            Registre uma nova despesa
          </Text>

        </View>


        <View style={styles.icone}>

          <Text style={styles.iconeTexto}>
            +
          </Text>

        </View>

      </View>


      {/* DATA */}

      <Text style={styles.label}>
        Data do abastecimento
      </Text>

      <TextInput
        style={styles.input}
        placeholder="18/09/2026"
        placeholderTextColor="#9ca3af"
        value={data}
        onChangeText={setData}
        keyboardType="numeric"
      />


      {/* QUILOMETRAGEM */}

      <Text style={styles.label}>
        Quilometragem
      </Text>

      <TextInput
        style={styles.input}
        placeholder="52.350"
        placeholderTextColor="#9ca3af"
        value={quilometragem}
        onChangeText={setQuilometragem}
        keyboardType="numeric"
      />


      {/* VALOR */}

      <Text style={styles.label}>
        Valor pago
      </Text>

      <TextInput
        style={styles.input}
        placeholder="250,00"
        placeholderTextColor="#9ca3af"
        value={valor}
        onChangeText={setValor}
        keyboardType="decimal-pad"
      />


      <Pressable
        style={({ pressed }) => [
          styles.botao,
          pressed && styles.botaoPressionado,
        ]}
        onPress={cadastrar}
      >

        <Text style={styles.textoBotao}>
          Cadastrar abastecimento
        </Text>

        <Text style={styles.seta}>
          →
        </Text>

      </Pressable>

    </View>

  );
}


const styles = StyleSheet.create({

  card: {
    backgroundColor: '#ffffff',
    margin: 18,
    marginTop: 18,
    padding: 19,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  titulo: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
  },

  subtitulo: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 4,
  },

  icone: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeTexto: {
    color: '#111827',
    fontSize: 25,
    fontWeight: '400',
  },

  label: {
    color: '#374151',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 17,
    marginBottom: 7,
  },

  input: {
    height: 51,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 13,
    paddingHorizontal: 14,
    color: '#111827',
    fontSize: 14,
  },

  botao: {
    height: 52,
    backgroundColor: '#111827',
    borderRadius: 14,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoPressionado: {
    opacity: 0.8,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },

  seta: {
    color: '#ffffff',
    fontSize: 19,
    marginLeft: 10,
  },

});