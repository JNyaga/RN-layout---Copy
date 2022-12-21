import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as Notifications from "expo-notifications";

import expoPushTokensApi from '../api/expoPushTokens';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});



export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications()

        //when notification is recieved
        // Notifications.addNotificationReceivedListener(notification => {
        //     navigation.navigate('Account')
        // })

        //when notification is tapped
        if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener)
        /* OR */
        // Notifications.addNotificationResponseReceivedListener(notification => {
        //     // console.log(notification)
        //     //navigate to nested object https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator
        //     navigation.navigate("AccountNav", { screen: 'Messages' })
        // })
    }, [])

    const registerForPushNotifications = async () => {
        try {
            if (Platform.OS === 'android') {
                await Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
            }
            const { status } = await Notifications.getPermissionsAsync()
            if (status !== "granted") return;
            // console.log(status)

            const token = await Notifications.getExpoPushTokenAsync()
            console.log(token.data)
            expoPushTokensApi.register(token.data)

        } catch (error) {
            console.log("Error getting a push token", error)
        }
    }


}