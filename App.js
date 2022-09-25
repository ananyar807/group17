import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <MapView style={styles.map} 
    initialRegion={{
      latitude: 42.3398,
      longitude: -71.0892,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }}
    zoomControlEnabled={true}
    zoomEnabled={true}
    scrollEnabled={true}
    zoomTapEnabled={true}/>
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
