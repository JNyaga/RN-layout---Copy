import { View, Text } from 'react-native'
import React from 'react'
import NetInfo, { useNetInfo } from "@react-native-community/netinfo"

const OfflineSupportTest = () => {
    //NetInfo.fetch().then((netInfo) => console.log(netInfo));//this gives network information only once
    // To subcribe to netrk changes we use
    const usubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo))
    // usubscribe halps stop more requests to check network every time
    // OR us the useNetInfo hook to help manage the network unsubcribe
    const netInfo = useNetInfo()
    // netInfo.isInternetReachable

    return (
        null
    )
}

export default OfflineSupportTest