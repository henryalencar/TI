import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import FormularioAbastecimento from './components/FormularioAbastecimento';
import AbastecimentoCard from './components/AbastecimentoCard';
import Resumo from './components/Resumo';


export default function App() {

  const [abastecimentos, setAbastecimentos] = useState([]);


  function cadastrarAbastecimento(novoAbastecimento) {

    const abastecimento = {
      id: Date.now().toString(),
      data: novoAbastecimento.data,
      quilometragem: novoAbastecimento.quilometragem,
      valor: novoAbastecimento.valor,
    };


    setAbastecimentos((listaAtual) => [
      abastecimento,
      ...listaAtual
    ]);

  }


  const totalGasto = abastecimentos.reduce(
    (total, abastecimento) => {
      return total + abastecimento.valor;
    },
    0
  );


  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#111827"
      />


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >

        <Header />


        <View style={styles.corpo}>

          <FormularioAbastecimento
            cadastrarAbastecimento={cadastrarAbastecimento}
          />


          <Resumo
            quantidade={abastecimentos.length}
            total={totalGasto}
          />


          <View style={styles.historico}>

            <View style={styles.tituloArea}>

              <View>

                <Text style={styles.tituloHistorico}>
                  Histórico
                </Text>

                <Text style={styles.subtituloHistorico}>
                  Seus abastecimentos recentes
                </Text>

              </View>


              <View style={styles.badge}>

                <Text style={styles.badgeTexto}>
                  {abastecimentos.length}
                </Text>

              </View>

            </View>


            {abastecimentos.length === 0 ? (

              <View style={styles.vazio}>

                <View style={styles.iconeVazio}>
                  <Text style={styles.iconeVazioTexto}>
                    ⛽
                  </Text>
                </View>

                <Text style={styles.tituloVazio}>
                  Nenhum registro ainda
                </Text>

                <Text style={styles.textoVazio}>
                  Cadastre seu primeiro abastecimento
                  para acompanhar seus gastos.
                </Text>

              </View>

            ) : (

              abastecimentos.map((abastecimento) => (

                <AbastecimentoCard
                  key={abastecimento.id}
                  abastecimento={abastecimento}
                />

              ))

            )}

          </View>


          <View style={styles.totalCard}>

            <View style={styles.totalCabecalho}>

              <Text style={styles.totalTitulo}>
                Total gasto
              </Text>

              <View style={styles.totalIcone}>
                <Text>R$</Text>
              </View>

            </View>


            <Text style={styles.totalValor}>

              {totalGasto.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}

            </Text>


            <View style={styles.totalLinha} />


            <View style={styles.totalRodape}>

              <Text style={styles.totalDescricao}>
                Combustível
              </Text>

              <Text style={styles.totalQuantidade}>
                {abastecimentos.length}{' '}
                {abastecimentos.length === 1
                  ? 'abastecimento'
                  : 'abastecimentos'}
              </Text>

            </View>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },

  conteudo: {
    paddingBottom: 40,
  },

  corpo: {
    paddingTop: 2,
  },


  // HISTÓRICO

  historico: {
    marginHorizontal: 18,
    marginTop: 28,
  },

  tituloArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  tituloHistorico: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
  },

  subtituloHistorico: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 3,
  },

  badge: {
    minWidth: 34,
    height: 34,
    paddingHorizontal: 9,
    borderRadius: 17,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeTexto: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '800',
  },


  // VAZIO

  vazio: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  iconeVazio: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },

  iconeVazioTexto: {
    fontSize: 27,
  },

  tituloVazio: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },

  textoVazio: {
    color: '#9ca3af',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 6,
  },


  // TOTAL

  totalCard: {
    marginHorizontal: 18,
    marginTop: 22,
    backgroundColor: '#111827',
    borderRadius: 22,
    padding: 21,
  },

  totalCabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalTitulo: {
    color: '#9ca3af',
    fontSize: 13,
    fontWeight: '700',
  },

  totalIcone: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
  },

  totalIcone: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
  },

  totalValor: {
    color: '#ffffff',
    fontSize: 31,
    fontWeight: '900',
    marginTop: 12,
  },

  totalLinha: {
    height: 1,
    backgroundColor: '#374151',
    marginVertical: 16,
  },

  totalRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalDescricao: {
    color: '#9ca3af',
    fontSize: 12,
  },

  totalQuantidade: {
    color: '#d1d5db',
    fontSize: 12,
    fontWeight: '700',
  },

});