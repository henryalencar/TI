import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Footer extends Component {

  render() {

    return (

      <View style={styles.footer}>

        <Text style={styles.titulo}>
          SABORES DO NORDESTE
        </Text>

        <Text style={styles.texto}>
          Cultura • Tradição • Gastronomia
        </Text>

        <Text style={styles.texto}>
          © 2026 Sabores do Nordeste
        </Text>

      </View>

    );

  }

}

const styles = StyleSheet.create({

  footer: {
    backgroundColor: '#7c2d12',
    padding: 25,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15
  },

  titulo: {
    color: '#ffd166',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1
  },

  texto: {
    color: '#fff',
    marginTop: 7,
    fontSize: 13
  }

});

export default Footer;