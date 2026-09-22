import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    // STATE
    this.state = {
      textoFrase: 'Quebre o biscoito e descubra sua sorte!',
      urlImagem: require('./assets/biscoito.png')
    };

    
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    // FRASES
    this.frases = [

      'Grandes coisas começam com pequenos passos.',

      'Confie no processo, mesmo quando o resultado ainda não apareceu.',

      'Hoje pode ser o começo de algo incrível.',

      'Nunca desista de algo que faz seu coração acreditar.',

      'Uma boa atitude pode transformar completamente o seu dia.',

      'Você é capaz de superar desafios maiores do que imagina.',

      'O momento certo para começar é agora.',

      'Acredite mais em você e menos nos seus medos.',

      'Cada erro pode ensinar algo que o sucesso nunca ensinaria.',

      'O esforço de hoje pode ser a conquista de amanhã.',

      'Não tenha medo de tentar algo novo.',

      'Seu futuro depende das escolhas que você faz hoje.',

      'Tenha paciência. Algumas coisas precisam de tempo para acontecer.',

      'Quando uma porta se fecha, procure uma nova oportunidade.',

      'Continue caminhando, mesmo que seja devagar.',

      'Você não precisa ser perfeito para começar.',

      'A persistência transforma sonhos em realidade.',

      'Valorize as pequenas conquistas do seu dia.',

      'Um sorriso pode mudar o dia de alguém.',

      'Nunca subestime a força de uma pessoa determinada.',

      'Aprenda com o passado, viva o presente e construa o futuro.',

      'Às vezes, mudar de caminho é exatamente o que precisamos.',

      'O medo pode existir, mas não precisa controlar suas decisões.',

      'Boas oportunidades aparecem para quem está preparado.',

      'Faça hoje algo pelo qual seu futuro agradecerá.',

      'A verdadeira vitória é não desistir.',

      'Seja paciente com seu próprio crescimento.',

      'Você já superou momentos difíceis antes. Pode superar este também.',

      'A esperança pode aparecer mesmo nos dias mais difíceis.',

      'Nunca pare de aprender.',

      'Sua dedicação de hoje será sua experiência de amanhã.',

      'Nem todo atraso significa que você está no caminho errado.',

      'Tenha coragem para seguir aquilo em que acredita.',

      'Um novo começo pode acontecer a qualquer momento.',

      'Não compare sua caminhada com a de outra pessoa.',

      'O sucesso começa quando você decide continuar.',

      'Faça o melhor que puder com aquilo que você tem.',

      'A felicidade também está nas coisas simples.',

      'Seja a razão do sorriso de alguém hoje.',

      'Grandes conquistas exigem tempo, dedicação e paciência.',

      'Você está mais perto do que pensa.',

      'Nunca deixe que um dia ruim faça você acreditar que sua vida é ruim.',

      'Acredite: coisas boas ainda podem acontecer.',

      'Tenha coragem para escrever sua própria história.',

      'O conhecimento adquirido hoje será útil amanhã.',

      'Não espere motivação para começar. Comece e a motivação aparecerá.',

      'Cada dia é uma nova oportunidade para melhorar.',

      'O caminho pode ser difícil, mas a chegada pode valer a pena.',

      'Seja forte nos momentos difíceis e humilde nos momentos bons.',

      'Tudo começa quando você decide dar o primeiro passo.'

    ];

  }


  // FUNÇÃO PARA QUEBRAR O BISCOITO

  quebraBiscoito() {

    let numeroAleatorio = Math.floor(
      Math.random() * this.frases.length
    );

    this.setState({

      textoFrase:
        '"' +
        this.frases[numeroAleatorio] +
        '"',

      urlImagem:
        require('./assets/biscoitoAberto.png')

    });

  }


  // TELA

  render() {

    return (

      <View style={styles.container}>

        {/* DECORAÇÃO SUPERIOR */}

        <Text style={styles.simbolo}>
          ✦
        </Text>


        {/* TÍTULO */}

        <Text style={styles.titulo}>
          おみくじ
        </Text>

        <Text style={styles.tituloPortugues}>
          BISCOITO DA SORTE
        </Text>


        {/* LINHA DECORATIVA */}

        <View style={styles.linha} />


        {/* SUBTÍTULO */}

        <Text style={styles.subtitulo}>
          Descubra a mensagem do seu destino
        </Text>


        {/* BISCOITO */}

        <View style={styles.areaBiscoito}>

          <Image
            style={styles.img}
            source={this.state.urlImagem}
          />

        </View>


        {/* FRASE */}

        <View style={styles.caixaFrase}>

          <Text style={styles.textoFrase}>
            {this.state.textoFrase}
          </Text>

        </View>


        {/* BOTÃO */}

        <TouchableOpacity
          style={styles.botao}
          onPress={this.quebraBiscoito}
          activeOpacity={0.7}
        >

          <View style={styles.btnArea}>

            <Text style={styles.textoBotao}>
              🥠  QUEBRAR BISCOITO
            </Text>

          </View>

        </TouchableOpacity>


        {/* RODAPÉ */}

        <Text style={styles.rodape}>
          幸運を祈ります
        </Text>

        <Text style={styles.rodapePortugues}>
          Boa sorte!
        </Text>

      </View>

    );

  }

}


// ESTILOS

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f7f2e8',

    alignItems: 'center',

    justifyContent: 'center',

    padding: 20

  },


  simbolo: {

    fontSize: 25,

    color: '#d4af37',

    marginBottom: 5

  },


  titulo: {

    fontSize: 34,

    fontWeight: 'bold',

    color: '#b21f2d',

    textAlign: 'center',

    letterSpacing: 4

  },


  tituloPortugues: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#222',

    letterSpacing: 3,

    marginTop: 5

  },


  linha: {

    width: 100,

    height: 2,

    backgroundColor: '#d4af37',

    marginTop: 12,

    marginBottom: 12

  },


  subtitulo: {

    fontSize: 14,

    color: '#666',

    textAlign: 'center',

    marginBottom: 20,

    letterSpacing: 1

  },


  areaBiscoito: {

    width: 230,

    height: 230,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#fff',

    borderRadius: 115,

    borderWidth: 2,

    borderColor: '#d4af37',

    marginBottom: 15

  },


  img: {

    width: 200,

    height: 200,

    resizeMode: 'contain'

  },


  caixaFrase: {

    width: '100%',

    minHeight: 100,

    backgroundColor: '#fff',

    borderRadius: 10,

    borderWidth: 1,

    borderColor: '#d4af37',

    justifyContent: 'center',

    alignItems: 'center',

    padding: 15,

    marginBottom: 20

  },


  textoFrase: {

    fontSize: 17,

    color: '#222',

    fontStyle: 'italic',

    textAlign: 'center',

    lineHeight: 26

  },


  botao: {

    width: 240,

    height: 55,

    backgroundColor: '#b21f2d',

    borderRadius: 8,

    borderWidth: 2,

    borderColor: '#8e1824'

  },


  btnArea: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center'

  },


  textoBotao: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#fff',

    letterSpacing: 1

  },


  rodape: {

    fontSize: 16,

    color: '#b21f2d',

    marginTop: 20

  },


  rodapePortugues: {

    fontSize: 12,

    color: '#777',

    marginTop: 3

  }

});


export default App;