
import React from 'react';

import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator();
 
// TELA DE INÍCIO
function InicioScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus produtos</Text>
      <Text style={styles.subtitulo}>Encontre os melhores produtos para você.</Text>
      
      <Pressable style={styles.botao} onPress={() => navigation.navigate('Produtos')}>
        <Text style={styles.textoBotao}>VER PRODUTOS</Text>
      </Pressable>
    </View>
  );
}
 
// TELA 2 DE PRODUTOS
function ProdutoScreen({ navigation }) {
  const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500 , imagem: require('./assets/notebook.jpg')},
    { id: 2, nome: 'Smartphone', preco: 200 , imagem: require('./assets/smartphone.jpg')},
    { id: 3, nome: 'tablet', preco: 1500 , imagem: require('./assets/tablet.jpg')}
  ];

  return (
    
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <Text style={styles.titulo}>Produtos</Text>
      
      {produtos.map((produto) => (
        <View key={produto.id} style={styles.card}>
   
          <Image source={produto.imagem} style={styles.imagemProduto} />
          
          <Text style={styles.nomeProduto}>{produto.nome}</Text>
          <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
          
          <Pressable
            style={styles.botao}
            onPress={() => navigation.navigate('Detalhes', { produto: produto })}
          >
            <Text style={styles.textoBotao}>VER DETALHES</Text>
          </Pressable>
        </View>
      ))}

      <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>VOLTAR</Text>
      </Pressable>
    </ScrollView>
  );
}
 
// TELA DETALHES
function DetalhesScreen({ route, navigation }) {
  const { produto } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Produto</Text>
      <View style={styles.cardDetalhe}>
       
        <Image source={produto.imagem} style={styles.imagemDetalhe} />

        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
        <Text style={styles.descricao}>Este produto está disponível para compra.</Text>
        
        <Pressable
          style={styles.botao}
          onPress={() => alert('Produto selecionado: ' + produto.nome)}
        >
          <Text style={styles.textoBotao}>COMPRAR</Text>
        </Pressable>

        <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>VOLTAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={InicioScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Produtos" component={ProdutoScreen} options={{ title: 'Lista de Produtos' }} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Visualizar Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },

  containerScroll: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  preco: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  cardDetalhe: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 3,
  },
  
  imagemProduto: {
    width: '100%',
    height: 150,
    borderRadius: 6,
    backgroundColor: '#eee', 
  },
  imagemDetalhe: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: '#eee',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 5,
  },
  botaoVoltar: {
    backgroundColor: '#6c757d',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
