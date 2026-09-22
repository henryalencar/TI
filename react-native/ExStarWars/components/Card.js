import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  Pressable
} from 'react-native';

class Card extends Component {

  state = {
    ativo: false
  };

  render() {

    return (

      <Pressable
        onPress={() => {
          this.setState({
            ativo: !this.state.ativo
          });
        }}
      >

        <View
          style={{
            backgroundColor: this.state.ativo
              ? (this.props.lado === 'jedi'
                ? '#0066ff'
                : '#ff0000')
              : '#f3f3f3',

            padding: 15,
            borderRadius: 15,
            marginBottom: 15,

            flexDirection: 'row',
            alignItems: 'center',

            width: '100%'
          }}
        >

          <Image
            source={{
              uri: this.props.imagem
            }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              marginRight: 15
            }}
          />

          <View
            style={{
              flex: 1
            }}
          >

            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: this.state.ativo
                  ? '#ffffff'
                  : '#000000'
              }}
            >
              {this.props.nome}
            </Text>

            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                color: this.state.ativo
                  ? '#ffffff'
                  : '#333333'
              }}
            >
              {this.props.descricao}
            </Text>

          </View>

        </View>

      </Pressable>

    );
  }
}

export default Card;