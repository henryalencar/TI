
import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();




function InicioScreen({ navigation }) {

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.containerInicio}
      showsVerticalScrollIndicator={false}
    >

      <StatusBar
        barStyle="light-content"
        backgroundColor="#071426"
      />



      <View style={styles.headerInicio}>

        <View style={styles.logo}>
          <Text style={styles.logoTexto}>
            TS
          </Text>
        </View>

        <View>
          <Text style={styles.nomeEmpresa}>
            Tech Solutions
          </Text>

          <Text style={styles.slogan}>
            Tecnologia • Inovação • Soluções
          </Text>
        </View>

      </View>



      <View style={styles.banner}>

        <Image
          source={require('./assets/tecnologia.jpg')}
          style={styles.imagemBanner}
        />

    
        <View style={styles.overlay} />

        <View style={styles.conteudoBanner}>

          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>
              TECNOLOGIA PARA EMPRESAS
            </Text>
          </View>

          <Text style={styles.tituloBanner}>
            Transformamos ideias
            em soluções digitais.
          </Text>

          <Text style={styles.textoBanner}>
            Tecnologia inteligente para empresas
            que querem evoluir, inovar e crescer.
          </Text>

        </View>

      </View>




      <View style={styles.areaBotoes}>

        <Pressable
          style={({ pressed }) => [
            styles.botaoPrincipal,
            pressed && styles.botaoPressionado,
          ]}
          onPress={() => navigation.navigate('Sobre')}
        >

          <View style={styles.iconeBotao}>
            <Text style={styles.iconeTexto}>
              →
            </Text>
          </View>

          <View style={styles.textoBotaoArea}>
            <Text style={styles.textoBotaoPrincipal}>
              SOBRE A EMPRESA
            </Text>

            <Text style={styles.subtextoBotao}>
              Conheça a Tech Solutions
            </Text>
          </View>

        </Pressable>


        <Pressable
          style={({ pressed }) => [
            styles.botaoContato,
            pressed && styles.botaoPressionado,
          ]}
          onPress={() => navigation.navigate('Contato')}
        >

          <View style={styles.iconeBotaoContato}>
            <Text style={styles.iconeTextoContato}>
              ✆
            </Text>
          </View>

          <View style={styles.textoBotaoArea}>
            <Text style={styles.textoBotaoContato}>
              ENTRE EM CONTATO
            </Text>

            <Text style={styles.subtextoBotaoContato}>
              Fale com nossa equipe
            </Text>
          </View>

        </Pressable>

      </View>




      <View style={styles.secao}>

        <Text style={styles.tituloSecao}>
          Por que escolher a Tech Solutions?
        </Text>

        <Text style={styles.subtituloSecao}>
          Soluções pensadas para o crescimento do seu negócio.
        </Text>


        <View style={styles.grid}>

          

          <View style={styles.cardDestaque}>

            <View style={styles.iconeCard}>
              <Text style={styles.iconeCardTexto}>
                ⚡
              </Text>
            </View>

            <Text style={styles.tituloCard}>
              Agilidade
            </Text>

            <Text style={styles.textoCard}>
              Processos mais rápidos e soluções
              eficientes para sua empresa.
            </Text>

          </View>


       

          <View style={styles.cardDestaque}>

            <View style={styles.iconeCard}>
              <Text style={styles.iconeCardTexto}>
                💡
              </Text>
            </View>

            <Text style={styles.tituloCard}>
              Inovação
            </Text>

            <Text style={styles.textoCard}>
              Utilizamos tecnologia para criar
              novas possibilidades.
            </Text>

          </View>



          <View style={styles.cardDestaque}>

            <View style={styles.iconeCard}>
              <Text style={styles.iconeCardTexto}>
                🔒
              </Text>
            </View>

            <Text style={styles.tituloCard}>
              Segurança
            </Text>

            <Text style={styles.textoCard}>
              Soluções desenvolvidas pensando
              na segurança do seu negócio.
            </Text>

          </View>


          {/* CARD 4 */}

          <View style={styles.cardDestaque}>

            <View style={styles.iconeCard}>
              <Text style={styles.iconeCardTexto}>
                🚀
              </Text>
            </View>

            <Text style={styles.tituloCard}>
              Crescimento
            </Text>

            <Text style={styles.textoCard}>
              Tecnologia preparada para acompanhar
              a evolução da sua empresa.
            </Text>

          </View>

        </View>

      </View>




      <View style={styles.footer}>

        <View style={styles.footerLogo}>
          <Text style={styles.footerLogoTexto}>
            TS
          </Text>
        </View>

        <Text style={styles.footerEmpresa}>
          Tech Solutions
        </Text>

        <Text style={styles.footerTexto}>
          Soluções em tecnologia para empresas.
        </Text>

        <View style={styles.linhaFooter} />

        <Text style={styles.copyright}>
          © 2026 Tech Solutions
        </Text>

      </View>

    </ScrollView>
  );
}



