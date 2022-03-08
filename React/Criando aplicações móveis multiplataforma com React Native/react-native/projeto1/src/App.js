import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(100);

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 100);

    setNumero(novo_numero);
  }

  return (
    <>
      <SafeAreaView style={style.container}>
        <Text style={style.titulo}>Gerador de números</Text>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity style={style.botao} onPress={handleNumero}>
          <Text>Gerar Número</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#11AAFF',
    fontSize: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 55,
    color: '#FFF',
    fontWeight: 'bold',
    paddingBottom: 13,
  },
  botao: {
    backgroundColor: '#FFF',
    width: '70%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 12,
  },
  titulo: {
    fontSize: 40,
    paddingBottom: 10,
    color: '#FFF',
  },
});

export default App;
