import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


export default function CameraApp() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const camera = useRef(null)
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            const { library } = await MediaLibrary.requestPermissionsAsync()
            setHasPermission(status === 'granted');
        })();
    }, []);

    const TakePic = async () => {
        let photo = await camera.current.takePictureAsync();
        console.log(photo)
        await MediaLibrary.createAssetAsync(photo.uri);
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera ref={camera} style={{ flex: 1 }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => TakePic()}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', borderWidth: 2 }}> Take </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}