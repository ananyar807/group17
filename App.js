import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import OrangeLine from './src/components/map/orange_line';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView
	style={styles.map}
	initialRegion={{
	  latitude: 42.3398,
	  longitude: -71.0892,
	  latitudeDelta: 0.05,
	  longitudeDelta: 0.05
	}}
	zoomControlEnabled={true}
	zoomEnabled={true}
	scrollEnabled={true}
	zoomTapEnabled={true} >
	<Marker coordinate={{latitude: 42.3315395702194,longitude: -71.09552322057385}} />
	<OrangeLine/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MyStack;
