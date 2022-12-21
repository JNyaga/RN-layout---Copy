import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accountscreen from './../screens/AccountScreen';
import Messagescreen from './../screens/MessageScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            // headerBackTitle: true,
        }}
    >
        <Stack.Screen name="Account" component={Accountscreen} />
        <Stack.Screen name="Messages" component={Messagescreen} />
    </Stack.Navigator>
);


export default AccountNavigator