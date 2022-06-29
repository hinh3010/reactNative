import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome   } from '@expo/vector-icons'; 

import AppMomo from './components/AppMomo';
import AppFacebook from './components/AppFacebook';
import AppToggleLightBulb from './components/AppToggleLightBulb'
import AppTraffic from './components/AppTraffic'
import AppRegister from './components/AppRegister'

export default function App() {
    return (
        <>
            <AppRegister/>
        </>
    );
}
