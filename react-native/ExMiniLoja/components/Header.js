import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Header({ quantidadeItens }) {

  return (

    <View style={styles.header}>

      <View style={styles.logo}>
        <Text style={styles.logoTexto}>
          M
        </Text>
      </View>

      <View>
        <Text style={styles.marca}>
          MY STORE HENRY
        </Text>

        <Text style={styles.submarca}>
          E-COMMERCE
        </Text>
      </View>

      <View style={styles.headerCarrinho}>

        <Text style={styles.headerCarrinhoIcone}>
          🛒
        </Text>

        {quantidadeItens > 0 && (

          <View style={styles.badge}>

            <Text style={styles.badgeTexto}>
              {quantidadeItens}
            </Text>

          </View>

        )}

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 38,
  },

  logo: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  logoTexto: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
  },

  marca: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },

  submarca: {
    color: '#9ca3af',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 2,
  },

  headerCarrinho: {
    marginLeft: 'auto',
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerCarrinhoIcone: {
    fontSize: 20,
  },

  badge: {
    position: 'absolute',
    right: -4,
    top: -5,
    minWidth: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },

  badgeTexto: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '900',
  },

});