import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Appicon from './AppIcon';
import AppText from './AppText';

const CategoryPickerItem = ({ onPress, item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Appicon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            </TouchableOpacity>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})