import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Screen from './../components/Screen';
import Card from './../components/Card';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Yellow Jacket for sale',
        price: 1000,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch ',
        price: 100,
        image: require('../assets/chair.jpg')
    }
]
const Listingscreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card title={item.title}
                        subtitle={"KSh " + item.price}
                        image={item.image} />
                } />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightGrey,
    },
})

export default Listingscreen;
