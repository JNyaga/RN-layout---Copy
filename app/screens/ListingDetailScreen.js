import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

import Listitem from '../components/ListItem';

const Listingdetailscreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/jacket.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> Yellow jacket miss</AppText>
                <AppText style={styles.subTitle}>10</AppText>
                <View style={styles.userContainer}>
                    <Listitem image={require("../assets/face.jpg")} title="The Face" subTitle="5 Listings" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    subTitle: {
        color: colors.secondary,
        opacity: 0.8,
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24
    },
    userContainer: {
        marginVertical: 20,
        left: -20,

    }

})

export default Listingdetailscreen;
