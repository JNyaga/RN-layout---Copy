import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            {/* resizeMode is used to contain the image withi a given area */}
            <Image resizeMode='cover' style={styles.image} source={image} />
            {/* <View style={styles.imageView}> */}
            {/* </View> */}
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subtitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
    },
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
        flex: 1,
    },
    // imageView: {
    //     width: "100%",
    //     height: 200,
    // },
    subTitle: {
        color: colors.secondary
    },
    title: {
        marginBottom: 20,
    }
})