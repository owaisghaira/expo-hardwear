import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import About from '../screens/About'
import { Image } from 'react-native'
import CameraApp from '../screens/camera'

const Stack = createStackNavigator();

function Navegation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    options={{
                        title: 'My Home Screen',
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        headerTitle: props => <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://www.kindpng.com/picc/m/111-1111017_house-icon-red-png-png-download-home-logo.png' }} />
                    }}
                    name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Camera" component={CameraApp} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navegation;