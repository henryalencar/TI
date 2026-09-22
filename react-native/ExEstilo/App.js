import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>



        <Text style={styles.tituloTela}>
          Red Hot Chili Peppers
        </Text>


        <View style={styles.card}>


          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MSw_YSSFkP1V7rTaOx_wAGwfDssJJvBeYR1F2wzukg&s=10'
            }}
            style={styles.foto}
          />


          <Text style={styles.nome}>
            Red Hot Chili Peppers
          </Text>


          <Text style={styles.biografia}>
            Banda de rock formada em 1983
          </Text>

          <Text style={styles.biografia}>
            Los Angeles, Califórnia
          </Text>


          <View style={styles.linha} />




          <View style={styles.informacoes}>

            <View style={styles.info}>

              <Text style={styles.numero}>
                120
              </Text>

              <Text style={styles.label}>
                Publicações
              </Text>

            </View>


            <View style={styles.info}>

              <Text style={styles.numero}>
                12,5M
              </Text>

              <Text style={styles.label}>
                Seguidores
              </Text>

            </View>


            <View style={styles.info}>

              <Text style={styles.numero}>
                450
              </Text>

              <Text style={styles.label}>
                Seguindo
              </Text>

            </View>

          </View>


          <View style={styles.linha} />




          <Text style={styles.editar}>
            Editar Perfil
          </Text>


          <View style={styles.linha} />



          <Text style={styles.fotos}>
            Fotos
          </Text>


          {/* GALERIA */}

          <View style={styles.galeria}>

            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6k2z0wty0xK25ESlj-r_FAnYQGGxZB85acd913XMw1Q&s=10'
              }}
              style={styles.fotoGaleria}
            />


            <Image
              source={{
                uri: 'https://thesheaf.com/wp-content/uploads/2012/11/red-hot-chili-peppers.jpeg'
              }}
              style={styles.fotoGaleria}
            />


            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjh9nB5WrNHWB1-ZR1fB_p2GlGvawiuLzE6iQbJc5Z6g&s=10'
              }}
              style={styles.fotoGaleria}
            />


            <Image
              source={{
                uri: 'https://resources.tidal.com/images/0071b980/fc99/41ad/bf95/8d82ad5cbcce/750x750.jpg'
              }}
              style={styles.fotoGaleria}
            />

          </View>


          {/* FOOTER */}

          <View style={styles.footer}>

            <Text style={styles.footerTitulo}>
              RED HOT CHILI PEPPERS
            </Text>

            <Text style={styles.footerTexto}>
              Rock • Funk Rock • Alternative Rock
            </Text>

            <Text style={styles.footerTexto}>
              Los Angeles • California
            </Text>

            <Text style={styles.footerTexto}>
              © 2026 Red Hot Chili Peppers
            </Text>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({



  container: {
    flex: 1,
    backgroundColor: '#68708f',
    paddingTop: 20,
    paddingHorizontal: 20
  },




  tituloTela: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#32b8ff',
    marginBottom: 30
  },


  card: {
    backgroundColor: '#202c40',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#314057',
    padding: 28,
    alignItems: 'center'
  },



  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 18
  },




  nome: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#e8edf5',
    marginBottom: 8,
    textAlign: 'center'
  },


  biografia: {
    fontSize: 16,
    color: '#9ca9bc',
    marginTop: 4,
    textAlign: 'center'
  },



  linha: {
    width: '100%',
    height: 1,
    backgroundColor: '#344155',
    marginVertical: 20
  },


  informacoes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },


  info: {
    alignItems: 'center',
    flex: 1
  },


  numero: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffc928',
    marginBottom: 5
  },


  label: {
    fontSize: 15,
    color: '#d1d8e3',
    textAlign: 'center'
  },



  editar: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#27d99b'
  },




  fotos: {
    width: '100%',
    fontSize: 20,
    color: '#728cff',
    fontWeight: 'bold',
    marginBottom: 5
  },



  galeria: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15
  },


  fotoGaleria: {
    width: '48%',
    height: 140,
    borderRadius: 10,
    marginBottom: 10
  },


  /* FOOTER */

  footer: {
    width: '100%',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#111827',
    borderTopWidth: 1,
    borderTopColor: '#2dd4bf',
    alignItems: 'center'
  },


  footerTitulo: {
    color: '#2dd4bf',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 8,
    textAlign: 'center'
  },


  footerTexto: {
    color: '#9ca3af',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5
  }

});