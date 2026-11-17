
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import BarraInferior from '../components/barraInferior';

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollConteudo}
      >
        {/* CABEÇALHO */}
        <View style={styles.topo}>
          <View style={styles.logo}>
            <FontAwesome name="cube" size={32} color="#FFFFFF" />
          </View>

          <Text style={styles.nomeApp}>Meu Estoque</Text>

          <Text style={styles.subtitulo}>
            Controle seus produtos de maneira simples e organizada.
          </Text>

          <View style={styles.ilustracao}>
            <FontAwesome name="archive" size={85} color="#FFFFFF" />

            <View style={styles.iconePequeno}>
              <FontAwesome name="check" size={22} color="#2563EB" />
            </View>
          </View>
        </View>

        <View style={styles.conteudo}>
          {/* BOAS-VINDAS */}
          <View style={styles.boasVindas}>
            <Text style={styles.titulo}>
              Bem-vindo!
            </Text>

            <Text style={styles.descricao}>
              O que você deseja fazer hoje?
            </Text>
          </View>

          {/* ACESSOS RÁPIDOS */}
          <Text style={styles.tituloSecao}>
            Acessos rápidos
          </Text>

          <View style={styles.grade}>
            {/* PRODUTOS */}
            <TouchableOpacity
              style={styles.cartao}
              onPress={() => router.push('/produtos')}
              activeOpacity={0.8}
            >
              <View style={[styles.icone, { backgroundColor: '#DBEAFE' }]}>
                <FontAwesome name="cube" size={25} color="#2563EB" />
              </View>

              <Text style={styles.cartaoTitulo}>Produtos</Text>

              <Text style={styles.cartaoDescricao}>
                Consultar produtos cadastrados
              </Text>

              <FontAwesome name="arrow-right" size={16} color="#2563EB" />
            </TouchableOpacity>

            {/* CADASTRAR */}
            <TouchableOpacity
              style={styles.cartao}
              onPress={() => router.push('/cadastroProduto')}
              activeOpacity={0.8}
            >
              <View style={[styles.icone, { backgroundColor: '#DCFCE7' }]}>
                <FontAwesome name="plus-circle" size={25} color="#16A34A" />
              </View>

              <Text style={styles.cartaoTitulo}>Cadastrar</Text>

              <Text style={styles.cartaoDescricao}>
                Adicionar um novo produto
              </Text>

              <FontAwesome name="arrow-right" size={16} color="#16A34A" />
            </TouchableOpacity>

            {/* MOVIMENTAÇÕES */}
            <TouchableOpacity
              style={styles.cartao}
              onPress={() => router.push('/movimentacoes')}
              activeOpacity={0.8}
            >
              <View style={[styles.icone, { backgroundColor: '#FEF3C7' }]}>
                <FontAwesome name="exchange" size={25} color="#D97706" />
              </View>

              <Text style={styles.cartaoTitulo}>Movimentações</Text>

              <Text style={styles.cartaoDescricao}>
                Registrar entradas e saídas
              </Text>

              <FontAwesome name="arrow-right" size={16} color="#D97706" />
            </TouchableOpacity>

            {/* FORNECEDORES */}
            <TouchableOpacity
              style={styles.cartao}
              onPress={() => router.push('/fornecedores')}
              activeOpacity={0.8}
            >
              <View style={[styles.icone, { backgroundColor: '#F3E8FF' }]}>
                <FontAwesome name="truck" size={25} color="#9333EA" />
              </View>

              <Text style={styles.cartaoTitulo}>Fornecedores</Text>

              <Text style={styles.cartaoDescricao}>
                Consultar e cadastrar fornecedores
              </Text>

              <FontAwesome name="arrow-right" size={16} color="#9333EA" />
            </TouchableOpacity>
          </View>

          {/* DICA */}
          <View style={styles.aviso}>
            <FontAwesome name="lightbulb-o" size={22} color="#2563EB" />

            <View style={{ flex: 1 }}>
              <Text style={styles.avisoTitulo}>Dica</Text>

              <Text style={styles.avisoTexto}>
                Mantenha seu estoque atualizado registrando todas as entradas
                e saídas de produtos.
              </Text>
            </View>
          </View>

          <Text style={styles.rodape}>
            Meu Estoque • Controle de produtos
          </Text>
        </View>
      </ScrollView>

      {/* NAVEGAÇÃO INFERIOR */}
      <BarraInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  scrollConteudo: {
    paddingBottom: 20,
  },

  topo: {
    backgroundColor: '#2563EB',
    paddingTop: 55,
    paddingBottom: 45,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  logo: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  nomeApp: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitulo: {
    color: '#DBEAFE',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 21,
  },

  ilustracao: {
    width: 155,
    height: 125,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    position: 'relative',
  },

  iconePequeno: {
    position: 'absolute',
    right: 15,
    bottom: 12,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo: {
    padding: 22,
  },

  boasVindas: {
    marginTop: 5,
    marginBottom: 22,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#111827',
  },

  descricao: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 5,
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
  },

  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 13,
  },

  cartao: {
    width: '48%',
    minHeight: 175,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'space-between',
  },

  icone: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },

  cartaoDescricao: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 17,
    marginBottom: 12,
  },

  aviso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 13,
    backgroundColor: '#DBEAFE',
    padding: 16,
    borderRadius: 16,
    marginTop: 25,
  },

  avisoTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 4,
  },

  avisoTexto: {
    color: '#1E40AF',
    fontSize: 13,
    lineHeight: 19,
  },

  rodape: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 15,
  },
});
