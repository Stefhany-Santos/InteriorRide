import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importe as telas do módulo de autenticação de suas novas localizações
import LoginScreen from './screens/LoginScreen';
import RegisterDriverStep1Screen from './screens/RegisterDriverStep1Screen';
import RegisterDriverStep2Screen from './screens/RegisterDriverStep2Screen';
import RegisterDriverStep3Screen from './screens/RegisterDriverStep3Screen';
import UnderReviewScreen from './screens/UnderReviewScreen';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="RegisterDriverStep1" component={RegisterDriverStep1Screen} />
      <AuthStack.Screen name="RegisterDriverStep2" component={RegisterDriverStep2Screen} />
      <AuthStack.Screen name="RegisterDriverStep3" component={RegisterDriverStep3Screen} />
      <AuthStack.Screen name="UnderReview" component={UnderReviewScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;