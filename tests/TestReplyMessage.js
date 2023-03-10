import { StyleSheet, View, Keyboard, KeyboardAvoidingView, Alert } from 'react-native'
import React from 'react'
import * as Yup from "yup";
import * as Notifications from 'expo-notifications';



import Screen from './../app/components/Screen';
import { AppForm, AppFormField, SubmitButton } from './../app/components/forms';
import colors from '../app/config/colors';
import AppText from './../app/components/AppText';
import messageApi from '../app/api/messages';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


const TestReplyMessage = ({ route, navigation }) => {
    const messageItem = route.params
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss()
        console.log(message)
        const result = await messageApi.sendReply(message, messageItem._id)
        if (!result.ok) {
            console.log("Error", result.ok);
            return Alert.alert("Error", "Could not send the message to the Customer.");
        }


        resetForm()

        Notifications.scheduleNotificationAsync({
            content: {
                title: "Awesome!",
                body: "Your message was sent to the Customer.",
            },
            trigger: null,
        });

        await messageApi.deleteMessage(messageItem._id)
        navigation.goBack()

    }

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            {/* <Screen> */}

            <View style={styles.message}>
                <AppText style={styles.title} >
                    Name:{messageItem.fromUserId.name}
                </AppText>
                <AppText>
                    {messageItem.content}
                </AppText>

            </View>

            <View >
                <AppForm
                    initialValues={{ message: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        maxLength={255}
                        multiline
                        name="message"
                        numberOfLines={2}
                        placeholder="Message..."
                    />
                    <SubmitButton title="Reply To Message" />
                </AppForm>

            </View>

            {/* </Screen> */}
        </KeyboardAvoidingView>
    )
}

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
});

export default TestReplyMessage

const styles = StyleSheet.create({
    // container: {
    //     justifyContent: "flex-end",
    //     alignItems: 'center',
    //     marginBottom: 10,
    //     flex: 1,

    // },
    message: {
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 300,
        backgroundColor: colors.lightGrey,
        marginTop: 20,
        borderRadius: 15,
        margin: 20,

    },

    title: {
        alignSelf: "flex-start",
        marginTop: 10,
    },

})