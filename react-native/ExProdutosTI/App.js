import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>

        <Text style={styles.logo}>
          TechStore
        </Text>

        <Text style={styles.oferta}>
          Ofertas do dia
        </Text>

      </View>


      {/* BANNER */}
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHnWGRrr-Fv0OZUaz8Hu5K5fNBwIPLeL1B_XcxDOWog&s=10'
        }}
        style={styles.banner}
      />


      {/* CATEGORIAS */}
      <Text style={styles.titulo}>
        Categorias
      </Text>

      <View style={styles.categorias}>

        <View style={styles.categoria}>
          <Text style={styles.categoriaTexto}>
            Notebooks
          </Text>
        </View>

        <View style={styles.categoria}>
          <Text style={styles.categoriaTexto}>
            Celulares
          </Text>
        </View>

        <View style={styles.categoria}>
          <Text style={styles.categoriaTexto}>
            Monitores
          </Text>
        </View>

        <View style={styles.categoria}>
          <Text style={styles.categoriaTexto}>
            Acessórios
          </Text>
        </View>

        <View style={styles.categoria}>
          <Text style={styles.categoriaTexto}>
            Periféricos
          </Text>
        </View>

      </View>


      {/* PRODUTOS */}
      <Text style={styles.titulo}>
        Produtos
      </Text>

      <View style={styles.produtos}>


        {/* PRODUTO 1 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1fzuKgPnZDIWE5A-mbQEolnRl57--4Gv1knjeI5R6w&s=10'
            }}
            style={styles.produtoImagem}
          />

          <Text style={styles.produtoNome}>
            Notebook Gamer
          </Text>

          <Text style={styles.preco}>
            R$ 4.599,00
          </Text>

        </View>


        {/* PRODUTO 2 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzl0evKzpZZrADWAxAODoBmzRzzLYptSOqE-8zXVUFw&s=10'
            }}
            style={styles.produtoImagem}
          />

          <Text style={styles.produtoNome}>
            Smartphone X
          </Text>

          <Text style={styles.preco}>
            R$ 2.799,00
          </Text>

        </View>


        {/* PRODUTO 3 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrUmUxJqHbKP90uaCY24GhIPqqO09pA0GdbanZW_cmg&s=10'
            }}
            style={styles.produtoImagem}
          />

          <Text style={styles.produtoNome}>
            Monitor 24"
          </Text>

          <Text style={styles.preco}>
            R$ 899,00
          </Text>

        </View>


        {/* PRODUTO 4 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4o2bTDgMsr2QZUvOny9umlK4WcZ5AAhqZDfZ3VMPm7g&s'
            }}
            style={styles.produtoImagem}
          />

          <Text style={styles.produtoNome}>
            Fone Bluetooth
          </Text>

          <Text style={styles.preco}>
            R$ 199,00
          </Text>

        </View>


        {/* PRODUTO 5 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsHNuLclJMCA6B-My685sY-kqudqCZF0RxC71JNzTjw&s=10'
            }}
            style={styles.produtoImagem}
          />

          <Text style={styles.produtoNome}>
            Teclado Mecânico
          </Text>

          <Text style={styles.preco}>
            R$ 349,00
          </Text>

        </View>


        {/* PRODUTO 6 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixbSaRuFPhyTwevuPEwwixiamZucitxOfWx5E9N6iiA&s=10'
            }}
            style={styles.produtoImagem}
          />

          <Text style={styles.produtoNome}>
            Mouse Gamer
          </Text>

          <Text style={styles.preco}>
            R$ 149,00
          </Text>

        </View>

      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  // CONTAINER
  container: {
    flexGrow: 1,
    padding: 16,
    gap: 20,
    backgroundColor: '#f5f5f5'
  },


  // CABEÇALHO
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222'
  },

  oferta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c52cf'
  },


  // BANNER
  banner: {
    width: '100%',
    height: 160,
    borderRadius: 12
  },


  // TÍTULO
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222'
  },


  // CATEGORIAS
  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },

  categoria: {
    padding: 15,
    backgroundColor: '#2c52cf',
    borderRadius: 15
  },

  categoriaTexto: {
    color: '#ffffff',
    fontWeight: 'bold'
  },


  // PRODUTOS
  produtos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12
  },


  // CARD
  card: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5
  },


  // IMAGEM
  produtoImagem: {
    width: '100%',
    height: 100,
    borderRadius: 8
  },


  // NOME
  produtoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#222'
  },


  // PREÇO
  preco: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#2c52cf'
  }

});