import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {

  render() {

    return (
      <View style={styles.header}>

        <Text style={styles.titulo}>
          SABORES DO NORDESTE
        </Text>

        <Text style={styles.subtitulo}>
          Cultura • Tradição • Sabor
        </Text>

      </View>
    );

  }
}


const styles = StyleSheet.create({

  header: {
    backgroundColor: '#7c2d12',
    padding: 25,
    alignItems: 'center'
  },

  titulo: {
    color: '#ffd166',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1
  },

  subtitulo: {
    color: '#fff',
    marginTop: 7,
    fontSize: 13
  }

});


export default Header;