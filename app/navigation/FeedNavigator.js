import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listingscreen from './../screens/ListingScreen';
import Listingdetailscreen from './../screens/ListingDetailScreen';
import routes from "./routes";
import Viewimagescreen from './../screens/ViewImageScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            // headerBackTitle: true,
        }}
    >
        <Stack.Screen name="Listings" component={Listingscreen} />
        <Stack.Screen
            name={routes.LISTING_DETAILS}
            component={Listingdetailscreen}
            options={{ presentation: "modal" }}
        />
        <Stack.Screen name={routes.VIEWING_SCREEN} component={Viewimagescreen} />
    </Stack.Navigator>
);


export default FeedNavigator