function SobreScreen({ navigation }) {

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.containerPagina}
      showsVerticalScrollIndicator={false}
    >

      <StatusBar
        barStyle="light-content"
        backgroundColor="#071426"
      />


     
      <View style={styles.topoPagina}>

        <View style={styles.logoPagina}>
          <Text style={styles.logoTexto}>
            TS
          </Text>
        </View>

        <Text style={styles.tituloPagina}>
          Sobre a empresa
        </Text>

        <Text style={styles.subtituloPagina}>
          Conheça a Tech Solutions
        </Text>

      </View>


   

      <View style={styles.cardPagina}>

        <Text style={styles.tituloCardPagina}>
          Quem somos?
        </Text>

        <Text style={styles.textoPagina}>
          A Tech Solutions é uma empresa especializada
          em soluções de tecnologia para empresas.
        </Text>

        <Text style={styles.textoPagina}>
          Nosso objetivo é utilizar a tecnologia para
          facilitar processos, melhorar resultados e
          criar experiências digitais modernas.
        </Text>

      </View>


  

      <View style={styles.cardMissao}>

        <View style={styles.iconeMissao}>
          <Text style={styles.iconeMissaoTexto}>
            ★
          </Text>
        </View>

        <View style={styles.conteudoMissao}>

          <Text style={styles.tituloMissao}>
            Nossa missão
          </Text>

          <Text style={styles.textoMissao}>
            Desenvolver soluções tecnológicas que
            contribuam para o crescimento e a evolução
            das empresas.
          </Text>

        </View>

      </View>


   

      <View style={styles.cardPagina}>

        <Text style={styles.tituloCardPagina}>
          Nossos serviços
        </Text>


        <View style={styles.servico}>

          <Text style={styles.check}>
            ✓
          </Text>

          <Text style={styles.servicoTexto}>
            Desenvolvimento de sistemas
          </Text>

        </View>


        <View style={styles.servico}>

          <Text style={styles.check}>
            ✓
          </Text>

          <Text style={styles.servicoTexto}>
            Desenvolvimento de aplicativos
          </Text>

        </View>


        <View style={styles.servico}>

          <Text style={styles.check}>
            ✓
          </Text>

          <Text style={styles.servicoTexto}>
            Soluções digitais para empresas
          </Text>

        </View>


        <View style={styles.servico}>

          <Text style={styles.check}>
            ✓
          </Text>

          <Text style={styles.servicoTexto}>
            Suporte e tecnologia
          </Text>

        </View>

      </View>


   

      <Pressable
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.textoBotaoVoltar}>
          VOLTAR
        </Text>

      </Pressable>

    </ScrollView>
  );
}




function ContatoScreen({ navigation }) {

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.containerPagina}
      showsVerticalScrollIndicator={false}
    >

      <StatusBar
        barStyle="light-content"
        backgroundColor="#071426"
      />


      

      <View style={styles.topoPagina}>

        <View style={styles.logoPagina}>
          <Text style={styles.logoTexto}>
            TS
          </Text>
        </View>

        <Text style={styles.tituloPagina}>
          Entre em contato
        </Text>

        <Text style={styles.subtituloPagina}>
          Estamos prontos para ajudar sua empresa.
        </Text>

      </View>


    

      <View style={styles.cardContato}>

        <View style={styles.iconeContato}>
          <Text style={styles.iconeContatoTexto}>
            @
          </Text>
        </View>

        <View style={styles.conteudoContato}>

          <Text style={styles.tituloContato}>
            E-mail
          </Text>

          <Text style={styles.textoContato}>
            contato@techsolutions.com
          </Text>

        </View>

      </View>




      <View style={styles.cardContato}>

        <View style={styles.iconeContato}>
          <Text style={styles.iconeContatoTexto}>
            ☎
          </Text>
        </View>

        <View style={styles.conteudoContato}>

          <Text style={styles.tituloContato}>
            Telefone
          </Text>

          <Text style={styles.textoContato}>
            (13) 99999-9999
          </Text>

        </View>

      </View>



      <View style={styles.cardContato}>

        <View style={styles.iconeContato}>
          <Text style={styles.iconeContatoTexto}>
            ●
          </Text>
        </View>

        <View style={styles.conteudoContato}>

          <Text style={styles.tituloContato}>
            Localização
          </Text>

          <Text style={styles.textoContato}>
            Santos - São Paulo
          </Text>

        </View>

      </View>




      <View style={styles.cardContato}>

        <View style={styles.iconeContato}>
          <Text style={styles.iconeContatoTexto}>
            ◷
          </Text>
        </View>

        <View style={styles.conteudoContato}>

          <Text style={styles.tituloContato}>
            Atendimento
          </Text>

          <Text style={styles.textoContato}>
            Segunda a sexta, das 08h às 18h
          </Text>

        </View>

      </View>


      <Pressable
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.textoBotaoVoltar}>
          VOLTAR
        </Text>

      </Pressable>

    </ScrollView>
  );
}




