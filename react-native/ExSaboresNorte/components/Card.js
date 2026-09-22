import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';


class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };

    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }


  abrirModal() {
    this.setState({
      modalVisible: true
    });
  }


  fecharModal() {
    this.setState({
      modalVisible: false
    });
  }


  render() {

    return (

      <View>

        {/* CARD */}

        <TouchableOpacity
          style={styles.card}
          onPress={this.abrirModal}
        >

          <Image
            source={this.props.imagem}
            style={styles.imagem}
          />

          <View style={styles.informacoes}>

            <Text style={styles.nome}>
              {this.props.nome}
            </Text>

            <Text style={styles.regiao}>
               {this.props.regiao}
            </Text>

            <Text
              style={styles.descricao}
              numberOfLines={3}
            >
              {this.props.descricao}
            </Text>

          </View>

        </TouchableOpacity>


        

        <Modal
          transparent={true}
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={this.fecharModal}
        >

          <View style={styles.fundoModal}>

            <View style={styles.modal}>

              

              <Image
                source={this.props.imagem}
                style={styles.imagemModal}
              />


            

              <Text style={styles.nomeModal}>
                {this.props.nome}
              </Text>


              

              <Text style={styles.regiaoModal}>
                {this.props.regiao}
              </Text>


              

              <Text style={styles.descricaoModal}>
                {this.props.descricao}
              </Text>


              

              <TouchableOpacity
                style={styles.botaoFechar}
                onPress={this.fecharModal}
              >

                <Text style={styles.textoBotao}>
                  FECHAR
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

      </View>

    );
  }
}


const styles = StyleSheet.create({

  /* CARD */

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 18,
    padding: 12,
    flexDirection: 'row',

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },

    shadowOpacity: 0.15,
    shadowRadius: 5
  },


  imagem: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginRight: 15
  },


  informacoes: {
    flex: 1,
    justifyContent: 'center'
  },


  nome: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 5
  },


  regiao: {
    fontSize: 13,
    color: '#d97706',
    fontWeight: 'bold',
    marginBottom: 7
  },


  descricao: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18
  },


  /* FUNDO DO MODAL */

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },


  /* MODAL */

  modal: {
    width: '100%',
    backgroundColor: '#fff8e7',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 10
  },


  imagemModal: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 15
  },


  nomeModal: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 8
  },


  regiaoModal: {
    fontSize: 16,
    color: '#d97706',
    fontWeight: 'bold',
    marginBottom: 15
  },


  descricaoModal: {
    fontSize: 16,
    color: '#555',
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 20
  },


  /* BOTÃO */

  botaoFechar: {
    width: '80%',
    height: 50,
    backgroundColor: '#166534',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },


  textoBotao: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1
  }

});


export default Card;