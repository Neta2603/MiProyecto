import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/luffy.jpg')} style={styles.image} />
      <Text style={styles.text}>Nombre: [Edward]</Text>
      <Text style={styles.text}>Apellido: [Liriano]</Text>
      <Text style={styles.text}>Correo: [Neftalilrn@gmail.com]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Home;