export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#071426',
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: '800',
          },

          headerShadowVisible: false,
        }}
      >

        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: 'Tech Solutions',
          }}
        />

        <Stack.Screen
          name="Sobre"
          component={SobreScreen}
          options={{
            title: 'Sobre',
          }}
        />

        <Stack.Screen
          name="Contato"
          component={ContatoScreen}
          options={{
            title: 'Contato',
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}



const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },




  containerInicio: {
    padding: 20,
    paddingBottom: 0,
  },

  headerInicio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 22,
  },

  logo: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  logoTexto: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
  },

  nomeEmpresa: {
    color: '#0F172A',
    fontSize: 21,
    fontWeight: '900',
  },

  slogan: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 3,
  },



  banner: {
    height: 370,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#071426',
    marginBottom: 22,

    elevation: 7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },

  imagemBanner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(3, 12, 28, 0.67)',
  },

  conteudoBanner: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(37, 99, 235, 0.90)',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 13,
  },

  badgeTexto: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },

  tituloBanner: {
    color: '#FFFFFF',
    fontSize: 31,
    lineHeight: 36,
    fontWeight: '900',
    marginBottom: 12,
  },

  textoBanner: {
    color: '#D7E2F0',
    fontSize: 14,
    lineHeight: 21,
    maxWidth: 320,
  },




  areaBotoes: {
    marginBottom: 28,
  },

  botaoPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 15,
    padding: 15,
    marginBottom: 11,

    elevation: 4,

    shadowColor: '#2563EB',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
  },

  botaoContato: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 14,
    borderWidth: 1,
    borderColor: '#DCE5F2',
  },

  botaoPressionado: {
    opacity: 0.75,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  iconeBotao: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  iconeTexto: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  iconeBotaoContato: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#E8F0FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  iconeTextoContato: {
    color: '#2563EB',
    fontSize: 23,
    fontWeight: 'bold',
  },

  textoBotaoArea: {
    flex: 1,
  },

  textoBotaoPrincipal: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  subtextoBotao: {
    color: '#DCE8FF',
    fontSize: 11,
    marginTop: 3,
  },

  textoBotaoContato: {
    color: '#0F172A',
    fontSize: 13,
    fontWeight: '900',
  },

  subtextoBotaoContato: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 3,
  },




  secao: {
    marginBottom: 25,
  },

  tituloSecao: {
    color: '#0F172A',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 7,
  },

  subtituloSecao: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 17,
  },

  grid: {
    gap: 12,
  },

  cardDestaque: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E8EDF4',
  },

  iconeCard: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#EAF1FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  iconeCardTexto: {
    fontSize: 21,
  },

  tituloCard: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 6,
  },

  textoCard: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 19,
  },



  footer: {
    backgroundColor: '#071426',
    marginTop: 5,
    marginHorizontal: -20,
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems: 'center',
  },

  footerLogo: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  footerLogoTexto: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 17,
  },

  footerEmpresa: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

  footerTexto: {
    color: '#8FA3BD',
    fontSize: 12,
    marginTop: 5,
  },

  linhaFooter: {
    height: 1,
    width: '80%',
    backgroundColor: '#1D3049',
    marginVertical: 18,
  },

  copyright: {
    color: '#64748B',
    fontSize: 11,
  },




  containerPagina: {
    padding: 20,
    paddingBottom: 35,
  },

  topoPagina: {
    alignItems: 'center',
    backgroundColor: '#071426',
    marginHorizontal: -20,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 30,
    marginBottom: 20,
  },

  logoPagina: {
    width: 58,
    height: 58,
    borderRadius: 17,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },

  tituloPagina: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
  },

  subtituloPagina: {
    color: '#9EB0C5',
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
  },



  cardPagina: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E7ECF3',
  },

  tituloCardPagina: {
    color: '#0F172A',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 12,
  },

  textoPagina: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 9,
  },

  cardMissao: {
    flexDirection: 'row',
    backgroundColor: '#EFF6FF',
    borderRadius: 17,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#D7E8FF',
  },

  iconeMissao: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  iconeMissaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  conteudoMissao: {
    flex: 1,
  },

  tituloMissao: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 5,
  },

  textoMissao: {
    color: '#52657D',
    fontSize: 13,
    lineHeight: 19,
  },

  servico: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },

  check: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#E8F1FF',
    color: '#2563EB',
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: '900',
    marginRight: 10,
  },

  servicoTexto: {
    flex: 1,
    color: '#475569',
    fontSize: 14,
  },



  cardContato: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E7ECF3',
  },

  iconeContato: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EAF1FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  iconeContatoTexto: {
    color: '#2563EB',
    fontSize: 20,
    fontWeight: '900',
  },

  conteudoContato: {
    flex: 1,
  },

  tituloContato: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 4,
  },

  textoContato: {
    color: '#64748B',
    fontSize: 13,
  },




  botaoVoltar: {
    backgroundColor: '#0F172A',
    borderRadius: 13,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBotaoVoltar: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

});