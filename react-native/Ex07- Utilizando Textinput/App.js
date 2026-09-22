import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: ''
    };
  }

  pegaNome = (texto) => {

    this.setState({
      nome: texto
    });

  };

  render() {

    return (

      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={this.state.nome}
          onChangeText={this.pegaNome}
        />

        <Text style={styles.texto}>
          Bem vindo {this.state.nome}!
        </Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 50
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    padding: 10,
    fontSize: 18
  },

  texto: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20
  }

});

export default App;