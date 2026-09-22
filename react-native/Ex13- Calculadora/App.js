import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');

  const calcular = () => {

    if (valor1 === '' || valor2 === '') {
      setResultado('Preencha os dois valores');
      return;
    }

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    let resultadoCalculo;

    if (operacao === '+') {
      resultadoCalculo = numero1 + numero2;

    } else if (operacao === '-') {
      resultadoCalculo = numero1 - numero2;

    } else if (operacao === '*') {
      resultadoCalculo = numero1 * numero2;

    } else if (operacao === '/') {

      if (numero2 === 0) {
        setResultado('Não é possível dividir por zero');
        return;
      }

      resultadoCalculo = numero1 / numero2;
    }

    setResultado(resultadoCalculo.toString());
  };


  const limpar = () => {
    setValor1('');
    setValor2('');
    setOperacao('+');
    setResultado('');
  };


  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <View style={styles.card}>

        {/* CABEÇALHO */}

        <View style={styles.header}>

          <View style={styles.iconContainer}>
            <Text style={styles.icon}>∑</Text>
          </View>

          <View>
            <Text style={styles.titulo}>
              Calculadora
            </Text>

            <Text style={styles.subtitulo}>
              Faça seus cálculos rapidamente
            </Text>
          </View>

        </View>


        {/* PRIMEIRO VALOR */}

        <Text style={styles.label}>
          Primeiro valor
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um número"
          placeholderTextColor="#9ca3af"
          keyboardType="numeric"
          value={valor1}
          onChangeText={setValor1}
        />


        {/* SEGUNDO VALOR */}

        <Text style={styles.label}>
          Segundo valor
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um número"
          placeholderTextColor="#9ca3af"
          keyboardType="numeric"
          value={valor2}
          onChangeText={setValor2}
        />


        {/* OPERAÇÃO */}

        <Text style={styles.label}>
          Operação
        </Text>

        <View style={styles.pickerContainer}>

          <Picker
            selectedValue={operacao}
            onValueChange={(itemValue) => setOperacao(itemValue)}
            style={styles.picker}
          >

            <Picker.Item
              label="Soma  (+)"
              value="+"
            />

            <Picker.Item
              label="Subtração  (-)"
              value="-"
            />

            <Picker.Item
              label="Multiplicação  (×)"
              value="*"
            />

            <Picker.Item
              label="Divisão  (÷)"
              value="/"
            />

          </Picker>

        </View>


        {/* BOTÕES */}

        <View style={styles.botoes}>

          <Pressable
            style={({ pressed }) => [
              styles.botaoCalcular,
              pressed && styles.botaoPressionado
            ]}
            onPress={calcular}
          >

            <Text style={styles.textoBotao}>
              Calcular
            </Text>

          </Pressable>


          <Pressable
            style={({ pressed }) => [
              styles.botaoLimpar,
              pressed && styles.botaoPressionado
            ]}
            onPress={limpar}
          >

            <Text style={styles.textoLimpar}>
              Limpar
            </Text>

          </Pressable>

        </View>


        {/* RESULTADO */}

        <View style={styles.resultadoCard}>

          <Text style={styles.resultadoLabel}>
            RESULTADO
          </Text>

          <Text style={styles.resultado}>
            {resultado || '—'}
          </Text>

        </View>

      </View>

    </KeyboardAvoidingView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    justifyContent: 'center',
    padding: 20,
  },


  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 15,

    elevation: 5,
  },


  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },


  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },


  icon: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },


  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },


  subtitulo: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 3,
  },


  /* LABEL */

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
  },


  /* INPUT */

  input: {
    height: 55,
    backgroundColor: '#f9fafb',

    borderWidth: 1,
    borderColor: '#e5e7eb',

    borderRadius: 12,

    paddingHorizontal: 16,

    fontSize: 17,
    color: '#111827',

    marginBottom: 20,
  },


  /* PICKER */

  pickerContainer: {
    height: 55,

    backgroundColor: '#f9fafb',

    borderWidth: 1,
    borderColor: '#e5e7eb',

    borderRadius: 12,

    justifyContent: 'center',

    marginBottom: 25,

    overflow: 'hidden',
  },


  picker: {
    color: '#111827',
  },


  /* BOTÕES */

  botoes: {
    gap: 10,
  },


  botaoCalcular: {
    height: 55,

    backgroundColor: '#2563eb',

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 3,
  },


  botaoLimpar: {
    height: 50,

    backgroundColor: '#f3f4f6',

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',
  },


  botaoPressionado: {
    opacity: 0.75,
  },


  textoBotao: {
    color: '#ffffff',

    fontSize: 17,
    fontWeight: '700',
  },


  textoLimpar: {
    color: '#374151',

    fontSize: 16,
    fontWeight: '600',
  },


  /* RESULTADO */

  resultadoCard: {
    marginTop: 25,

    backgroundColor: '#f0f7ff',

    borderRadius: 16,

    padding: 20,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#dbeafe',
  },


  resultadoLabel: {
    fontSize: 12,

    fontWeight: '800',

    color: '#2563eb',

    letterSpacing: 1.5,

    marginBottom: 8,
  },


  resultado: {
    fontSize: 32,

    fontWeight: '800',

    color: '#111827',
  },

});