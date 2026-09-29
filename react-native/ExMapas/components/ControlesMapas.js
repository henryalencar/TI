import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function ControlesMapa({
  tipoMapa,
  setTipoMapa,
  quantidade,
}) {
  return (
    <View style={styles.controle}>

      <Text style={styles.controleTitulo}>
        Visualização
      </Text>

      <View style={styles.botoes}>

        <Pressable
          style={[
            styles.botao,
            tipoMapa === 'standard' && styles.botaoAtivo,
          ]}
          onPress={() => setTipoMapa('standard')}
        >
          <Text
            style={[
              styles.textoBotao,
              tipoMapa === 'standard' &&
                styles.textoBotaoAtivo,
            ]}
          >
            Mapa
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.botao,
            tipoMapa === 'satellite' && styles.botaoAtivo,
          ]}
          onPress={() => setTipoMapa('satellite')}
        >
          <Text
            style={[
              styles.textoBotao,
              tipoMapa === 'satellite' &&
                styles.textoBotaoAtivo,
            ]}
          >
            Satélite
          </Text>
        </Pressable>

      </View>

      <Text style={styles.quantidade}>
        {quantidade} pontos turísticos cadastrados
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  controle: {
    position: 'absolute',

    bottom: 25,
    left: 18,
    right: 18,

    backgroundColor: '#ffffff',

    padding: 16,

    borderRadius: 18,

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  controleTitulo: {
    fontSize: 13,
    fontWeight: '800',
    color: '#374151',
    marginBottom: 10,
  },

  botoes: {
    flexDirection: 'row',
    gap: 10,
  },

  botao: {
    flex: 1,

    height: 42,

    borderRadius: 10,

    backgroundColor: '#f3f4f6',

    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoAtivo: {
    backgroundColor: '#2563eb',
  },

  textoBotao: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '800',
  },

  textoBotaoAtivo: {
    color: '#ffffff',
  },

  quantidade: {
    textAlign: 'center',

    color: '#9ca3af',

    fontSize: 11,

    marginTop: 10,
  },

});