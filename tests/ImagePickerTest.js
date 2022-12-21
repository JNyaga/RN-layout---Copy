import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from "expo-permissions"

import Screen from './../app/components/Screen';
import ImageInput from './../app/components/ImageInput';

const ImagePickerTest = () => {
    const [imageUri, setImageUri] = useState();

    //  Get user permisions
    const requestPermission = async () => {
        // Permission Location and Camera rooll deprecated use respecticve api instead
        // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
        // // result.granted
        // eg for images use const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        // and for Location useimport * as Location from “expo-location”;
        // ...const { granted } = await Location.requestForegroundPermissionsAsync();
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted)
            alert('You need to enable permission to access the library.');
    }
    // useEffect does not accept async without resolving promise

    useEffect(() => {
        requestPermission()
    }, [])

    // read image from  lib
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) {
                setImageUri(result.assets[0].uri);
            }

        } catch (error) {
            console.log("Error reading an image", error)
        }
    }

    return (
        <Screen>
            <Button title="Select Image" onPress={selectImage} />
            <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
            <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
        </Screen>
    )
}

export default ImagePickerTest

const styles = StyleSheet.create({})