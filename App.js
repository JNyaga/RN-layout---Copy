import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";


import ImagePickerTest from './tests/ImagePickerTest';
import Listingdetailscreen from './app/screens/ListingDetailScreen';
import ImageInputListTest from './tests/ImageInputListTest';
import ListingEditScreen from './app/screens/ListingEditScreen';
import NavigationTest from './tests/NavigationTest';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import OfflineSupportTest from './tests/OfflineSupportTest';
import StorageAsyncTest from './tests/StorageAsyncTest';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import authStorage from './app/auth/storage';
import PushNotificationTest from './tests/PushNotificationTest';
import { navigationRef } from './app/navigation/rootNavigation';
import TestReplyMessage from './tests/TestReplyMessage';
import Messagescreen from './app/screens/MessageScreen';
import AccountEditScreen from './app/screens/AccountEditScreen';



export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false)

  //retore token when app restarts  (in authStorage)
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user)

  }

  useEffect(() => {
    restoreUser();
  }, [])

  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
  //   );
  // console.log(Dimensions.get("screen"));
  console.log(useDimensions(), useDeviceOrientation())
  console.log(require("./app/assets/streetguy-unsplash.jpg"))
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      {/* <TestReplyMessage /> */}
      {/* <Messagescreen /> */}
      {/* <NavigationTest /> */}
      {/* // <ImageInputListTest />
    // <ListingEditScreen />
    // <OfflineSupportTest />
    // <StorageAsyncTest />
    
    // <RegisterScreen />
    // <WelcomeScreen /> */}
      {/* <AccountEditScreen /> */}
    </AuthContext.Provider>
    // <PushNotificationTest />
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    paddingTop: 100,

  },
});
