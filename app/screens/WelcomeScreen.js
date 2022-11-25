import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';



function WelcomeScreen({style}) {
    return (
        <ImageBackground blurRadius={2} style={[styles.background, style]} source={require('../assets/background.jpg')} >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text style={styles.tagLine}>hey men whats up</Text>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton title="Login"/>
           <AppButton title={"Register"} color="secondary" />
            </View>
        </ImageBackground>
 
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonContainer:{
        padding:20,
        width:"100%"
    },

    logo:{
        height:100,
        width:100,
        
    },
    logoContainer:{
        position:'absolute',
        top:50,
        alignItems:'center',
        
    },
    tagLine:{
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'bold',
        paddingVertical:20,
    },
})

export default WelcomeScreen;