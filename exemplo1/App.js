import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import imagem from './assets/img'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Snorlax Berrie</Text>
      <image 
      source= './assets/img'
    
      

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
