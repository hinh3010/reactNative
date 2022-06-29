import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Dimensions } from 'react-native';


import { Platform } from 'react-native';

import trafficLightRed from '../assets/traffic/traffic-light-red.png'
import trafficLightGreen from '../assets/traffic/traffic-light-green.png'
import trafficLightYellow from '../assets/traffic/traffic-light-yellow.png'
import trafficLight from '../assets/traffic/traffic-light.png'


export default function AppToggleLightBulb() {
    const os = Platform.OS
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const lights = [
        { id: 1, color: 'red', name: 'red', light: trafficLightRed },
        { id: 2, color: 'green', name: 'green', light: trafficLightGreen },
        { id: 3, color: 'yellow', name: 'yellow', light: trafficLightYellow },
    ]

    const [lightTraffic, setLightTraffic] = useState(trafficLight)
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={lightTraffic}
                style={{
                    width: windowWidth,
                    height: (windowWidth * 1183) / 1080,
                }}
            />
            <View style={styles.group}>
                {
                    lights.map((light) => (
                        <TouchableOpacity
                            key={light.id}
                            style={[
                                styles.button,
                                { backgroundColor: `${light.color}` }
                            ]}
                            onPress={() => setLightTraffic(light.light)}
                        >
                            <Text style={[styles.text]}>
                                {light.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3168ad',
        justifyContent: "space-between",
        paddingVertical: 30,
    },
    group: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    button: {
        paddingVertical: 6,
        borderRadius: 8,
        width: "25%"
    },
    text: {
        color: "#333",
        fontSize: 24,
        textAlign: "center"
    }
})