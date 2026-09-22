import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';

import Card from './components/Card';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      sabores: [

        {
          id: '1',
          nome: 'Açaí',
          descricao: 'Fruto típico da Amazônia, muito consumido na região Norte e utilizado em diversas receitas.',
          regiao: 'Pará',
          imagem: require('./assets/acai.jpg')
        },

        {
          id: '2',
          nome: 'Castanha-do-Pará',
          descricao: 'Semente típica da Amazônia, muito apreciada e utilizada em alimentos e doces.',
          regiao: 'Amazonas',
          imagem: require('./assets/castanhaPara.jpg')
        },

        {
          id: '3',
          nome: 'Cupuaçu',
          descricao: 'Fruto amazônico de sabor marcante, utilizado em sucos, doces, sorvetes e cremes.',
          regiao: 'Amazonas',
          imagem: require('./assets/copoaçu.jpg')
        },

        {
          id: '4',
          nome: 'Tucumã',
          descricao: 'Fruto amazônico bastante consumido no Norte, especialmente em sanduíches e preparações regionais.',
          regiao: 'Amazonas',
          imagem: require('./assets/tucuma.jpg')
        },

        {
          id: '5',
          nome: 'Guaraná',
          descricao: 'Fruto amazônico tradicionalmente utilizado na produção de bebidas.',
          regiao: 'Amazonas',
          imagem: require('./assets/guarana.jpg')
        },

        {
          id: '6',
          nome: 'Farinha de Mandioca',
          descricao: 'Produto muito presente na alimentação amazônica e utilizado como acompanhamento.',
          regiao: 'Pará',
          imagem: require('./assets/farinhaMandioca.jpg')
        },

        {
          id: '7',
          nome: 'Pupunha',
          descricao: 'Fruto tradicional da Amazônia, consumido cozido e utilizado em diferentes preparações.',
          regiao: 'Amazonas',
         imagem: require('./assets/pupunha.jpg')
        },

        {
          id: '8',
          nome: 'Jambu',
          descricao: 'Planta típica da Amazônia conhecida pela sensação de formigamento ao ser consumida.',
          regiao: 'Pará',
          imagem: require('./assets/jambu.jpg')
        },

        {
          id: '9',
          nome: 'Tacacá',
          descricao: 'Caldo quente tradicional de origem indígena feito com tucupi, goma de mandioca, jambu e camarão seco.',
          regiao: 'Pará',
          imagem: require('./assets/tacaca.jpg')
        },

        {
          id: '10',
          nome: 'Mel Nativas da Amazônia',
          descricao: 'Mel produzido por abelhas sem ferrão da floresta, apresentando sabor mais fluido, levemente ácido e floral',
          regiao: 'Amazonas',
          imagem: require('./assets/melAmazonia.jpg')
        }

      ]

    };

  }


  renderItem = ({ item }) => {

  return (
    <Card
      nome={item.nome}
      descricao={item.descricao}
      regiao={item.regiao}
      imagem={item.imagem}
    />
  );

};


  render() {

    return (

      <View style={styles.container}>

        <FlatList

          data={this.state.sabores}

          keyExtractor={(item) => item.id}

          renderItem={this.renderItem}

          ListHeaderComponent={

            <View>

              <Text style={styles.titulo}>
                PRODUTOS E SABORES DO NORTE
              </Text>

              <Text style={styles.subtitulo}>
                Uma viagem pelos sabores do Norte brasileiro
              </Text>


              <Image  //BANNER
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUj5TBzsw7MW2i7oDxtGiIW4yTufjwerqW_fTbqlTJ5A&s=10'
                }}
                style={styles.banner}
              />


              <View style={styles.areaTitulo}>

                <Text style={styles.tituloSecao}>
                   PRODUTOS TÍPICOS
                </Text>

                <View style={styles.linha} />

                <Text style={styles.textoSecao}>
                  Conheça alguns dos produtos tradicionais da região Norte do Brasil.
                </Text>

              </View>

            </View>

          }


          ListFooterComponent={

            <View style={styles.footer}>

              <Text style={styles.footerTitulo}>
                PRODUTOS TÍPICOS DO NORTE
              </Text>

              <Text style={styles.footerTexto}>
                Amazônia • Cultura • Tradição
              </Text>

              <Text style={styles.footerTexto}>
                © 2026 Produtos do Norte
              </Text>

            </View>

          }


          contentContainerStyle={{
            padding: 20
          }}

        />

      </View>

    );

  }

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff8e7'
  },


  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#166534',
    marginTop: 25
  },


  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    color: '#765c48',
    marginTop: 8,
    marginBottom: 20
  },


  banner: {
    width: '100%',
    height: 190,
    borderRadius: 15,
    marginBottom: 25
  },


  areaTitulo: {
    alignItems: 'center',
    marginBottom: 20
  },


  tituloSecao: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#d97706',
    letterSpacing: 1
  },


  linha: {
    width: 100,
    height: 3,
    backgroundColor: '#d97706',
    marginTop: 8,
    marginBottom: 8
  },


  textoSecao: {
    fontSize: 14,
    color: '#765c48',
    textAlign: 'center'
  },


  footer: {
    marginTop: 20,
    padding: 25,
    backgroundColor: '#166534',
    borderRadius: 15,
    alignItems: 'center'
  },


  footerTitulo: {
    color: '#ffd166',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 8
  },


  footerTexto: {
    color: '#fff',
    fontSize: 13,
    marginTop: 5,
    textAlign: 'center'
  }

});


export default App;