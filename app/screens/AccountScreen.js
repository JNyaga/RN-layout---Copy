import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import Listitem from './../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Appicon from './../components/AppIcon';
import Listitemseparator from './../components/ListItemSeparator';


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },

    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },

]

const Accountscreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Listitem
                    title={"Joel Nyaga"}
                    subTitle={" subtitle"}
                    image={require("../assets/face.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <Listitem
                            title={item.title}
                            IconComponent={<Appicon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    }
                    ItemSeparatorComponent={Listitemseparator}
                />
            </View>
            <Listitem title={"Log Out"}
                IconComponent={<Appicon name={'logout'} backgroundColor={colors.danger} iconColor={colors.white} />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.lightGrey,
    }
})

export default Accountscreen;
