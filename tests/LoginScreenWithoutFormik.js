import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from './../components/Screen';
import AppTextInput from './../components/AppTextInput';
import AppButton from './../components/AppButton';

const LoginScreenWithoutFormik = () => {
    const [email, setEmail] = useState();
    const [password, setPaswword] = useState();
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/R_logo_red.png")} />

            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-adress"
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                textContentType="emailAdress"
            />

            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={(text) => setPaswword(text)}
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
            />

            <AppButton title="Login" onPress={() => console.log(email, password)} />
        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },


})

export default LoginScreenWithoutFormik