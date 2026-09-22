import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function App() {

  const [mensagem, setMensagem] = useState('Olá');

  function pressionarBotao() {
    setMensagem('Você pressionou o botão!');
  }

  return (
    <View style={styles.container}>

      {/* TOPO */}
      <View style={styles.topo}>

        <View style={styles.logo}>
          <Text style={styles.logoTexto}>
            N
          </Text>
        </View>

        <Text style={styles.marca}>
          MYAPPHENRY
        </Text>

      </View>


      {/* CONTEÚDO */}
      <View style={styles.conteudo}>

        <Text style={styles.ola}>
          MENSAGEM
        </Text>

        <Text style={styles.titulo}>
          Teste de botão
        </Text>

        <Text style={styles.descricao}>
          Pressione o botão abaixo para alterar a mensagem.
        </Text>


        {/* CARD */}
        <View style={styles.card}>

          <Text style={styles.label}>
            MENSAGEM ATUAL
          </Text>

          <Text style={styles.mensagem}>
            {mensagem}
          </Text>

          <Pressable
            style={styles.botao}
            onPress={pressionarBotao}
          >

            <Text style={styles.botaoTexto}>
              PRESSIONAR BOTÃO
            </Text>

            <Text style={styles.seta}>
              →
            </Text>

          </Pressable>

        </View>


        {/* INFORMAÇÃO */}
        <View style={styles.info}>

          <Text style={styles.infoIcone}>
            ✓
          </Text>

          <View style={styles.infoConteudo}>

            <Text style={styles.infoTitulo}>
              ESTADO DO APP
            </Text>

            <Text style={styles.infoTexto}>
              A mensagem é alterada através do useState.
            </Text>

          </View>

        </View>

      </View>


      {/* RODAPÉ */}
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
    marginBottom: 12,
  },

  mensagem: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 25,
  },

  botao: {
    height: 55,
    borderRadius: 14,
    backgroundColor: '#2563eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginLeft: 12,
  },

  info: {
    marginTop: 22,
    padding: 18,
    backgroundColor: '#111827',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1e3a8a',
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcone: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 13,
  },

  infoConteudo: {
    flex: 1,
  },

  infoTitulo: {
    color: '#60a5fa',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  infoTexto: {
    color: '#d4d4d8',
    fontSize: 13,
    lineHeight: 19,
  },

  footer: {
    textAlign: 'center',
    color: '#52525b',
    fontSize: 11,
    marginBottom: 20,
  },

});