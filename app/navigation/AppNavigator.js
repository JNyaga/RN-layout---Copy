import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import ListingEditScreen from './../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';
import navigation from './rootNavigation';
import useNotifications from './../hooks/useNotifications';



const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useNotifications(() => navigation.navigate("AccountNav", { screen: 'Messages' }))

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Feed"
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
                }}
            />

            <Tab.Screen
                name={routes.LISTING_EDIT}
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
                    // tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                })}
            />

            <Tab.Screen
                name="AccountNav"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}


export default AppNavigator;