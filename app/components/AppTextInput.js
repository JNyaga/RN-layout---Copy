import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';
import defaultStlyes from './../config/styles';



const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={28} color={colors.medium} style={styles.icon} />}
            <TextInput style={defaultStlyes.text} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },

    icon: {
        marginRight: 10

    },


})


export default AppTextInput
