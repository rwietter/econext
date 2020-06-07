import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import * as MailComposer from 'expo-mail-composer';
import api from '../../services/api/api';
import styles from './styles';

type PointID = {
  point_id: number;
};

type PointDetail = {
  collectPoint: {
    id: number;
    image: string;
    image_url: string;
    name: string;
    city: string;
    uf: string;
    whatsapp: string;
    email: string;
  };
  itemCollect: {
    title: string;
  }[];
};

const Detail: React.FC = () => {
  const [pointDetail, setPointDetail] = useState<PointDetail>({} as PointDetail);

  const route = useRoute();
  const params = route.params as PointID;

  const navigation = useNavigation();
  function handleNavigatePoints() {
    navigation.goBack();
  }

  useEffect(() => {
    api.get(`points/${params.point_id}`).then((response) => {
      setPointDetail(response.data);
    });
  }, []);

  if (!pointDetail.collectPoint) {
    return null;
  }

  const handleSendMailComposer = () => {
    MailComposer.composeAsync({
      recipients: [pointDetail.collectPoint.email],
      subject: 'Interesse na coleta de resíduos',
      body: 'Olá, ',
    });
  };

  const handleSendWhatsappMessage = () => {
    Linking.openURL(`whatsapp://send?text='Olá,'&phone=+55${pointDetail.collectPoint.whatsapp}`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigatePoints}>
          <Icon name="arrow-left" size={32} color="#34cb79" />
        </TouchableOpacity>
        <Image style={styles.pointImage} source={{ uri: pointDetail.collectPoint.image_url }}></Image>
        <Text style={styles.pointName}>{pointDetail.collectPoint.name}</Text>
        <Text style={styles.pointItems}>{pointDetail.itemCollect.map((item) => item.title).join(', ')}</Text>
        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>
            {pointDetail.collectPoint.city}, {pointDetail.collectPoint.uf}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleSendWhatsappMessage}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleSendMailComposer}>
          <Icon name="mail" size={20} color="#FFF" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
