import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home';
import SumadoraScreen from './src/Sumadora';
import TraductorScreen from './src/Traductor';
import TablaMultiplicarScreen from './src/TablaMultiplicar';
import ExperienciaScreen from './src/Experiencia';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sumadora" component={SumadoraScreen} />
        <Stack.Screen name="Traductor" component={TraductorScreen} />
        <Stack.Screen name="TablaMultiplicar" component={TablaMultiplicarScreen} />
        <Stack.Screen name="Experiencia" component={ExperienciaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
