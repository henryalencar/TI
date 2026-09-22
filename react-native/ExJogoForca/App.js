import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  const palavra = 'COMPUTADOR';

  const [letra, setLetra] = useState('');
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [mensagem, setMensagem] = useState('Digite uma letra');

  // Tenta a letra digitada
  const tentarLetra = () => {
    const novaLetra = letra.toUpperCase();

    if (novaLetra === '') {
      setMensagem('Digite uma letra');
      return;
    }

    if (letrasUsadas.includes(novaLetra)) {
      setMensagem('Você já tentou essa letra!');
      setLetra('');
      return;
    }

    const novasLetras = [...letrasUsadas, novaLetra];

    setLetrasUsadas(novasLetras);

    if (palavra.includes(novaLetra)) {
      setMensagem('✓ Acertou!');
    } else {
      setMensagem('✕ Errou!');
      setErros(erros + 1);
    }

    setLetra('');
  };

  // Mostra a palavra escondida
  const mostrarPalavra = () => {
    return palavra
      .split('')
      .map((letraPalavra) => {
        if (letrasUsadas.includes(letraPalavra)) {
          return letraPalavra;
        } else {
          return '_';
        }
      })
      .join(' ');
  };

  // Verifica se ganhou
  const ganhou = palavra
    .split('')
    .every((letraPalavra) =>
      letrasUsadas.includes(letraPalavra)
    );

  // Verifica se perdeu
  const perdeu = erros >= 6;

  // Função extra: reinicia o jogo
  const novoJogo = () => {
    setLetrasUsadas([]);
    setErros(0);
    setMensagem('Digite uma letra');
    setLetra('');
  };

  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0f172a"
      />

      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.titulo}>
              Jogo da Forca
            </Text>

            <Text style={styles.subtitulo}>
              Descubra a palavra!
            </Text>
          </View>

          <View style={styles.iconeForca}>
            <Text style={styles.iconeTexto}>
              🎯
            </Text>
          </View>
        </View>

        {/* ÁREA PRINCIPAL */}
        <View style={styles.conteudo}>

          {/* CONTADOR */}
          <View style={styles.cardErros}>
            <View>
              <Text style={styles.labelErros}>
                ERROS
              </Text>

              <Text style={styles.numeroErros}>
                {erros}
                <Text style={styles.numeroMaximo}>
                  {' / 6'}
                </Text>
              </Text>
            </View>

            <View style={styles.coracao}>
              <Text style={styles.coracaoTexto}>
                
              </Text>
            </View>
          </View>

          {/* PALAVRA */}
          <View style={styles.cardPalavra}>
            <Text style={styles.labelPalavra}>
              PALAVRA SECRETA
            </Text>

            <Text style={styles.palavra}>
              {mostrarPalavra()}
            </Text>
          </View>

          {/* MENSAGEM */}
          <View
            style={[
              styles.mensagemBox,
              ganhou && styles.mensagemVitoria,
              perdeu && styles.mensagemDerrota,
            ]}
          >
            <Text
              style={[
                styles.mensagem,
                ganhou && styles.textoVitoria,
                perdeu && styles.textoDerrota,
              ]}
            >
              {ganhou
                ? ' PARABÉNS! VOCÊ GANHOU!'
                : perdeu
                ? ` VOCÊ PERDEU!\nA palavra era: ${palavra}`
                : mensagem}
            </Text>
          </View>

          {/* INPUT */}
          {!ganhou && !perdeu && (
            <>
              <Text style={styles.instrucao}>
                Escolha uma letra
              </Text>

              <View style={styles.areaInput}>
                <TextInput
                  style={styles.input}
                  placeholder="A"
                  placeholderTextColor="#94a3b8"
                  maxLength={1}
                  autoCapitalize="characters"
                  value={letra}
                  onChangeText={setLetra}
                />

                <Pressable
                  style={({ pressed }) => [
                    styles.botao,
                    pressed && styles.botaoPressionado,
                  ]}
                  onPress={tentarLetra}
                >
                  <Text style={styles.textoBotao}>
                    TENTAR
                  </Text>

                  <Text style={styles.seta}>
                    →
                  </Text>
                </Pressable>
              </View>
            </>
          )}

          {/* LETRAS USADAS */}
          <View style={styles.areaLetras}>
            <Text style={styles.tituloLetras}>
              Letras utilizadas
            </Text>

            {letrasUsadas.length === 0 ? (
              <Text style={styles.nenhumaLetra}>
                Nenhuma letra utilizada ainda
              </Text>
            ) : (
              <View style={styles.listaLetras}>
                {letrasUsadas.map((item, index) => {
                  const acertou = palavra.includes(item);

                  return (
                    <View
                      key={index}
                      style={[
                        styles.letraItem,
                        acertou
                          ? styles.letraAcerto
                          : styles.letraErro,
                      ]}
                    >
                      <Text
                        style={[
                          styles.letraTexto,
                          acertou
                            ? styles.textoAcerto
                            : styles.textoErro,
                        ]}
                      >
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}
          </View>

          
          
          {(ganhou || perdeu) && (
            <Pressable
              style={({ pressed }) => [
                styles.botaoNovo,
                pressed && styles.botaoPressionado,
              ]}
              onPress={novoJogo}
            >
              <Text style={styles.textoBotaoNovo}>
                ↻  NOVO JOGO
              </Text>
            </Pressable>
          )}

        </View>

        
        
        <View style={styles.footer}>
          <Text style={styles.footerTexto}>
            Você tem até 6 erros para descobrir a palavra
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  container: {
    flex: 1,
  },

  /* HEADER */

  header: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
  },

  subtitulo: {
    color: '#38bdf8',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },

  iconeForca: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },

  iconeTexto: {
    fontSize: 23,
  },

  /* CONTEÚDO */

  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
  },

  /* ERROS */

  cardErros: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 2,
    shadowColor: '#0f172a',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
  },

  labelErros: {
    color: '#64748b',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },

  numeroErros: {
    color: '#ef4444',
    fontSize: 27,
    fontWeight: '800',
    marginTop: 2,
  },

  numeroMaximo: {
    color: '#94a3b8',
    fontSize: 16,
  },

  coracao: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  coracaoTexto: {
    fontSize: 21,
  },

  /* PALAVRA */

  cardPalavra: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    marginTop: 16,
    paddingVertical: 28,
    paddingHorizontal: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#0f172a',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  labelPalavra: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 15,
  },

  palavra: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: '800',
    letterSpacing: 4,
    textAlign: 'center',
  },

  /* MENSAGEM */

  mensagemBox: {
    backgroundColor: '#eff6ff',
    borderRadius: 14,
    padding: 13,
    marginTop: 16,
    alignItems: 'center',
  },

  mensagem: {
    color: '#0369a1',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },

  mensagemVitoria: {
    backgroundColor: '#f0fdf4',
  },

  textoVitoria: {
    color: '#16a34a',
  },

  mensagemDerrota: {
    backgroundColor: '#fef2f2',
  },

  textoDerrota: {
    color: '#dc2626',
  },

  /* INPUT */

  instrucao: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 17,
    marginBottom: 8,
  },

  areaInput: {
    flexDirection: 'row',
    gap: 10,
  },

  input: {
    width: 58,
    height: 54,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cbd5e1',
    borderRadius: 14,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '800',
    color: '#0f172a',
  },

  botao: {
    flex: 1,
    height: 54,
    backgroundColor: '#0284c7',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  botaoPressionado: {
    opacity: 0.8,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    marginRight: 8,
  },

  seta: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
  },

  /* LETRAS */

  areaLetras: {
    marginTop: 19,
  },

  tituloLetras: {
    color: '#0f172a',
    fontSize: 15,
    fontWeight: '800',
  },

  nenhumaLetra: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 7,
  },

  listaLetras: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 9,
  },

  letraItem: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  letraAcerto: {
    backgroundColor: '#f0fdf4',
    borderColor: '#bbf7d0',
  },

  letraErro: {
    backgroundColor: '#fef2f2',
    borderColor: '#fecaca',
  },

  letraTexto: {
    fontSize: 14,
    fontWeight: '800',
  },

  textoAcerto: {
    color: '#16a34a',
  },

  textoErro: {
    color: '#dc2626',
  },

  /* NOVO JOGO */

  botaoNovo: {
    backgroundColor: '#16a34a',
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3,
  },

  textoBotaoNovo: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },

  /* FOOTER */

  footer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },

  footerTexto: {
    color: '#94a3b8',
    fontSize: 11,
    textAlign: 'center',
  },

});