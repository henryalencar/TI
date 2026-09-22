import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

class Jobs extends Component {

  render() {

    return (

      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#ffffff',
          padding: 15,
          borderRadius: 15
        }}
      >

        <Image
          source={{
            uri: this.props.imagem
          }}
          style={{
            width: this.props.largura,
            height: this.props.altura,
            borderRadius: 110
          }}
        />

        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 15
          }}
        >
          {this.props.nome}
        </Text>

      </View>

    );
  }
}

export default Jobs;