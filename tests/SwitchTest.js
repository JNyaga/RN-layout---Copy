import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

import Screen from '../app/components/Screen'


const SwitchTest = () => {
    const [isNew, setIsNew] = useState(false);

    return (
        <Screen>
            <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
        </Screen>
    )
}

export default SwitchTest

const styles = StyleSheet.create({})