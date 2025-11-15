import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importe as telas do módulo passageiro de suas novas localizações
import PassengerHomeScreen from './screens/PassengerHomeScreen';
import RequestRideScreen from './screens/RequestRideScreen';

const PassengerStack = createStackNavigator();

const PassengerRoutes = () => {
  return (
    <PassengerStack.Navigator screenOptions={{ headerShown: false }}>
      <PassengerStack.Screen name="PassengerHome" component={PassengerHomeScreen} />
      <PassengerStack.Screen name="RequestRide" component={RequestRideScreen} />
      {/* Adicione outras telas do passageiro aqui conforme forem criadas */}
    </PassengerStack.Navigator>
  );
};

export default PassengerRoutes;