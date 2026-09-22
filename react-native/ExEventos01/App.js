import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#09090b"
      />

      
      <View style={styles.topo}>

        <View style={styles.logo}>
          <Text style={styles.logoTexto}>N</Text>
        </View>

        <Text style={styles.marca}>
          MYAPP
        </Text>

      </View>


     
      <View style={styles.conteudo}>

        <Text style={styles.ola}>
          OLÁ 👋
        </Text>

        <Text style={styles.titulo}>
          Vamos começar?
        </Text>

        <Text style={styles.descricao}>
          Primeiro, queremos saber como podemos chamar você.
        </Text>


        
        <View style={styles.card}>

          <Text style={styles.label}>
            SEU NOME
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite aqui..."
            placeholderTextColor="#71717a"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

        
          <Pressable
            style={[
              styles.botao,
              nome.length === 0 && styles.botaoDesativado
            ]}
          >
            <Text style={styles.botaoTexto}>
              CONTINUAR
            </Text>

            <Text style={styles.seta}>
              →
            </Text>
          </Pressable>

        </View>


        
        {nome.length > 0 && (

          <View style={styles.mensagem}>

            <View style={styles.ponto} />

            <View>
              <Text style={styles.mensagemTitulo}>
                BOAS-VINDAS
              </Text>

              <Text style={styles.mensagemTexto}>
                É um prazer ter você aqui, {nome}!
              </Text>
            </View>

          </View>

        )}

      </View>


      
      <Text style={styles.footer}>
        Desenvolvido com React Native
      </Text>

    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#09090b',
  },


  // TOPO

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 25,
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoTexto: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
  },

  marca: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 2,
    marginLeft: 12,
  },


  // CONTEÚDO

  conteudo: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 80,
  },

  ola: {
    color: '#3b82f6',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 12,
  },

  descricao: {
    color: '#a1a1aa',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 35,
    maxWidth: 330,
  },


  // CARD

  card: {
    backgroundColor: '#18181b',
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: '#27272a',
  },

  label: {
    color: '#a1a1aa',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  input: {
    height: 58,
    backgroundColor: '#09090b',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3f3f46',
    paddingHorizontal: 16,
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 15,
  },


  // BOTÃO

  botao: {
    height: 55,
    backgroundColor: '#2563eb',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoDesativado: {
    opacity: 0.45,
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  seta: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '400',
    marginLeft: 12,
  },


  // MENSAGEM

  mensagem: {
    marginTop: 22,
    padding: 18,
    backgroundColor: '#111827',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1e3a8a',
    flexDirection: 'row',
    alignItems: 'center',
  },

  ponto: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3b82f6',
    marginRight: 15,
  },

  mensagemTitulo: {
    color: '#60a5fa',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  mensagemTexto: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },


  // RODAPÉ

  footer: {
    textAlign: 'center',
    color: '#52525b',
    fontSize: 11,
    marginBottom: 20,
  },

});