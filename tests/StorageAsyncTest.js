import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'

export default function StorageAsyncTest() {
    const demo = async () => {
        try {
            await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }))
            const value = await AsyncStorage.getItem('person')
            const person = JSON.parse(value);
            console.log(person)

        } catch (error) {
            console.log(error);
        }

    }

    demo()
    return (
        null
    )
}