import React, { useEffect, useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Alert, Image, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';

import api from '../../services/api/api';

import styles from './styles';

type Items = {
  id: number;
  image_url: string;
  title: string;
};

type collectPoints = {
  id: number;
  name: string;
  image: string;
  latitude: number;
  longitude: number;
};

type HomeInput = {
  uf: string;
  city: string;
};

function Point() {
  const [items, setItems] = useState<Items[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [points, setPoints] = useState<collectPoints[]>([]);

  const [actualLocation, setActualLocation] = useState<[number, number]>([0, 0]);

  const navigation = useNavigation();
  const routes = useRoute();
  const params = routes.params as HomeInput;
  const { uf, city } = params;

  useEffect(() => {
    api.get('/items').then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Olá ?!', 'Para acessar os itens precisamos da sua localização, tudo bem?!');
        return;
      }
      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      const { latitude, longitude } = location.coords;
      setActualLocation([latitude, longitude]);
    }
    loadPosition();
  }, []);

  useEffect(() => {
    api
      .get('points', {
        params: {
          city: city,
          uf: uf,
          items: selectedItems,
        },
      })
      .then((response) => {
        setPoints(response.data.collectPoints);
      });
  }, [selectedItems]);

  function handleSelectItems(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filtredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filtredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function handleNavigateHome() {
    navigation.goBack();
  }

  function handleNavigateDetail(id: number) {
    navigation.navigate('Detail', { point_id: id });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateHome}>
          <Icon name="arrow-left" size={32} color="#34cb79" />
        </TouchableOpacity>
        <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>
        <View style={styles.mapContainer}>
          {actualLocation[1] !== 0 && (
            <MapView
              loadingEnabled={true}
              style={styles.map}
              initialRegion={{
                latitude: actualLocation[0],
                longitude: actualLocation[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map(({ id, image, latitude, longitude, name }) => (
                <Marker
                  key={String(id)}
                  style={styles.mapMarker}
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                  onPress={() => handleNavigateDetail(id)}
                >
                  <View style={styles.mapMarkerContainer}>
                    <Image style={styles.mapMarkerImage} source={{ uri: image }}></Image>
                    <Text style={styles.mapMarkerTitle}>{name}</Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          )}
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 20 }} showsHorizontalScrollIndicator={false}>
          {items.map((item) => (
            <TouchableOpacity
              key={String(item.id)}
              onPress={() => handleSelectItems(item.id)}
              activeOpacity={0.6}
              style={[styles.item, selectedItems.includes(item.id) ? styles.selectedItem : {}]}
            >
              <SvgUri uri={item.image_url} width={42} height={42} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Point;
