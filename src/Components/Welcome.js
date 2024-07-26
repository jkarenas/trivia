import React from 'react';
import { View, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

// Obtén las dimensiones de la ventana
const { width, height } = Dimensions.get('window');

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../Images/portada.jpeg')}
      style={styles.container}
      resizeMode='cover'
    >
      <View style={styles.buttonContainer}>
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate('Questions')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Usar flex: 1 para asegurarse de que el ImageBackground cubra toda la pantalla
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonContainer: {
    // Ajusta el estilo del contenedor del botón si es necesario
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Welcome;
