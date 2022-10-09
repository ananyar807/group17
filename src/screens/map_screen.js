import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, Button } from 'react-native';

import OrangeLine from '../components/map/orange_line';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>just text</Text>
      <Text>just text2</Text>
      <Text>just text3</Text>
      <Text>just text4</Text>
      <Button
	title="button"
	onPress={() =>
	  navigation.navigate()
	}
      />
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

export default MapScreen;
