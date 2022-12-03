import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import images from './assets/img/143-berry.png'; 
import imagem2 from './assets/img/OIP.jpg';

const Home = () => (
    <View style={styles.container}>
    <Image source={imagem2} style={{ width: 500, height: 500 }} /> 
    <div className="title">
        <h4>Home</h4>
        <p>Essa é minha página criada para ajudar o snorlax a expandir.</p>
    </div>
    </View>
);

export default Home;