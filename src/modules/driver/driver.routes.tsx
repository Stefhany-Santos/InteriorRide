import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Verifique se 'lucide-react-native' é o pacote correto para seus ícones
import { Home, BarChart2, User } from 'lucide-react-native';

// Importe as telas do módulo driver de suas novas localizações
import DriverHomeScreen from './screens/DriverHomeScreen';
import EarningsScreen from './screens/EarningsScreen';
import DriverProfileScreen from './screens/DriverProfileScreen';
import RideAcceptanceScreen from './screens/RideAcceptanceScreen';
import NavigationScreen from './screens/NavigationScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Cor primária para os ícones ativos
const ACTIVE_COLOR = '#4CAF50'; // Nosso verde
const INACTIVE_COLOR = '#888';

// 1. Crie o Navegador de Abas (Bottom Tab Navigator)
function DriverTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: {
          // Adicione estilos para a barra de abas aqui, se necessário
          // backgroundColor: '#fff',
          // borderTopWidth: 0,
          // elevation: 0,
        },
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Início') {
            return <Home color={color} size={size} />;
          } else if (route.name === 'Ganhos') {
            return <BarChart2 color={color} size={size} />;
          } else if (route.name === 'Perfil') {
            return <User color={color} size={size} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Início" component={DriverHomeScreen} />
      <Tab.Screen name="Ganhos" component={EarningsScreen} />
      <Tab.Screen name="Perfil" component={DriverProfileScreen} />
    </Tab.Navigator>
  );
}

// 2. Crie o Navegador de Stack (Stack Navigator)
// Isso permite que a tela de Aceitar Corrida abra "por cima" das abas
function DriverRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainTabs"
        component={DriverTabRoutes} // O Tab Navigator é a tela principal
      />
      <Stack.Screen
        name="RideAcceptance"
        component={RideAcceptanceScreen}
        options={{ presentation: 'modal' }} // Abre como um modal
      />
      <Stack.Screen
        name="Navigation"
        component={NavigationScreen}
        options={{ presentation: 'fullScreenModal' }} // Abre em tela cheia
      />
    </Stack.Navigator>
  );
}

export default DriverRoutes;