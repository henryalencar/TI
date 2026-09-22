import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';

export default function App() {

  const [notificacoes, setNotificacoes] = useState(false);

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#09090b"
      />

      
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


      
      <View style={styles.conteudo}>

        <Text style={styles.ola}>
          CONFIGURAÇÕES
        </Text>

        <Text style={styles.titulo}>
          Notificações
        </Text>

        <Text style={styles.descricao}>
          Escolha se deseja receber notificações do aplicativo.
        </Text>


        
        <View style={styles.card}>

          <View style={styles.informacao}>

            <View style={styles.icone}>
              <Text style={styles.iconeTexto}>
                🔔
              </Text>
            </View>

            <View style={styles.textos}>

              <Text style={styles.nome}>
                Notificações
              </Text>

              <Text style={styles.status}>
                {notificacoes
                  ? 'As notificações estão ativadas'
                  : 'As notificações estão desativadas'}
              </Text>

            </View>

          </View>


          
          <Pressable
            style={[
              styles.botao,
              notificacoes
                ? styles.botaoAtivado
                : styles.botaoDesativado
            ]}
            onPress={() => setNotificacoes(!notificacoes)}
          >

            <View
              style={[
                styles.circulo,
                notificacoes && styles.circuloAtivado
              ]}
            />

            <Text style={styles.botaoTexto}>
              {notificacoes ? 'ATIVADAS' : 'DESATIVADAS'}
            </Text>

          </Pressable>

        </View>


        
        <View style={styles.mensagem}>

          <Text style={styles.mensagemIcone}>
            {notificacoes ? '✓' : '!' }
          </Text>

          <View style={styles.mensagemConteudo}>

            <Text style={styles.mensagemTitulo}>
              {notificacoes
                ? 'NOTIFICAÇÕES ATIVADAS'
                : 'NOTIFICAÇÕES DESATIVADAS'}
            </Text>

            <Text style={styles.mensagemTexto}>
              {notificacoes
                ? 'Você receberá notificações do aplicativo.'
                : 'Você não receberá notificações do aplicativo.'}
            </Text>

          </View>

        </View>

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

  informacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  icone: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  iconeTexto: {
    fontSize: 24,
  },

  textos: {
    flex: 1,
  },

  nome: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 5,
  },

  status: {
    color: '#71717a',
    fontSize: 13,
    lineHeight: 19,
  },


  // BOTÃO

  botao: {
    height: 55,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoAtivado: {
    backgroundColor: '#2563eb',
  },

  botaoDesativado: {
    backgroundColor: '#27272a',
  },

  circulo: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#71717a',
    marginRight: 10,
  },

  circuloAtivado: {
    backgroundColor: '#ffffff',
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
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

  mensagemIcone: {
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

  mensagemConteudo: {
    flex: 1,
  },

  mensagemTitulo: {
    color: '#60a5fa',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  mensagemTexto: {
    color: '#d4d4d8',
    fontSize: 13,
    lineHeight: 19,
  },


  // RODAPÉ

  footer: {
    textAlign: 'center',
    color: '#52525b',
    fontSize: 11,
    marginBottom: 20,
  },

});