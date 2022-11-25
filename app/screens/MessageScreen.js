import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView, Text } from "react-native";

import Listitem from "../components/ListItem";
import Listitemseparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Listitemdeleteaction from './../components/ListItemDeleteAction';
const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/face.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/face.jpg"),
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
        image: require("../assets/face.jpg"),
    },
];

// const rightSwipeActions = () => {
//     return (
//         <View
//             style={{
//                 backgroundColor: '#ff8303',
//                 margin: 0,
//                 justifyContent: 'center',
//                 alignItems: 'flex-end',
//             }}
//         >
//             <Text
//                 style={{
//                     color: '#1b1a17',
//                     paddingHorizontal: 10,
//                     fontWeight: '600',
//                     paddingHorizontal: 30,
//                     paddingVertical: 20,
//                 }}
//             >
//                 Delete
//             </Text>
//         </View>
//     );
// };

// const renderItem = ({ item }) => {
//     return (
//         <Listitem
//             title={item.title}
//             subTitle={item.description}
//             image={item.image}
//             onPress={() => console.log()}
//             rightSwipeActions={() => <Listitemdeleteaction onPress={() => console.log(item)} />}
//         />
//     );
// }
const Messagescreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        //Delete from message
        // const newMessages= messages.filter(m=> m.id !== message);--.filters and only returns other messages not
        //... equal to the one deleted
        // setMessages(newMessages);
        //OR
        setMessages(messages.filter(m => m.id !== message.id));
    }
    const renderItem = ({ item }) => {
        return (
            <Listitem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log()}
                rightSwipeActions={() => <Listitemdeleteaction onPress={() => handleDelete(item)} />}
            />
        );
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={Listitemseparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: "T1",
                            description: "D1",
                            image: require("../assets/face.jpg"),
                        },
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../assets/face.jpg"),
                        },
                    ])
                }}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default Messagescreen;
