import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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

export default function App() {
  return <Listingscreen />
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
  // <Messagescreen />
  // return (
  //   <>
  //    <Messagescreen />
  //    {/* <Viewimagescreen /> */}
  //   {/* <AppText>this is a text</AppText> */}
  //   {/* <WelcomeScreen /> */}
  //   {/* <View style={{ backgroundColor: '#f8f4f4',
  //       padding:20,
  //       paddingTop:100,}}>
  //         <Card title={"title"} subtitle="20" image={require("./app/assets/streetguy-unsplash.jpg")} />
  //   </View> */}
  //   {/* <Listingdetailscreen /> */}
  //   <StatusBar style="auto" />
  //   </>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
