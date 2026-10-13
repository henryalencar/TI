
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';

export default function App() {
  const [bateria, setBateria] = useState(75);
  const [mensagem, setMensagem] = useState(
    'Bateria em nível adequado.'
  );

  useEffect(() => {
    if (bateria <= 20) {
      setMensagem('Bateria crítica! Conecte o carregador.');
    } else if (bateria <= 50) {
      setMensagem('Bateria baixa. Economize energia.');
    } else if (bateria <= 80) {
      setMensagem('Bateria em nível adequado.');
    } else {
      setMensagem('Bateria carregada.');
    }
  }, [bateria]);

  function aumentarBateria() {
    setBateria((valorAtual) => Math.min(valorAtual + 10, 100));
  }

  function diminuirBateria() {
    setBateria((valorAtual) => Math.max(valorAtual - 10, 0));
  }

  const corBateria =
    bateria <= 20
      ? '#EF4444'
      : bateria <= 50
      ? '#F59E0B'
      : bateria <= 80
      ? '#22C55E'
      : '#16A34A';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#101827" />

      <View style={styles.header}>
        <Text style={styles.icone}>🔋</Text>
        <Text style={styles.titulo}>Monitor de Bateria</Text>
        <Text style={styles.subtitulo}>
          Acompanhe o nível de energia
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.rotulo}>NÍVEL DA BATERIA</Text>

        <Text style={[styles.porcentagem, { color: corBateria }]}>
          {bateria}%
        </Text>

        <View style={styles.barraFundo}>
          <View
            style={[
              styles.barraPreenchida,
              {
                width: `${bateria}%`,
                backgroundColor: corBateria,
              },
            ]}
          />
        </View>

        <View style={styles.status}>
          <View
            style={[styles.indicador, { backgroundColor: corBateria }]}
          />
          <Text style={styles.mensagem}>{mensagem}</Text>
        </View>

        <View style={styles.botoes}>
          <Pressable
            onPress={diminuirBateria}
            disabled={bateria === 0}
            style={({ pressed }) => [
              styles.botao,
              styles.botaoDiminuir,
              (pressed || bateria === 0) && styles.botaoDesativado,
            ]}
          >
            <Text style={styles.simbolo}>−</Text>
            <Text style={styles.textoBotao}>Diminuir</Text>
            <Text style={styles.detalheBotao}>10 pontos</Text>
          </Pressable>

          <Pressable
            onPress={aumentarBateria}
            disabled={bateria === 100}
            style={({ pressed }) => [
              styles.botao,
              styles.botaoAumentar,
              (pressed || bateria === 100) && styles.botaoDesativado,
            ]}
          >
            <Text style={styles.simbolo}>+</Text>
            <Text style={styles.textoBotao}>Aumentar</Text>
            <Text style={styles.detalheBotao}>10 pontos</Text>
          </Pressable>
        </View>

        <Text style={styles.rodape}>
          Simulação de bateria • {bateria === 0
            ? 'Nível mínimo atingido'
            : bateria === 100
            ? 'Nível máximo atingido'
            : 'Ajuste usando os botões'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101827',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  icone: {
    fontSize: 48,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#AAB4C5',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  rotulo: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  porcentagem: {
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
  },
  barraFundo: {
    height: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barraPreenchida: {
    height: '100%',
    borderRadius: 10,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 28,
    gap: 9,
  },
  indicador: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  mensagem: {
    flex: 1,
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  botoes: {
    flexDirection: 'row',
    gap: 12,
  },
  botao: {
    flex: 1,
    minHeight: 112,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDiminuir: {
    backgroundColor: '#FFF1F2',
    borderWidth: 1,
    borderColor: '#FECDD3',
  },
  botaoAumentar: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  simbolo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  textoBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 3,
  },
  detalheBotao: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 4,
  },
  botaoDesativado: {
    opacity: 0.45,
  },
  rodape: {
    fontSize: 11,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 24,
  },
});
