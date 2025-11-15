import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Assumindo React Native

const RequestRideScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar Corrida</Text>
      <Text style={styles.subtitle}>Aqui você poderá pedir sua viagem.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default RequestRideScreen;