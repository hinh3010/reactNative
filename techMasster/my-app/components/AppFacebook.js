import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity ,Image } from 'react-native';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';

import imgFacebook from '../assets/facebook-banner.jpg'

export default function AppFacebook() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Image 
                source={imgFacebook}
                style={{width:"100%",height:null ,aspectRatio:760/460  , resizeMode:"contain"}} 
            />
            <View style={styles.content}>
                <View>
                    <TextInput
                        style={styles.inputPassword}
                        autoFocus={true}            // tự động focus vào ô input
                        placeholder="Nhập email"
                        placeholderTextColor="#929292"
                    />
                    <TextInput
                        style={styles.inputPassword}
                        secureTextEntry={true}      // type="password"
                        placeholder="Nhập mật khẩu"
                        placeholderTextColor="#929292"
                    />
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom}>
                    {/* <Text style={styles.viewBottomText}>---------- HOẶC ----------</Text> */}
                    <View style={{flexDirection:"row",alignItems:"center" , justifyContent:'center'}}>
                        <View style={{flex:1,height:1,borderWidth:1,borderColor:'#fff'}}/>
                        <Text style={styles.viewBottomText}>HOẶC</Text>
                        <View style={{flex:1,height:1,borderWidth:1,borderColor:'#fff'}}/>
                    </View>
                    <TouchableOpacity style={styles.viewBottomBtn}>
                        <Text style={styles.viewBottomBtnText}>
                            Tạo tài khoản mới
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const TEXT = {
    color: "#fff",
    textAlign: "center"
}
const BTN = {
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    fontSize: 20
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3168ad',
    },
    content:{
        flex : 1 ,
        justifyContent : 'space-between' ,
        padding: 30,
    },
    inputPassword: {
        ...BTN,
        backgroundColor: '#fff',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    buttonLogin: {
        ...BTN,
        backgroundColor: '#132de1',
        justifyContent: "center",
    },
    buttonLoginText: {
        color: "#fff",
        textAlign: "center"
    },
    viewBottom: {
        paddingBottom : 30
    },
    viewBottomText: {
        ...TEXT,
        width : 80
    },
    viewBottomBtn: {
        ...BTN,
        backgroundColor: '#2ebccb',
        justifyContent: "center",
    },
    viewBottomBtnText: {
        ...TEXT,
    }
})