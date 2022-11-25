import React from 'react'
import {Text, StyleSheet} from 'react-native'

import colors from '../config/colors'

export default function AppText({children, style}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '100',
        fontStyle:"normal"
    }
})
