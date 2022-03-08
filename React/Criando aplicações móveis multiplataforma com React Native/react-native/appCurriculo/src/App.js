import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.containerHeader}>
          <Image source={foto} style={styles.photo} />
          <Text style={styles.name}>BRUNO MUNDIM</Text>
          <Text style={styles.expert}>DESENVOLVEDOR MOBILE</Text>
          <View style={styles.redesSociais}>
            <Icon name="github" size={30} />
            <Icon name="linkedin" size={30} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E2E2E2',
    flex: 1,
  },
  containerHeader: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 125,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#363636',
  },
  expert: {
    fontSize: 17,
    color: '#4682B4',
    marginVertical: 10,
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginTop: 20,
  },
});

export default App;
