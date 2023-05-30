import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, {Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";

export const GuideScreen = () => {
  let locationArray:{coordinates: {latitude: number, longitude: number}, id: string}[] = [];

  const [locations, setLocations] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://fine-plum-turtle-toga.cyclic.app/guide')
    .then((res) => {
      console.log("GET REQUEST SENT")
      for (let location of res.data.locations){
        locationArray.push({coordinates: {latitude: location.coordinates[0], longitude: location.coordinates[1]}, id: location._id})
      }
      setLocations(locationArray);
      setLoading(false);
    })
  }  
  
  if (isLoading){
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Test</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: locations.reduce((acc, location) => acc + location.coordinates.latitude, 0) / locations.length,
          longitude: locations.reduce((acc, location) => acc + location.coordinates.longitude, 0) / locations.length,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >

        {locations!.map((location) => {
          return (
            <Marker key={location.id} coordinate={location.coordinates} />
          )
        })}
        <MapViewDirections
          origin={locations![0].coordinates}
          waypoints={(locations!.length > 2) ? locations!.slice(1, -1).map(obj => obj.coordinates): undefined}
          destination={locations![locations!.length - 1].coordinates}
          // TOTALLY SCREWED UP, REMOVE API_KEY ASAP
          apikey={"AIzaSyBk2JwvX8NThZ_e9b1JCYqDqvZgARkKP1k"} 
          strokeColor="hotpink"
          strokeWidth={4}
          onReady={result => {
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min`);
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
