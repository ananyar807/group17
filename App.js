import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

export default function App() {
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
      <Polyline
		    coordinates={[
			  { latitude: 42.3315395702194, longitude: -71.09552322057385 },
			  { latitude: 42.33736939902165, longitude: -71.08927307004777 },
			  { latitude: 42.34171690092204, longitude: -71.08340618309798 },
			  { latitude: 42.34761115398272, longitude:  -71.07565245818402 },
		]}
		strokeColor="#000"
		strokeWidth={6}
	/>
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
