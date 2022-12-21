import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


import Screen from './../app/components/Screen';
import ImageInputList from './../app/components/ImageInputList';

const ImageInputListTest = () => {
    const [imageUris, setImageUris] = useState([]);

    const handleAdd = uri => {
        setImageUris([...imageUris, uri])
    }

    const handleRemove = (uri) => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
    }


    return (
        <Screen>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={uri => handleAdd(uri)}
                onRemoveImage={uri => handleRemove(uri)}
            />

        </Screen>
    )
}

export default ImageInputListTest

const styles = StyleSheet.create({})