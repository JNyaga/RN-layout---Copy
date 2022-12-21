import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";

// First, set the handler that will cause the notification
// to show the alert

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});




function ContactSellerForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing._id);

        if (!result.ok) {
            console.log("Error", result.ok);
            return Alert.alert("Error", "Could not send the message to the seller.");
        }

        resetForm();

        Notifications.scheduleNotificationAsync({
            content: {
                title: "Awesome!",
                body: "Your message was sent to the seller.",
            },
            trigger: null,
        });
    };

    return (
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
            <SubmitButton title="Contact Seller" />
        </AppForm>
    );
}

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
