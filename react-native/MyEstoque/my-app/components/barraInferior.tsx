
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { usePathname, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function BarraInferior() {
  const router = useRouter();
  const caminho = usePathname();

  const estaNoInicio = caminho === '/';
  const estaNaVisaoGeral = caminho === '/visaoGeral';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace('/')}
        activeOpacity={0.7}
      >
        <FontAwesome
          name="home"
          size={23}
          color={estaNoInicio ? '#2563EB' : '#94A3B8'}
        />

        <Text
          style={[
            styles.texto,
            estaNoInicio && styles.textoAtivo,
          ]}
        >
          Início
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace('/visaoGeral')}
        activeOpacity={0.7}
      >
        <FontAwesome
          name="bar-chart"
          size={21}
          color={estaNaVisaoGeral ? '#2563EB' : '#94A3B8'}
        />

        <Text
          style={[
            styles.texto,
            estaNaVisaoGeral && styles.textoAtivo,
          ]}
        >
          Visão geral
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingBottom: 5,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
  },

  botao: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  texto: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },

  textoAtivo: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
});
