import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
import WelcomeScreen from './app/screens/WelcomeScreen';
import Viewimagescreen from './app/screens/ViewImageScreen';
import Listingdetailscreen from './app/screens/ListingDetailScreen';

import AppText from './app/components/AppText';
import Accountscreen from './app/screens/AccountScreen';
import AppButton from './app/components/AppButton';
import Appicon from './app/components/AppIcon';
import Card from './app/components/Card';
import Listitem from './app/components/ListItem';
import Messagescreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import Listingscreen from './app/screens/ListingScreen';
import TxtInputtest from './tests/txtInputtest';
import AppTextInput from './app/components/AppTextInput';
import SwitchTest from './tests/SwitchTest';
import AppPicker from './app/components/AppPicker';
import TestAppPicker from './tests/TestAppPicker';

export default function App() {
  // console.log(Dimensions.get("screen"));
  console.log(useDimensions(), useDeviceOrientation())
  console.log(require("./app/assets/streetguy-unsplash.jpg"))
  return (
    <Screen>
      <TestAppPicker />
      <AppTextInput icon={"email"} placeholder={"Email"} />
      <SwitchTest />
    </Screen>
  )
  // <TxtInputtest />
  // <Messagescreen />
  // <Listingscreen />
  // <Accountscreen />
  //   <Screen>
  //   < Listitem title={'joel'} subTitle={'james'} IconComponent={<Appicon name={'email'} />} />
  // </Screen>
  // <Appicon
  //   name="email"
  //   size={10}
  //   backgroundColor="red"
  //   iconColor="white"
  // />
  // return (
  //   <>
  //    <Messagescreen />
  //    {/* <Viewimagescreen /> */}
  //   {/* <AppText>this is a text</AppText> */}
  //   {/* <WelcomeScreen /> */}
  // {/* <View style={{ backgroundColor: '#f8f4f4',
  //     padding:20,
  //     paddingTop:100,}}>
  //       <Card title={"title"} subtitle="20" image={require("./app/assets/streetguy-unsplash.jpg")} />
  // </View> */}
  //   {/* <Listingdetailscreen /> */}
  //   <StatusBar style="auto" />
  //   </>
  // );
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
