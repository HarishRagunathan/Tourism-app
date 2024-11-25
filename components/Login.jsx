import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../constants/Colors'
import { useRouter } from 'expo-router'

const { width, height } = Dimensions.get('window');

export default function Login() {
    const router = useRouter()
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <View>
            <Image source={require('./../assets/images/tourism_Login.jpg')}
                style={{
                    width: '100%',
                    height: height * 0.70,
                }}
            />
            <View style={styles.container}>
                <Text style={styles.title}>AI Travel Planner</Text>
                <Text style={styles.description}>
                    An AI-powered travel planner app featuring AR/VR allows users to explore destinations virtually, 
                    receive personalized itineraries, and make informed travel decisions.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => router.push('auth/sign-in')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: width * 0.06,
    },
    title: {
        fontSize: width * 0.08,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        marginTop: height * 0.02,
    },
    description: {
        fontFamily: 'outfit-regular',
        fontSize: width * 0.045,
        textAlign: 'center',
        color: Colors.GRAY,
        marginTop: height * 0.02,
    },
    button: {
        padding: height * 0.02,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: height * 0.03,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        color: Colors.WHITE,
        fontSize: width * 0.045,
    },
});
