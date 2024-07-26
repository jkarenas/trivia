import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Results = ({ route, navigation }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Score: {score}</Text>
      <Button
        title="Restart Quiz"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
});

export default Results;
