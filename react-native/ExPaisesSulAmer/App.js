import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
  Pressable,
  Image,
} from 'react-native';

import { PAISES } from './components/dados';
import CartaoItem from './components/CartaoItem';


export default function App() {

  const [paisSelecionado, setPaisSelecionado] = useState(null);


  const abrirModal = (pais) => {
    setPaisSelecionado(pais);
  };


  const fecharModal = () => {
    setPaisSelecionado(null);
  };


  return (

    <SafeAreaView style={styles.tela}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#0f172a"
      />


    
      <View style={styles.cabecalho}>

        <View>

          <Text style={styles.tituloHeader}>
            Guia Cultural
          </Text>

          <Text style={styles.subtituloHeader}>
            América Latina
          </Text>

        </View>


        <View style={styles.contador}>

          <Text style={styles.contadorTexto}>
            {PAISES.length}
          </Text>

        </View>

      </View>


   

      <View style={styles.introducao}>

        <Text style={styles.tituloSecao}>
          Explore os países
        </Text>

        <Text style={styles.textoSecao}>
          Conheça culturas, lugares e sabores da América Latina.
        </Text>

      </View>


      {/*LISTA*/}

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      >

        {PAISES.map((item) => (

          <CartaoItem
            key={item.id}
            pais={item}
            onPress={() => abrirModal(item)}
          />

        ))}

      </ScrollView>


      {/*MODAL*/}

      <Modal
        visible={paisSelecionado !== null}
        animationType="slide"
        transparent={false}
        statusBarTranslucent={false}
        onRequestClose={fecharModal}
      >

        <SafeAreaView style={styles.modalTela}>

          {paisSelecionado && (

            <View style={styles.modal}>


              {/* TOPO DO MODAL*/}

              <View style={styles.topoModal}>


                {/* BOTÃO VOLTAR */}

                <Pressable
                  style={({ pressed }) => [
                    styles.botaoFechar,
                    pressed && styles.botaoFecharPressionado
                  ]}
                  onPress={fecharModal}
                >

                  <Text style={styles.fecharTexto}>
                    ‹
                  </Text>

                </Pressable>


                {/* TÍTULO */}

                <View style={styles.tituloTopo}>

                  <Text style={styles.tituloTopoPrincipal}>
                    Guia Cultural
                  </Text>

                  <Text style={styles.tituloTopoSecundario}>
                    América Latina
                  </Text>

                </View>

              </View>


            

              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudoScroll}
              >


              

                <View style={styles.capaPais}>

                  <Image
                    source={paisSelecionado.imagem}
                    style={styles.imagemModal}
                  />


                  {/* GRADIENTE VISUAL */}

                  <View style={styles.sombraCapa} />


                  {/* NOME SOBRE A IMAGEM */}

                  <View style={styles.infoCapa}>

                    <Text style={styles.bandeiraCapa}>
                      {paisSelecionado.bandeira}
                    </Text>

                    <View>

                      <Text style={styles.nomeCapa}>
                        {paisSelecionado.nome}
                      </Text>

                      <Text style={styles.subtituloCapa}>
                        Descubra a cultura
                      </Text>

                    </View>

                  </View>

                </View>


  

                <View style={styles.introducaoModal}>

                  <Text style={styles.tituloSobre}>
                    Sobre o país
                  </Text>

                  <View style={styles.linhaTitulo} />

                </View>



                <View style={styles.bloco}>

                  <View style={styles.cabecalhoBloco}>

                    <View style={styles.iconeBloco}>
                      <Text style={styles.iconeTexto}>
                        🎭
                      </Text>
                    </View>

                    <View>

                      <Text style={styles.tituloBloco}>
                        Cultura & Tradição
                      </Text>

                      <Text style={styles.subtituloBloco}>
                        História e costumes
                      </Text>

                    </View>

                  </View>


                  <Image
                    source={paisSelecionado.imagemCultura}
                    style={styles.imagemBloco}
                  />


                  <Text style={styles.textoBloco}>
                    {paisSelecionado.cultura}
                  </Text>

                </View>



                <View style={styles.bloco}>

                  <View style={styles.cabecalhoBloco}>

                    <View style={styles.iconeBloco}>
                      <Text style={styles.iconeTexto}>
                        📍
                      </Text>
                    </View>

                    <View>

                      <Text style={styles.tituloBloco}>
                        Ponto Turístico
                      </Text>

                      <Text style={styles.subtituloBloco}>
                        Lugares para conhecer
                      </Text>

                    </View>

                  </View>


                  <Image
                    source={paisSelecionado.imagemTurismo}
                    style={styles.imagemBloco}
                  />


                  <Text style={styles.textoBloco}>
                    {paisSelecionado.pontoTuristico}
                  </Text>

                </View>


   

                <View style={styles.bloco}>

                  <View style={styles.cabecalhoBloco}>

                    <View style={styles.iconeBloco}>
                      <Text style={styles.iconeTexto}>
                        🍽️
                      </Text>
                    </View>

                    <View>

                      <Text style={styles.tituloBloco}>
                        Comida Típica
                      </Text>

                      <Text style={styles.subtituloBloco}>
                        Sabores tradicionais
                      </Text>

                    </View>

                  </View>


                  <Image
                    source={paisSelecionado.imagemComida}
                    style={styles.imagemBloco}
                  />


                  <Text style={styles.textoBloco}>
                    {paisSelecionado.comidaTipica}
                  </Text>

                </View>



                <Pressable
                  style={({ pressed }) => [
                    styles.botaoVoltar,
                    pressed && styles.botaoPressionado
                  ]}
                  onPress={fecharModal}
                >

                  <Text style={styles.textoBotao}>
                    Voltar para os países
                  </Text>

                  <Text style={styles.setaBotao}>
                    →
                  </Text>

                </Pressable>


              </ScrollView>

            </View>

          )}

        </SafeAreaView>

      </Modal>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({


  tela: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },




  cabecalho: {
  backgroundColor: '#0f172a',

  paddingHorizontal: 22,

  paddingTop: 30,

  paddingBottom: 18,

  flexDirection: 'row',

  alignItems: 'center',

  justifyContent: 'space-between',

  borderBottomLeftRadius: 22,

  borderBottomRightRadius: 22,
},


  tituloHeader: {
    color: '#ffffff',

    fontSize: 25,

    fontWeight: '800',
  },


  subtituloHeader: {
    color: '#38bdf8',

    fontSize: 14,

    fontWeight: '600',

    marginTop: 3,
  },


  contador: {
    width: 42,

    height: 42,

    borderRadius: 21,

    backgroundColor: '#1e293b',

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,

    borderColor: '#334155',
  },


  contadorTexto: {
    color: '#38bdf8',

    fontSize: 17,

    fontWeight: 'bold',
  },



  introducao: {
    paddingHorizontal: 18,

    paddingTop: 22,

    paddingBottom: 8,
  },


  tituloSecao: {
    fontSize: 21,

    fontWeight: '800',

    color: '#0f172a',
  },


  textoSecao: {
    fontSize: 14,

    color: '#64748b',

    marginTop: 5,

    lineHeight: 20,
  },




  scroll: {
    flex: 1,
  },


  lista: {
    padding: 16,

    paddingBottom: 30,
  },



  modalTela: {
    flex: 1,

    backgroundColor: '#f8fafc',
  },


  modal: {
    flex: 1,

    backgroundColor: '#f8fafc',
  },



  topoModal: {
    height: 78,

    backgroundColor: '#0f172a',

    position: 'relative',

    alignItems: 'center',

    justifyContent: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#1e293b',

    elevation: 5,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,

    shadowRadius: 4,
  },



  botaoFechar: {
    position: 'absolute',

    left: 16,

    top: 18,

    width: 42,

    height: 42,

    borderRadius: 21,

    backgroundColor: '#1e293b',

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,

    borderColor: '#334155',

    zIndex: 10,
  },


  botaoFecharPressionado: {
    backgroundColor: '#334155',

    transform: [
      {
        scale: 0.94,
      },
    ],
  },


  fecharTexto: {
    color: '#ffffff',

    fontSize: 34,

    fontWeight: '300',

    lineHeight: 36,

    marginTop: -3,
  },



  tituloTopo: {
    alignItems: 'center',

    justifyContent: 'center',
  },


  tituloTopoPrincipal: {
    color: '#ffffff',

    fontSize: 20,

    fontWeight: '800',

    letterSpacing: 0.3,
  },


  tituloTopoSecundario: {
    color: '#38bdf8',

    fontSize: 12,

    fontWeight: '600',

    marginTop: 3,

    letterSpacing: 0.5,
  },



  conteudoScroll: {
    paddingBottom: 35,
  },




  capaPais: {
    width: '100%',

    height: 280,

    position: 'relative',

    overflow: 'hidden',

    backgroundColor: '#0f172a',
  },


  imagemModal: {
    width: '100%',

    height: '100%',

    resizeMode: 'cover',
  },


  sombraCapa: {
    position: 'absolute',

    left: 0,

    right: 0,

    bottom: 0,

    height: 130,

    backgroundColor: 'rgba(15, 23, 42, 0.55)',
  },


  infoCapa: {
    position: 'absolute',

    left: 20,

    right: 20,

    bottom: 20,

    flexDirection: 'row',

    alignItems: 'center',
  },


  bandeiraCapa: {
    fontSize: 42,

    marginRight: 12,
  },


  nomeCapa: {
    color: '#ffffff',

    fontSize: 30,

    fontWeight: '800',
  },


  subtituloCapa: {
    color: '#cbd5e1',

    fontSize: 13,

    marginTop: 2,

    fontWeight: '600',
  },




  introducaoModal: {
    paddingHorizontal: 20,

    paddingTop: 24,

    paddingBottom: 14,
  },


  tituloSobre: {
    fontSize: 22,

    fontWeight: '800',

    color: '#0f172a',
  },


  linhaTitulo: {
    width: 42,

    height: 4,

    backgroundColor: '#38bdf8',

    borderRadius: 2,

    marginTop: 8,
  },




  bloco: {
    backgroundColor: '#ffffff',

    marginHorizontal: 16,

    marginBottom: 16,

    borderRadius: 18,

    padding: 16,

    borderWidth: 1,

    borderColor: '#e2e8f0',

    elevation: 3,

    shadowColor: '#0f172a',

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.07,

    shadowRadius: 5,
  },




  cabecalhoBloco: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 14,
  },


  iconeBloco: {
    width: 42,

    height: 42,

    borderRadius: 12,

    backgroundColor: '#eff6ff',

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 11,
  },


  iconeTexto: {
    fontSize: 20,
  },


  tituloBloco: {
    fontSize: 16,

    fontWeight: '800',

    color: '#0f172a',
  },


  subtituloBloco: {
    fontSize: 12,

    color: '#94a3b8',

    marginTop: 2,

    fontWeight: '600',
  },




  imagemBloco: {
    width: '100%',

    height: 175,

    borderRadius: 13,

    marginBottom: 13,

    resizeMode: 'cover',
  },




  textoBloco: {
    fontSize: 15,

    color: '#475569',

    lineHeight: 23,
  },



  botaoVoltar: {
    height: 56,

    marginHorizontal: 16,

    marginTop: 4,

    marginBottom: 10,

    borderRadius: 16,

    backgroundColor: '#0f172a',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 3,
  },


  botaoPressionado: {
    opacity: 0.85,

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

    marginRight: 10,
  },


  setaBotao: {
    color: '#38bdf8',

    fontSize: 21,

    fontWeight: '800',
  },

});