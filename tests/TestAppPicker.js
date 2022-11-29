import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppPicker from './../app/components/AppPicker';

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
]

const TestAppPicker = () => {
    const [category, setCategory] = useState(categories[0])
    return (
        <View>
            <AppPicker
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                placeholder={"Categories"}
                icon={"apps"}
                items={categories} />
        </View>
    )
}

export default TestAppPicker

const styles = StyleSheet.create({})