import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handlePointNavigation() {
    navigation.navigate('Points', { uf, city });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        imageStyle={{ width: 274, height: 368 }}
        source={require('../../assets/home-background.png')}
        style={styles.container}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
          <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
        </View>
        <View style={styles.footer}>
          <TextInput
            value={uf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            onChangeText={(uf) => setUf(uf)}
            style={styles.input}
            placeholder="Digite a UF"
          />
          <TextInput
            value={city}
            onChangeText={(city) => setCity(city)}
            style={styles.input}
            autoCorrect={false}
            placeholder="Digite a cidade"
          />
          <RectButton style={styles.button} onPress={handlePointNavigation}>
            <View style={styles.buttonIcon}>
              <Icon size={24} name="arrow-right" color="#FFF" />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;
