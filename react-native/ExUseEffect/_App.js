
import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

export default function App() {
  const [senha, setSenha] = useState("");
  const [forca, setForca] = useState("0");

  useEffect(() => {
    if (senha === "") {
      setForca("0");
    } else if (senha.length < 4) {
      setForca("Fraca");
    } else if (senha.length < 8) {
      setForca("Média");
    } else {
      setForca("Forte");
    }
  }, [senha]);

  const corForca =
    forca === "Fraca"
      ? "#EF4444"
      : forca === "Média"
      ? "#F59E0B"
      : forca === "Forte"
      ? "#22C55E"
      : "#64748B";

  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🔐</Text>

      <Text style={styles.titulo}>
        Verificador de Senha
      </Text>

      <Text style={styles.subtitulo}>
        Digite uma senha para verificar sua força.
      </Text>

      <Text style={styles.label}>Senha:</Text>

      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholder="Digite sua senha"
        placeholderTextColor="#94A3B8"
        autoCapitalize="none"
      />

      <View style={styles.resultado}>
        <Text style={styles.textoResultado}>
          Força da senha
        </Text>

        <Text style={[styles.forca, { color: corForca }]}>
          {forca}
        </Text>

        <View style={styles.barraFundo}>
          <View
            style={[
              styles.barra,
              {
                width:
                  forca === "Fraca"
                    ? "33%"
                    : forca === "Média"
                    ? "66%"
                    : forca === "Forte"
                    ? "100%"
                    : "0%",
                backgroundColor: corForca,
              },
            ]}
          />
        </View>

        <Text style={styles.dica}>
          {senha === ""
            ? "Aguardando senha..."
            : forca === "Fraca"
            ? "Use pelo menos 4 caracteres."
            : forca === "Média"
            ? "Adicione mais caracteres para melhorar."
            : "Sua senha tem 8 caracteres ou mais."}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    padding: 24,
  },
  icone: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 12,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#172554",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#334155",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    padding: 16,
    fontSize: 17,
    color: "#0F172A",
  },
  resultado: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 16,
    marginTop: 24,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  textoResultado: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
  },
  forca: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12,
  },
  barraFundo: {
    height: 10,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    overflow: "hidden",
  },
  barra: {
    height: "100%",
    borderRadius: 10,
  },
  dica: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 16,
  },
});
