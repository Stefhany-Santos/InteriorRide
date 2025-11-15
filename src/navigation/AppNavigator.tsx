import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe as rotas do módulo de autenticação
import AuthRoutes from '../modules/auth/auth.routes';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Por enquanto, renderizamos apenas as rotas de autenticação */}
        <RootStack.Screen name="Auth" component={AuthRoutes} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;