import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import Header from './components/Header';
import Jobs from './components/Jobs';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component {

  render() {

    return (

      <View style={{ flex: 1 }}>

        <Header />

        <ScrollView
          contentContainerStyle={{
            padding: 20
          }}
        >

          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 10
            }}
          >
            STAR WARS
          </Text>

          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 20
            }}
          >
            Personagens da galáxia
          </Text>


          {/* IMAGEMM PRINCIPAL:  https://viewerscommentary.com/wp-content/uploads/2014/05/star-wars-saga1.jpg 
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjA8Q-CVGlpSM7bh8WMTJCDzMQftCMXr4eg-LaDza1Q&s=10 */}

         <Image
         source={{
         uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjA8Q-CVGlpSM7bh8WMTJCDzMQftCMXr4eg-LaDza1Q&s=10'
         }}
         style={{
         width: '100%',
         height: 200,
         borderRadius: 15,
         marginBottom: 20
         }}
/>

         {/* CARDS */}

 <View
  style={{
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20
  }}
>

  <Text
    style={{
      fontSize: 26,
      fontWeight: 'bold',
      color: '#003cff',
      textAlign: 'center',
      letterSpacing: 2,
      textShadowColor: '#003cff',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 8
    }}
  >
    LADO DA LUZ
  </Text>

  <View
    style={{
      width: 120,
      height: 2,
      backgroundColor: '#003cff',
      marginTop: 8
    }}
  />

  <Text
    style={{
      fontSize: 12,
      color: '#888',
      marginTop: 6,
      letterSpacing: 3
    }}
  >
    JEDI
  </Text>



            {/* LADO DA LUZ */}

            <Card
              nome="Luke Skywalker"
              descricao="Jedi e filho de Darth Vader"
              lado="jedi"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWDp-sPd7LAgiEH6OU2e5iYnPlh6TquD8XKbnNwj-3w&s=10"
            />

            <Card
              nome="Leia Organa"
              descricao="Princesa e líder da Rebelião"
              lado="jedi"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqt5O5FmppRYBh7KWwZHjc1aRCpqe0l0qt4jSQvYt9Gw&s=10"
            />

            <Card
              nome="Yoda"
              descricao="Grão mestre Jedi"
              lado="jedi"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYQhy8d5lEWbctT4RM_cP26EoL0Yi3R_MOsqupDjzxA&s=10"
            />

            <Card
              nome="Obi-Wan Kenobi"
              descricao="Mestre Jedi e mentor de Anakin"
              lado="jedi"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcOQu17R3YlhoIMunde6iU0FKbsXlGxMyWFtxzfYL3A&s=10"
            />

   {/* LADO SOMBRIO */}

<View
  style={{
    marginTop: 25,
    alignItems: 'center',
    marginBottom: 20
  }}
>


  <Text
    style={{
      fontSize: 26,
      fontWeight: 'bold',
      color: '#D00000',
      textAlign: 'center',
      letterSpacing: 2,
      textShadowColor: '#FF0000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 8
    }}
  >
    LADO SOMBRIO
  </Text>

  <View
    style={{
      width: 120,
      height: 2,
      backgroundColor: '#D00000',
      marginTop: 8
    }}
  />

  <Text
    style={{
      fontSize: 12,
      color: '#888',
      marginTop: 6,
      letterSpacing: 3
    }}
  >
    SITH
  </Text>

</View>
            

            <Card
              nome="Darth Maul"
              descricao="Mestre sith e aprendiz de Darth Sidious"
              lado="sith"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1u9FDbXSKSX9l9cvjE0HYM2eMP6FylWcjwkqVuSn2g&s=10"
            />

            <Card
              nome="Darth Vader"
              descricao="Darth Vader o escolhido da força"
              lado="sith"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKFKAe6dBPOUnUuxGDHK4Li_uRGRaalE_KZV1pcRHvA&s=10"
            />

            <Card
              nome="Darth Sidius"
              descricao="O sith mais cruel de todos os tempos"
              lado="sith"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE6r-SbVCkXqQ_Wcfhm88KwCjZT7mBNSFf_sQkQXeGQ&s"
            />

            <Card
              nome="Darth Thiranus"
              descricao="Um jedi que caiu para o lado sombrio"
              lado="sith"
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qoKRATS46K6Fpu5PuZDd9gwFJFl83r5HoY3i4IB7Ww&s=10"
            />


          </View>

        </ScrollView>

        <Footer />

      </View>

    );
  }
}

export default App;