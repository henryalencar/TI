import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
} from 'react-native';

export default function ModalLocal({
  localSelecionado,
  fecharModal,
}) {
  return (
    <Modal
      visible={localSelecionado !== null}
      transparent={true}
      animationType="slide"
      onRequestClose={fecharModal}
    >

      <View style={styles.modalFundo}>

        <View style={styles.modalCard}>

          {localSelecionado && (
            <>

              <Image
                source={localSelecionado.imagem}
                style={styles.imagemLocal}
                resizeMode="cover"
              />

              <View style={styles.conteudoModal}>

                <Text style={styles.nomeLocal}>
                  {localSelecionado.nome}
                </Text>

                <Text style={styles.descricaoLocal}>
                  {localSelecionado.descricao}
                </Text>

                <Pressable
                  style={styles.botaoFechar}
                  onPress={fecharModal}
                >
                  <Text style={styles.textoFechar}>
                    Fechar
                  </Text>
                </Pressable>

              </View>

            </>
          )}

        </View>

      </View>

    </Modal>
  );
}

const styles = StyleSheet.create({

  modalFundo: {
    flex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.55)',

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },

  modalCard: {
    width: '100%',

    backgroundColor: '#ffffff',

    borderRadius: 20,

    overflow: 'hidden',

    elevation: 10,
  },

  imagemLocal: {
    width: '100%',
    height: 220,
  },

  conteudoModal: {
    padding: 20,
  },

  nomeLocal: {
    fontSize: 22,
    fontWeight: '900',

    color: '#111827',

    marginBottom: 8,
  },

  descricaoLocal: {
    fontSize: 14,

    lineHeight: 21,

    color: '#6b7280',

    marginBottom: 20,
  },

  botaoFechar: {
    height: 45,

    backgroundColor: '#2563eb',

    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  textoFechar: {
    color: '#ffffff',

    fontSize: 14,

    fontWeight: '800',
  },

});