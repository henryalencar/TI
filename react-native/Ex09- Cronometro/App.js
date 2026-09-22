import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimos: []
    };

    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
    this.limparHistorico = this.limparHistorico.bind(this);
  }


  // INICIAR / PARAR
  vai() {

    if (this.timer != null) {

      clearInterval(this.timer);

      this.timer = null;

      this.setState({
        botao: 'VAI'
      });

    } else {

      this.timer = setInterval(() => {

        this.setState({
          numero: this.state.numero + 0.1
        });

      }, 100);

      this.setState({
        botao: 'PARAR'
      });
    }
  }


  
  limpar() {

    if (this.timer != null) {

      clearInterval(this.timer);

      this.timer = null;
    }

    let novaLista = this.state.ultimos;

    if (this.state.numero > 0) {

      novaLista = [
        this.state.numero,
        ...this.state.ultimos
      ].slice(0, 3);

    }

    this.setState({

      ultimos: novaLista,

      numero: 0,

      botao: 'VAI'

    });
  }


  // APAGAR TODO O HISTÓRICO
  limparHistorico() {

    this.setState({
      ultimos: []
    });

  }


  render() {

    return (

      <View style={styles.container}>


        {/* CRONÔMETRO */}

        <View style={styles.areaCronometro}>

          <Image
            source={require('./assets/cronometro.png')}
            style={styles.cronometro}
          />

          <Text style={styles.timer}>
            {this.state.numero.toFixed(1)}
          </Text>

        </View>


        {/* TÍTULO */}

        <Text style={styles.titulo}>
          CRONÔMETRO
        </Text>

        <Text style={styles.segundos}>
          segundos
        </Text>


        {/* BOTÕES */}

        <View style={styles.btnArea}>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.vai}
          >

            <Text style={styles.btnTexto}>
              {this.state.botao}
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.btn}
            onPress={this.limpar}
          >

            <Text style={styles.btnTexto}>
              LIMPAR
            </Text>

          </TouchableOpacity>

        </View>


        {/* HISTÓRICO */}

        <View style={styles.areaUltimos}>

          <Text style={styles.tituloHistorico}>
            HISTÓRICO — ÚLTIMOS 3
          </Text>


          {this.state.ultimos.length > 0

            ?

            this.state.ultimos.map((tempo, index) => (

              <View
                key={index}
                style={styles.cardUltimo}
              >

                <Text style={styles.posicao}>
                  {index + 1}º
                </Text>


                <Text style={styles.ultimoValor}>
                  {tempo.toFixed(1)} s
                </Text>

              </View>

            ))

            :

            <Text style={styles.ultimoVazio}>
              Nenhum tempo registrado
            </Text>

          }


          {/* BOTÃO LIMPAR HISTÓRICO */}

          <TouchableOpacity
            style={styles.btnLimparHistorico}
            onPress={this.limparHistorico}
          >

            <Text style={styles.btnTextoHistorico}>
              LIMPAR HISTÓRICO
            </Text>

          </TouchableOpacity>


        </View>


      </View>

    );

  }

}



const styles = StyleSheet.create({

  /* TELA */

  container: {

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#1E1E24'

  },


  /* CRONÔMETRO */

  areaCronometro: {

    width: 250,

    height: 250,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 10

  },


  cronometro: {

    width: 250,

    height: 250,

    resizeMode: 'contain',

    opacity: 0.9

  },


  /* NÚMERO */

  timer: {

    position: 'absolute',

    color: '#FFF',

    fontSize: 48,

    fontWeight: 'bold',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',

    textShadowOffset: {
      width: 1,
      height: 1
    },

    textShadowRadius: 3

  },


  /* TÍTULO */

  titulo: {

    color: '#00aeef',

    fontSize: 28,

    fontWeight: '900',

    letterSpacing: 2,

    marginBottom: 5

  },


  segundos: {

    color: '#8A8A93',

    fontSize: 14,

    textTransform: 'uppercase',

    letterSpacing: 2

  },


  /* ÁREA DOS BOTÕES */

  btnArea: {

    flexDirection: 'row',

    marginTop: 40,

    paddingHorizontal: 20

  },


  /* BOTÕES PRINCIPAIS */

  btn: {

    width: 130,

    height: 55,

    backgroundColor: '#2A2A35',

    marginHorizontal: 10,

    borderRadius: 30,

    justifyContent: 'center',

    alignItems: 'center',

    borderWidth: 2,

    borderColor: '#00aeef',

    elevation: 5,

    shadowColor: '#00aeef',

    shadowOffset: {
      width: 0,
      height: 0
    },

    shadowOpacity: 0.4,

    shadowRadius: 5

  },


  btnTexto: {

    color: '#00aeef',

    fontSize: 18,

    fontWeight: 'bold',

    letterSpacing: 1

  },


  /* HISTÓRICO */

  areaUltimos: {

    marginTop: 35,

    width: '80%'

  },


  tituloHistorico: {

    color: '#8A8A93',

    fontSize: 14,

    textAlign: 'center',

    marginBottom: 15,

    textTransform: 'uppercase',

    letterSpacing: 1

  },


  /* CARD DO HISTÓRICO */

  cardUltimo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.05)',

    paddingVertical: 12,

    paddingHorizontal: 20,

    marginBottom: 10,

    borderRadius: 12,

    borderLeftWidth: 4,

    borderLeftColor: '#00aeef'

  },


  posicao: {

    color: '#8A8A93',

    fontSize: 18,

    fontWeight: 'bold'

  },


  ultimoValor: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold'

  },


 

  ultimoVazio: {

    color: '#555',

    fontSize: 16,

    fontStyle: 'italic',

    textAlign: 'center',

    marginTop: 10

  },


  /* BOTÃO LIMPAR HISTÓRICO */

  btnLimparHistorico: {

    marginTop: 15,

    height: 45,

    borderRadius: 10,

    borderWidth: 1,

    borderColor: '#ff4444',

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#2A2A35'

  },


  btnTextoHistorico: {

    color: '#ff4444',

    fontSize: 14,

    fontWeight: 'bold',

    letterSpacing: 1

  }

});


export default App;