import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from "formik"
import * as Yup from "yup"

import Screen from './../components/Screen';
import AppTextInput from './../components/AppTextInput';
import AppButton from './../components/AppButton';
import ErrorMessages from './../components/ErrorMessages';
import AppFormField from './../components/AppFormField';
import SubmitButton from '../components/SubmitButton';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Eamil"),
    password: Yup.string().required().min(4).label("Password")
})

const IntialFormikLogin = () => {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/R_logo_red.png")} />

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-adress"
                            name="email"
                            // onBlur={() => setFieldTouched("email")}
                            // onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAdress"
                        />
                        {/* {touched.email && <ErrorMessages error={errors.email} />}
                        <ErrorMessages error={errors.email} visible={touched.email} /> */}

                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name={"password"}
                            onBlur={() => setFieldTouched("password")}
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        {/* <ErrorMessages error={errors.password} visible={touched.password} /> */}

                        <SubmitButton title={"login"} />
                        {/* <AppButton title="Login" onPress={handleSubmit} /> */}

                    </>
                )}

            </Formik>


        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },


})

export default IntialFormikLogin