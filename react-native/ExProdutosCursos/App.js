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
          DevCursos
        </Text>

        <Text style={styles.meusCursos}>
          Meus Cursos
        </Text>

      </View>


      {/* BANNER */}
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgC3pSXQiUsqereDgHKvNyxTeEhT6mguXIx77MIxtAg&s=10'
        }}
        style={styles.banner}
      />


      {/* CATEGORIAS */} 
      <Text style={styles.titulo}>
        Categorias
      </Text>

      <View style={styles.categorias}>

        <View style={styles.categoria}>
          <Text>HTML</Text>
        </View>

        <View style={styles.categoria}>
          <Text>CSS</Text>
        </View>

        <View style={styles.categoria}>
          <Text>JavaScript</Text>
        </View>

        <View style={styles.categoria}>
          <Text>React</Text>
        </View>

        <View style={styles.categoria}>
          <Text>Banco de Dados</Text>
        </View>

      </View>


      {/* CURSOS */}
      <Text style={styles.titulo}>
        Cursos
      </Text>

      <View style={styles.cursos}>


        {/* CURSO 1 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbdn4uuTlafyQOi_IGDXXRhkbI-B8JIuBxqghnWgkbQ&s=10'
            }}
            style={styles.cursoImagem}
          />

          <Text style={styles.cursoNome}>
            HTML e CSS
          </Text>

          <Text style={styles.professor}>
            Professor: João
          </Text>

          <Text style={styles.aulas}>
            30 aulas
          </Text>

        </View>


        {/* CURSO 2 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7iuikVlI5q6zhjaAzwUVXnkUSUa5kxiBHt_0tENWLQ&s=10'
            }}
            style={styles.cursoImagem}
          />

          <Text style={styles.cursoNome}>
            JavaScript
          </Text>

          <Text style={styles.professor}>
            Professor: Maria
          </Text>

          <Text style={styles.aulas}>
            40 aulas
          </Text>

        </View>


        {/* CURSO 3 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3n7C5an2OlCMCNPq3OkKckjuuzJi2sKLYzPHkkzXAA&s=10'
            }}
            style={styles.cursoImagem}
          />

          <Text style={styles.cursoNome}>
            React Native
          </Text>

          <Text style={styles.professor}>
            Professor: Carlos
          </Text>

          <Text style={styles.aulas}>
            35 aulas
          </Text>

        </View>


        {/* CURSO 4 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0QGMwJNCvFHR20oRcN9dVb6K3nMp39U8vRkA2zky1w&s=10'
            }}
            style={styles.cursoImagem}
          />

          <Text style={styles.cursoNome}>
            Banco de Dados
          </Text>

          <Text style={styles.professor}>
            Professor: Ana
          </Text>

          <Text style={styles.aulas}>
            25 aulas
          </Text>

        </View>


        {/* CURSO 5 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Yga-EodjzgxNGxo3V3pwfQNkihg9jkBpthlfiwlwpg&s=10'
            }}
            style={styles.cursoImagem}
          />

          <Text style={styles.cursoNome}>
            Cobol
          </Text>

          <Text style={styles.professor}>
            Professor: Pedro
          </Text>

          <Text style={styles.aulas}>
            28 aulas
          </Text>

        </View>


        {/* CURSO 6 */}
        <View style={styles.card}>

          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T8dPtMTFwr5_d86kcRgs7cyGyuiVTPkMw3Chmy3RTQ&s=10'
            }}
            style={styles.cursoImagem}
          />

          <Text style={styles.cursoNome}>
            Java
          </Text>

          <Text style={styles.professor}>
            Professor: Lucas
          </Text>

          <Text style={styles.aulas}>
            45 aulas
          </Text>

        </View>

      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 16,
    gap: 20,
    backgroundColor: '#f2f2f2'
  },


  /* CABEÇALHO */

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

  meusCursos: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4f46e5'
  },


  /* BANNER */

  banner: {
    width: '100%',
    height: 160,
    borderRadius: 12
  },


  /* TÍTULOS */

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222'
  },


  /* CATEGORIAS */

  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },

  categoria: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#4f46e5',
    borderRadius: 15
  },


  /* CARDS DOS CURSOS */

  cursos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12
  },

  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,

    elevation: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 4
  },

  cursoImagem: {
    width: '100%',
    height: 110,
    borderRadius: 10
  },

  cursoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#222'
  },

  professor: {
    fontSize: 14,
    marginTop: 6,
    color: '#666'
  },

  aulas: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    color: '#4f46e5'
  }

});