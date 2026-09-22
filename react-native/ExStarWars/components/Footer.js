import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class Footer extends Component {

  render() {

    return (

      <View
        style={{
          backgroundColor: '#111',
          padding: 15,
          alignItems: 'center'
        }}
      >

        <Text
          style={{
            color: '#ffffff',
            fontSize: 14
          }}
        >
          © 2026 Star Wars App
        </Text>

      </View>

    );
  }
}

export default Footer;