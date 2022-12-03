import React from 'react';
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import images from './assets/img/143-berry.png'; 
import imagem2 from './assets/img/OIP.jpg';

export default function App() {
  return (
    <View style={styles.container}>
            <Image source={images} style={{ width: 500, height: 500 }} /> 

      <Text>Snorlax Berrie é um pokemon muito bom, e eu usarei ele como contexto pra fazer essa tela que não chega aos pés dele

      </Text>
      <TouchableOpacity
        onPress={() => alert('Snorlax Aprova sua visita')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Seja aprovado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>  window.location.href = "https://github.com/"}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Descubra</Text>
      </TouchableOpacity>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#521',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
