import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class Header extends Component {

  render() {

    return (

      <View
        style={{
          backgroundColor: '#111',
          alignItems: 'center',
          paddingTop: 50, 
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >

        <Text
          style={{
            color: '#ffd900',
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          STAR WARS
        </Text>

      </View>

    );
  }
}

export default Header;
