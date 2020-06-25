import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { DefaultTheme, Provider as paperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';
import BarraSuperior from './components/ui/BarraSuperior';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#1774F2'
  }
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: { backgroundColor: theme.colors.primary },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={({ navigation, route }) => ({
              headerTitleAlign : 'center',
              headerLeft: (props) => <BarraSuperior {...props} navigation={navigation} route={route} />,
            })}
          />
          <Stack.Screen name="NuevoCliente" component={NuevoCliente} />
          <Stack.Screen name="DetallesCliente" component={DetallesCliente} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

const styles = StyleSheet.create({});

export default App;
