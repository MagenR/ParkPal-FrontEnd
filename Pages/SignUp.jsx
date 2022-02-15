import { TextInput, View, Text, StyleSheet, Button, StatusBar, Platform, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState, useEffect } from 'react';

const hostURL = 'https://localhost:44341/';
const emailValidationApi = 'api/ValidateEmail';
const UsernameValidationApi = 'api/ValidateUsername';

export default function SignUp({ navigation }) {

    const [data, setData] = React.useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }

    const firstNameInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                firstName: val,
                check_firstNameInputChange: true,
            });
        } else {
            setData({
                ...data,
                firstName: val,
                check_firstNameInputChange: false,
            });
        }
    }

    const lastNameInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                lastName: val,
                check_lastNameInputChange: true
            });
        } else {
            setData({
                ...data,
                lastName: val,
                check_lastNameInputChange: false
            });
        }
    }

    const emailInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_emailInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_emailInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const validateLogin = (login, apiUrl) => {
        fetch(apiUrl, {
            method: 'POST',
            body: login,
            headers: new Headers({
              'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
            })
          })
            .then(res => {
              console.log('res=', res);
              return res.json();
            })
            .then(
              (result) => {
                console.log("fetch POST= ", result);
              },
              (error) => {
                console.log("err post=", error);
              });
    }

    const valdiateEmail = (email) => {
        validateLogin(email, hostURL + emailValidationApi);
    }

    const valdiateUsername = (username) => {
        validateLogin(username, hostURL + UsernameValidationApi);
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Username"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => valdiateUsername(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />

                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={styles.text_footer}>First name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your first name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => firstNameInputChange(val)}

                        />
                        {data.check_firstNameInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />

                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={styles.text_footer}>Last name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your last name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => lastNameInputChange(val)}

                        />
                        {data.check_lastNameInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />

                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="envelope-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => emailInputChange(val)}
                            onEndEditing={(e) => valdiateEmail(e.nativeEvent.text)}
                        />
                        {data.check_emailInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />

                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={[styles.text_footer, {
                        
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }

                    <Text style={[styles.text_footer, {
                        
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
            
                    <View style={styles.button}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('LogIn')}
                            style={[styles.signUp, {
                                borderColor: '#009387',
                                borderWidth: 1,
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>

        </View>

    );

};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    button:
    {
        alignItems: 'center',
        marginTop: 50

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});