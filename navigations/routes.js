import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../Context/authContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Colors } from '../components/style';

export default function Routes() {
    const [appReady, setAppReady] = useState(false);
    const { authData,  } = useAuth();
    useEffect(() => {
        setTimeout(() => {
            setAppReady(true)

        }, 2000)
    }, []);
    if (!appReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ffff" }}>
                <View style={{ height: 250, width: "100%" }} >
                    <LottieView source={require('../assets/45869-farmers.json')} autoPlay loop />
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Shah <Text style={{ color: Colors.green }}>Basket</Text></Text>
                </View>
            </View>
        )
    }
    return (
        <NavigationContainer>
            <AppStack /> 
        </NavigationContainer>
    );
};