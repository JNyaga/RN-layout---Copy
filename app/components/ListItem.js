import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import colors from '../config/colors';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';//installed using expo check verions of lower version
import { MaterialCommunityIcons } from '@expo/vector-icons';





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
        <GestureHandlerRootView>
            <Swipeable renderRightActions={rightSwipeActions}>
                <TouchableHighlight activeOpacity={0.7} underlayColor={colors.lightGrey} onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image resizeMode='contain' style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
                    </View>
                </TouchableHighlight>
            </Swipeable>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
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
