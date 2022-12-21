import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../app/components/Screen";
import AuthNavigator from "./../app/navigation/AuthNavigator";
import navigationTheme from "../app/navigation/navigationTheme";
import AppNavigator from './../app/navigation/AppNavigator';

// the navigation prop is only available to the components called in the stack.screen
// To get access to this prop we use useNavigation hook

const Link = () => {
    const navigation = useNavigation();

    return (
        <Button
            title="Click"
            onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
        />
    );
};

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Button
            title="View Tweet"
            onPress={() => navigation.navigate("TweetsDetails", { id: 1 })} //id returneed in route.params.id
        />
        {/* <Link /> */}
    </Screen>
);

const TweetDetails = ({ route }) => (
    // if in not in child componet for route= useRoute
    <Screen>
        <Text>TweetsDetails {route.params.id}</Text>
    </Screen>
);

const Account = () => (
    <Screen>
        <Text>Account</Text>
    </Screen>
);

/* Stack Navigation */
const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
        initialRouteName="Tweets"
        screenOptions={{
            //global options

            headerStyle: { backgroundColor: "dog" },
            headerTintColor: "pink",
            headerTitleAlign: "center",

            // headerShown: false,//header disappears
        }}
    >
        <Stack.Screen
            name="Tweets"
            component={Tweets}
            options={{
                headerStyle: { backgroundColor: "green" },
                headerTintColor: "pink",
                // headerShown: false,//header disappears
            }}
        />

        <Stack.Screen
            name="TweetsDetails"
            component={TweetDetails}
            options={({ route }) => ({ title: route.params.id.toString() })}
        />
    </Stack.Navigator>
);

/* Tab Navigator */
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarActiveBackgroundColor: "red",
            tabBarInactiveBackgroundColor: "grey",
            tabBarInactiveTintColor: "black",
        }}
    >
        <Tab.Screen
            name="Feed"
            component={StackNavigator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="home" size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
);

const NavigationTest = () => {
    return (
        <NavigationContainer theme={navigationTheme}>
            {/* <StackNavigator /> */}
            {/* <TabNavigator /> */}
            <AuthNavigator />
            {/* <AppNavigator /> */}
        </NavigationContainer>
    );
};

export default NavigationTest;

const styles = StyleSheet.create({});
