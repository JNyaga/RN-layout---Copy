import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';//installed using expo check verions of lower version




import AppText from './AppText';

// const RightActions = (progress, dragX) => {
//     return (
//         <View style={{ backgroundColor: "red", width: 70 }}>
//             <Text> HEy there</Text>
//         </View>
//     )
// }

const Listitem = ({ title, subTitle, image, IconComponent, onPress, rightSwipeActions }) => {
    return (
        <Swipeable renderRightActions={rightSwipeActions}>
            <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium,
        fontWeight: "800"
    },
    title: {
        fontWeight: "600",
    }
})

export default Listitem;
