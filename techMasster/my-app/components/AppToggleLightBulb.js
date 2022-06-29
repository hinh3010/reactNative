import { StyleSheet, SafeAreaView, View, Image, Button, Alert, Switch } from 'react-native';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { Dimensions } from 'react-native';


import { Platform } from 'react-native';

import bulbOff from '../assets/lightBulb/bulb-off.jpg'
import bulbOn from '../assets/lightBulb/bulb-on.jpg'

export default function AppToggleLightBulb() {
    const os = Platform.OS
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={isEnabled ? bulbOn : bulbOff}
                style={{
                    width: windowWidth,
                    height: (windowWidth * 925) / 631,
                }}
            />
            <View style={{ padding: 20 }}>
                <Button
                    title={'Bật / Tắt ' + os}
                    color={ isEnabled ? '#81b0ff' :  '#767577' }
                    onPress={() => setIsEnabled(pre => !pre)}
                />


            </View>
            <View style={{ padding: 20 }}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={() => setIsEnabled(pre => !pre)}
                    value={isEnabled}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3168ad',
    }
})