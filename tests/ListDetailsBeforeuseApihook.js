import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import Screen from './../components/Screen';
import Card from './../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from './../components/AppText';
import AppButton from './../components/AppButton';
import AppActivityIndicator from './../components/AppActivityIndicator';

// const listings = [
//     {
//         id: 1,
//         title: 'Yellow Jacket for sale',
//         price: 1000,
//         image: require('../assets/jacket.jpg')
//     },
//     {
//         id: 2,
//         title: 'Couch ',
//         price: 100,
//         image: require('../assets/couch.jpg')
//     }
// ]
const Listingscreen = ({ navigation }) => {
    const [listings, setListings] = useState([])
    const [error, setEror] = useState(false)
    const [loading, setLoading] = useState(false)

    const loadListings = async () => {
        setLoading(true)
        const response = await listingsApi.getListings();
        setLoading(false)

        if (!response.ok) return setEror(true);

        setEror(false);
        setListings(response.data)

    }

    useEffect(() => {
        loadListings()
    }, [])

    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Couldn't recieve the listings</AppText>
                <AppButton title="Retry" onPress={loadListings} />
            </>}
            {/* <ActivityIndicator animating={true} size="large" /> */}
            <AppActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card title={item.title}
                        subtitle={"KSh " + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                } />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.lightGrey,
    },
})

export default Listingscreen;
