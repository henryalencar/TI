import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      cor: 'white'
    };
  }

  entrar() {

    this.setState({
      nome: 'Henry Alencarr',
      cor: 'orange'
    });

  }

  render() {

    return (

      <View style={styles.area}>

        <Text style={styles.nome}>
          {this.state.nome}
        </Text>

        <Text style={styles.textoPrincipal}>
          Eu sou texto 1
        </Text>

        <Text style={styles.textoPrincipal}>
          Eu sou texto 2
        </Text>

        <Text
          style={[
            styles.textoPrincipal,
            { color: this.state.cor }
          ]}
        >
          Eu sou texto 3
        </Text>

        <Text style={styles.textoPrincipal}>
          Eu sou texto 4
        </Text>

        <Text style={styles.textoPrincipal}>
          Eu sou texto 5
        </Text>

        <Button
          title="Entrar"
          onPress={() => this.entrar()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  area: {
    marginTop: 100,
    backgroundColor: '#333333',
    padding: 20
  },

  nome: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20
  },

  textoPrincipal: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginBottom: 10
  }

});

export default App;