import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../NombreDeTuProyecto/src/Components/Welcome';
import Questions from '../NombreDeTuProyecto/src/Components/Questions';
import Results from '../NombreDeTuProyecto/src/Components/Results';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
