import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            console.log(location)
        })();
    }, []);
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 24.8935455,
                    longitude: 66.927639,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.mapStyle} >
                <Marker coordinate={{
                    latitude: location ? location.latitude : 24.8935455,
                    longitude: location ? location.longitude :66.927639,
                }} />
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
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});