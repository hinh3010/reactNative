import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default function FormField(props) {
    const {
        label,
        field, 
        value, 
        handleChange, 
        handleBlur, 
        errors, 
        touched, 
        type
    } = props
    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={handleChange(field)}
                onBlur={handleBlur(field)}
                secureTextEntry={type}
            />
            {errors[field] && touched[field] ? (
                <Text style={{ color: "red" }} >{errors[field]}</Text>
            ) : null}
        </View>
    )
}

const TEXT = {
    color: "#fff",
    textAlign: "center"
}
const styles = StyleSheet.create({
    topSafeArea: {
        backgroundColor: "#3498db"
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