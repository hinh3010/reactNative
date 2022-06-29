import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react'

import { Platform } from 'react-native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik';
import { SignupSchema } from './validate';

import FormField from './CpnRegister';



export default function AppRegister() {
    const isFormValid = (isValid, touched) => {
        return isValid && Object.keys(touched).length !== 0
    }
    const onSubmitHandle = (values) => {
        alert(
            JSON.stringify(values)
        )
    }

    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Register!</Text>
                </View>
                <KeyboardAwareScrollView
                    extraScrollHeight={200}
                    style={styles.content}
                    keyboardShouldPersistTaps="handled" // nên có
                >

                    <Formik
                        initialValues={
                            {
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                confirmPassword: ""
                            }
                        }
                        // onSubmit={values => console.log('34', values)}
                        onSubmit={onSubmitHandle}
                        validationSchema={SignupSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            isValid
                        }) => (
                            <>
                                <FormField
                                    label="First Name"
                                    field="firstName"
                                    type={false}
                                    
                                    value={values.firstName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                />

                                <FormField
                                    label="Last Name"
                                    field="lastName"
                                    type={false}
                                    
                                    value={values.lastName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                />

                                <FormField
                                    label="Email"
                                    field="email"
                                    type={false}
                                    
                                    value={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                />

                                <FormField
                                    label="Password"
                                    field="password"
                                    type={true}
                                    
                                    value={values.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                />

                                <FormField
                                    label="Confirm Password"
                                    field="confirmPassword"
                                    type={true}
                                    
                                    value={values.confirmPassword}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                />

                                <TouchableOpacity
                                    // disabled={!isFormValid(isValid, touched)}
                                    onPress={handleSubmit}
                                    style={styles.button}
                                >
                                    <View
                                        // style={[styles.button, {
                                        //     opacity: isFormValid(isValid, touched) ? 1 : 0.5
                                        // }]}
                                    >
                                        <Text style={styles.buttonText}>
                                            Đăng kí
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>

                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    );
}

const TEXT = {
    color: "#fff",
    textAlign: "center"
}
const styles = StyleSheet.create({
    topSafeArea: {
        backgroundColor: "#3498db"
    },
    container: {
        flex: 1,
        backgroundColor: Platform.OS === " ios" ? "#f9f9f9" : "#3498db",
        paddingTop: Constants.statusBarHeight,
        justifyContent: "space-between",
        paddingVertical: 20
    },
    header: {
        backgroundColor: "#3498db",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
    },
    headerText: {
        ...TEXT,
        fontSize: 18,
    },
    content: {
        padding: 20,
        backgroundColor: "#f9f9f9",
        flex: 1
    },
    formGroup: {
        marginBottom: 10
    },
    label: {
        color: "#7d7e79",
        fontSize: 16
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        ...TEXT,
        fontSize: 20,
        paddingVertical: 10
    },

    input: {
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 14,
        fontSize: 20
    },

});
