import React from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function BarraPesquisa({
  pesquisa,
  setPesquisa,
}) {

  return (

    <View style={styles.container}>

      <Text style={styles.icone}>
        ⌕
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar produtos..."
        placeholderTextColor="#9ca3af"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      {pesquisa.length > 0 && (

        <Pressable
          onPress={() => setPesquisa('')}
        >

          <Text style={styles.limpar}>
            ×
          </Text>

        </Pressable>

      )}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    height: 55,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 13,
  },

  icone: {
    color: '#6b7280',
    fontSize: 25,
    marginRight: 9,
  },

  input: {
    flex: 1,
    color: '#111827',
    fontSize: 14,
  },

  limpar: {
    color: '#9ca3af',
    fontSize: 25,
  },

});