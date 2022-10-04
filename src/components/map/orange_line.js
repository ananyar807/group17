import { Polyline } from 'react-native-maps';

export default function OrangeLine() {
  return (
      <Polyline
		    coordinates={[
			  { latitude: 42.30067634977404, longitude: -71.11422497573932},
			  { latitude: 42.31052867289333, longitude: -71.10753374194307},
			  { latitude: 42.32318406425401, longitude: -71.09987144472372},
			  { latitude: 42.3315395702194, longitude: -71.09552322057385 },
			  { latitude: 42.33736939902165, longitude: -71.08927307004777 },
			  { latitude: 42.34171690092204, longitude: -71.08340618309798 },
			  { latitude: 42.34761115398272, longitude:  -71.07565245818402 },
			  { latitude: 42.34960802306562, longitude: -71.06399177082704 },
			  { latitude: 42.352303868037346, longitude: -71.06291888724262},
			  { latitude: 42.35553872948808, longitude: -71.06049417027329},
			  { latitude: 42.362927543214575, longitude: -71.05897067550808},
			  { latitude: 42.36646308447318, longitude: -71.06291888721972},
			  { latitude: 42.373692092022914, longitude: -71.0703861571392},
			  { latitude: 42.384058558445275, longitude: -71.07746718887138},
			  { latitude: 42.39293368329961, longitude: -71.07776759627241},
			  { latitude: 42.40244135321026, longitude: -71.07757447722034},
			  { latitude: 42.42679026250358, longitude: -71.07527850628676},
			  { latitude: 42.43673621812847, longitude: -71.07115863329668},
		]}
		strokeColor="#ffa500"
		strokeWidth={6}
	/>
  );
}
