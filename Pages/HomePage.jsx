import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-elements'

export default function HomePage({ navigation }) {

    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.centerImage}>
                <Image
                    source={require('./images/signage.png')}
                    style={styles.logo}
                    resizeMode="contain"
                >
                </Image>
                <Text style={styles.text}>Park Pal</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView >
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LogIn')}
                            style={[styles.signUp, {
                                borderColor: '#009387',
                                backgroundColor: '#fff',
                                borderWidth: 2,
                            }]}
                        >
                            <Text style={[styles.text_footer, {
                                color: '#009387'
                            }]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                            style={[styles.signUp, {
                                borderColor: '#009387',
                                backgroundColor: '#fff',
                                borderWidth: 2,
                            }]}
                        >
                            <Text style={[styles.text_footer, {
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
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    centerImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 90,
        marginTop: -80,

    },
    logo: {
        width: 200,
        height: 300,
        marginLeft: 15,
        marginTop: 50,
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    buttonStyle: {
        width: '100%',
        height: 50,
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 100,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 40,
        fontWeight: 'bold'
    },

});