import React from 'react';
import {Image, StyleSheet, View} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

import colors from '../config/colors';

const Viewimagescreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
            <AntDesign name="close" size={30} color= {colors.secondary} />
            </View>
            <View style={styles.deleteIcon}>
            <AntDesign name="delete" size={30} color="red" />
            </View>
            <Image resizeMode='contain'
                style={
                    styles.image
                }
                source={
                    require("../assets/chair.jpg")
                }/>
                
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        position:'absolute',
        top:40,
        left:30,
    },
    container:{
        backgroundColor:'black',
        flex:1,
    },
    deleteIcon:{
        top:40,
        right:30,
        position:'absolute',
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default Viewimagescreen;
