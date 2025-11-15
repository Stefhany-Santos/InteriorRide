import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe TODOS os módulos de rotas
import AuthRoutes from '../modules/auth/auth.routes';
import DriverRoutes from '../modules/driver/driver.routes';
import PassengerRoutes from '../modules/passenger/passenger.routes'; // Importe o novo módulo de passageiro

const RootStack = createStackNavigator();

// Simulação de estado de autenticação
// No app real, isso viria de um Contexto (Context API) ou estado global
const isAuthenticated = true; // Mude para 'false' para testar o Auth
const userType = 'passenger'; // Mude para 'driver' ou 'passenger' para testar diferentes fluxos

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          // Usuário está logado
          userType === 'driver' ? (
            <RootStack.Screen name="Driver" component={DriverRoutes} />
          ) : userType === 'passenger' ? (
            <RootStack.Screen name="Passenger" component={PassengerRoutes} />
          ) : (
            // Fallback para um tipo de usuário desconhecido ou não tratado
            <RootStack.Screen name="Auth" component={AuthRoutes} />
          )
        ) : (
          // Usuário NÃO está logado
          <RootStack.Screen name="Auth" component={AuthRoutes} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;