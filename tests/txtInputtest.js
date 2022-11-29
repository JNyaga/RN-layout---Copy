import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import Screen from '../app/components/Screen'



const TxtInputtest = () => {
    const [firstName, setFirstName] = useState('');
    return (
        <Screen>
            <TextInput
                clearButtonMode='always' //works 
                secureTextEntry //for passwords
                maxLength={50}
                keyboardType="numeric"
                onChangeText={text => setFirstName(text)}
                placeholder='First Name'
                style={{
                    borderBottomColor: "grey",
                    borderBottomWidth: 1
                }}
            />
            <Text>{firstName}</Text>
        </Screen>
    )
}

export default TxtInputtest

const styles = StyleSheet.create({})