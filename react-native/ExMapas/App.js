
import React, { useState } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import MapView, {
  Marker,
} from 'react-native-maps';

import Cabecalho from './components/Cabecalho';
import ControlesMapa from './components/ControlesMapa';
import ModalLocal from './components/ModalLocal';


export default function App() {

  const [tipoMapa, setTipoMapa] = useState('standard');

  const [localSelecionado, setLocalSelecionado] =
    useState(null);


  const locais = [

    {
      id: '1',
      nome: 'Museu do Café',
      descricao: 'Museu histórico localizado no Centro de Santos.',
      imagem: require('./assets/museuCafe.jpg'),
      latitude: -23.932229,
      longitude: -46.330043,
    },

    {
      id: '2',
      nome: 'Museu Pelé',
      descricao: 'Museu dedicado à trajetória do Rei do Futebol.',
      imagem: require('./assets/museuPele.jpg'),
      latitude: -23.931162,
      longitude: -46.333535,
    },

    {
      id: '3',
      nome: 'Monte Serrat',
      descricao: 'Ponto turístico com vista panorâmica de Santos.',
      imagem: require('./assets/monteSerrat.jpg'),
      latitude: -23.939554,
      longitude: -46.330394,
    },

    {
      id: '4',
      nome: 'Orquidário Municipal',
      descricao: 'Parque com plantas, animais e áreas de natureza.',
      imagem: require('./assets/orquidarioSantos.jpg'),
      latitude: -23.965449,
      longitude: -46.349128,
    },

    {
      id: '5',
      nome: 'Parque Roberto Mário Santini',
      descricao: 'Parque localizado no Emissário Submarino.',
      imagem: require('./assets/emissarioSubmarino.jpg'),
      latitude: -23.968456,
      longitude: -46.350355,
    },

    {
      id: '6',
      nome: 'Praia do Gonzaga',
      descricao: 'Uma das praias mais conhecidas de Santos.',
      imagem: require('./assets/praiaGonzaga.jpg'),
      latitude: -23.970281,
      longitude: -46.330985,
    },

    {
      id: '7',
      nome: 'Aquário Municipal',
      descricao: 'Tradicional atração turística da Ponta da Praia.',
      imagem: require('./assets/aquarioSantos.jpg'),
      latitude: -23.986188,
      longitude: -46.308136,
    },

    {
      id: '8',
      nome: 'Museu de Pesca',
      descricao: 'Museu com acervo relacionado ao ambiente aquático.',
      imagem: require('./assets/museuPesca.jpg'),
      latitude: -23.990425,
      longitude: -46.306756,
    },

    {
      id: '9',
      nome: 'Praça das Bandeiras',
      descricao: 'Local tradicional do bairro Gonzaga.',
      imagem: require('./assets/pracaBandeiras.jpg'),
      latitude: -23.969846,
      longitude: -46.333166,
    },

    {
      id: '10',
      nome: 'Estádio Vila Belmiro',
      descricao: 'Estádio Urbano Caldeira, casa histórica do Santos FC.',
      imagem: require('./assets/vilaBelmiro.jpg'),
      latitude: -23.950758,
      longitude: -46.339624,
    },

  ];


  return (

    <View style={styles.container}>

      <MapView
        style={styles.map}

        mapType={tipoMapa}

        initialRegion={{
          latitude: -23.9608,
          longitude: -46.3336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

        {locais.map((local) => (

          <Marker
            key={local.id}

            coordinate={{
              latitude: local.latitude,
              longitude: local.longitude,
            }}

            title={local.nome}

            description={local.descricao}

            onPress={() =>
              setLocalSelecionado(local)
            }
          />

        ))}

      </MapView>


      <ModalLocal
        localSelecionado={localSelecionado}

        fecharModal={() =>
          setLocalSelecionado(null)
        }
      />


      <Cabecalho />


      <ControlesMapa
        tipoMapa={tipoMapa}

        setTipoMapa={setTipoMapa}

        quantidade={locais.length}
      />

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },

});



/* OUTRA FORMA DE FAZER O CONTROLE DO MAPA, MAS COM UM PAINEL EMBAIXO DO CABEÇALHO
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';


export default function App() {

 
  const [tipoMapa, setTipoMapa] = useState('standard');


  // Array com os locais
  const locais = [
    {
      id: '1',
      nome: 'Santos',
      descricao: 'Cidade de Santos - SP',
      latitude: -23.9608,
      longitude: -46.3336,
    },

    {
      id: '2',
      nome: 'São Vicente',
      descricao: 'Cidade de São Vicente - SP',
      latitude: -23.9604,
      longitude: -46.4120,
    },

    {
      id: '3',
      nome: 'Praia Grande',
      descricao: 'Cidade de Praia Grande - SP',
      latitude: -24.0058,
      longitude: -46.4021,
    },
  ];


  return (

    <View style={styles.container}>

      

      <MapView
        style={styles.map}

        mapType={tipoMapa}

        initialRegion={{
          latitude: -23.9608,
          longitude: -46.3336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

        {/ * UTILIZANDO MARCADORES * /}

        {locais.map((local) => (

          <Marker
            key={local.id}

            coordinate={{
              latitude: local.latitude,
              longitude: local.longitude,
            }}

            title={local.nome}

            description={local.descricao}
          />

        ))}

      </MapView>


     

      <View style={styles.painel}>

        <Text style={styles.titulo}>
          Mapa da Baixada Santista
        </Text>

        <Text style={styles.subtitulo}>
          Selecione o modo do mapa
        </Text>


        <View style={styles.botoes}>

        

          <Pressable
            style={[
              styles.botao,
              tipoMapa === 'standard' && styles.botaoAtivo,
            ]}

            onPress={() => setTipoMapa('standard')}
          >

            <Text
              style={[
                styles.textoBotao,
                tipoMapa === 'standard' && styles.textoAtivo,
              ]}
            >
              Mapa
            </Text>

          </Pressable>


          {/ * MAPA SATÉLITE * /}

          <Pressable
            style={[
              styles.botao,
              tipoMapa === 'satellite' && styles.botaoAtivo,
            ]}

            onPress={() => setTipoMapa('satellite')}
          >

            <Text
              style={[
                styles.textoBotao,
                tipoMapa === 'satellite' && styles.textoAtivo,
              ]}
            >
              Satélite
            </Text>

          </Pressable>

        </View>

      </View>

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },




  painel: {
    position: 'absolute',
    top: 50,
    left: 18,
    right: 18,

    backgroundColor: '#ffffff',

    padding: 16,

    borderRadius: 18,

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },

  subtitulo: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    marginBottom: 12,
  },


  

  botoes: {
    flexDirection: 'row',
    gap: 10,
  },

  botao: {
    flex: 1,

    paddingVertical: 11,

    borderRadius: 10,

    backgroundColor: '#f3f4f6',

    alignItems: 'center',
  },

  botaoAtivo: {
    backgroundColor: '#2563eb',
  },

  textoBotao: {
    color: '#374151',
    fontSize: 13,
    fontWeight: 'bold',
  },

  textoAtivo: {
    color: '#ffffff',
  },

});
*/
