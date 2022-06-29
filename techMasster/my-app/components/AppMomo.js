import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react'

import { Platform } from 'react-native';
import { Keyboard ,TouchableWithoutFeedback } from 'react-native';

export default function AppMomo() {
    const [type, setType] = useState(true);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content}>
                <View style={styles.textWrapper}>
                    <Text style={styles.hiText}>Hello!</Text>
                    <Text style={styles.userText}>Trần Văn Hinh</Text>
                    <Text style={styles.userText}>0916425137</Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.form}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <TextInput
                            style={styles.inputPassword}
                            keyboardType="numeric"
                            secureTextEntry={type}      // = true => type password
                            autoFocus={true}            // tự động focus vào ô input
                            placeholder="Nhập mật khẩu"
                            placeholderTextColor="#929292"
                        />

                        <FontAwesome
                            name={type ? "lock" : "unlock"} size={30} color="#888"
                            style={{
                                position: 'absolute',
                                top: "25%",
                                left: 20,
                                zIndex: 10
                            }}
                            onPress={() => setType(prev => !prev)}
                        />
                    </View>

                </TouchableWithoutFeedback>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginText}>
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <View style={styles.action}>
                <TouchableOpacity style={styles.buttonAction}>
                    <Text style={styles.buttonActionText}>
                        Quên mặt khẩu
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAction}>
                    <Text style={styles.buttonActionText}>
                        Thoát tài khoản
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const TEXT = {
    color: "#fff",
    textAlign: "center"
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b0006d',
        paddingTop: Constants.statusBarHeight,
        justifyContent: "center"
    },
    hiText: {
        ...TEXT,
        fontSize: 30,
        lineHeight: 50,
        fontWeight: "bold"
    },
    userText: {
        ...TEXT,
        fontSize: 20,
        lineHeight: 30,
    },
    content: {
        paddingHorizontal: 10
    },
    form: {
        paddingVertical: 50
    },
    textWrapper: {

    },
    inputPassword: {
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 50,
        fontSize: 30
    },
    buttonLogin: {
        backgroundColor: 'red',
        height: 50,
        marginTop: 15,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonLoginText: {
        ...TEXT
    },
    action: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    buttonActionText: {
        ...TEXT,
        fontSize: 16
    }
});
