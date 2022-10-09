import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from './src/screens/map_screen';

import { StyleSheet, View, Dimensions, Text, Button } from 'react-native';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'Welcome',}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
