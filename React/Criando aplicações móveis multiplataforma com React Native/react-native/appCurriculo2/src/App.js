import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';
import Card from './components/Card/index';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert(
          'Meu Linkedin:',
          'https://www.linkedin.com/in/bruno-mundim/',
        );
        break;

      case 'github':
        Alert.alert('Meu GitHub:', 'https://github.com/BrunoMundim');
        break;

      case 'instagram':
        Alert.alert(
          'Meu Instagram:',
          'https://www.instagram.com/brunomundimgon/',
        );
        break;
    }
  }

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.container_header}>
          <Image source={foto} style={styles.photo} />
          <Text style={styles.name}>BRUNO MUNDIM</Text>
          <Text style={styles.expert}>DESENVOLVEDOR MOBILE</Text>
          <View style={styles.redesSociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Icon name="instagram" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <Card title="Experiência Profissional">
          <Text style={styles.card_content_text}>
            - Customer Service Agent Netflix
          </Text>
          <Text style={styles.card_content_text}>
            - Gerente Physalis Café e Confeitaria
          </Text>
        </Card>

        <Card title="Conhecimento técnico">
          <Text style={styles.card_content_text}>
            - HTML / CSS / JAVASCRIPT
          </Text>
          <Text style={styles.card_content_text}>- REACT / REACT NATIVE</Text>
        </Card>

        <View style={styles.app_end}>
          <Text script={styles.app_end_text}>
            Desenvolvido por Bruno Mundim
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E2E2E2',
    flex: 1,
    alignItems: 'center',
  },
  container_header: {
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
    width: '40%',
    marginTop: 20,
    marginLeft: 45,
  },
  app_end: {
    fontSize: 12,
    marginTop: 25,
  },
});

export default App;
