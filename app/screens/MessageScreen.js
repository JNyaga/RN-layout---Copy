import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView, Text } from "react-native";

import Listitem from "../components/ListItem";
import Listitemseparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Listitemdeleteaction from './../components/ListItemDeleteAction';
import messagesApi from "../api/messages";
import useApi from './../hooks/useApi';

const initialMessages = [
    {
        id: 1,
        title: "JoelNyaga",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime praesentium magnam sapiente adipisci error voluptatem ipsum culpa vel. Molestias ipsum, eaque quos voluptas recusandae sint porro cumque quis nam explicabo repellendus odit. Vitae voluptatum laboriosam quia eveniet atque quaerat, esse, quod et expedita dolores pariatur, iusto nam fugit cupiditate perspiciatis!",
        image: require("../assets/face.jpg"),
    },
    {
        id: 2,
        title: "Nuriom Mnamu",
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
const Messagescreen = ({ navigation }) => {
    // const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const { data: messages, error, loading, request: loadMessages } = useApi(messagesApi.getMessages)
    // console.log(messages[0])

    useEffect(() => {
        loadMessages()
    }, [])

    // const loadMessages = async () => {
    //     const message = await messagesApi.getMessages()
    //     console.log(Object.keys(message))
    // }

    const handleDelete = async (messageId) => {
        const messageDeleted = await messagesApi.deleteMessage(messageId)
        // console.log(messageDeleted)
        loadMessages()

    }
    const renderItem = ({ item }) => {
        return (
            <>
                <Listitem
                    title={item.fromUserId.name}
                    subTitle={item.content}
                    imageUrl={item.fromUserId
                        .image.url}
                    thumbnailUrl={item.fromUserId.image.thumbnailUrl}
                    onPress={() => navigation.navigate("ReplyMessage", item)}
                    rightSwipeActions={() => <Listitemdeleteaction onPress={() => handleDelete(item._id)} />}
                />
            </>
        );
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message._id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={Listitemseparator}
                refreshing={refreshing}
                onRefresh={() => {
                    loadMessages()
                }}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default Messagescreen;
