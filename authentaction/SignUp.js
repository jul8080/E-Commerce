import React from "react";
import { StyleSheet, View, Text, Image, TextInput, Pressable } from "react-native"
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import PressableComponent from "../components/PressableComponent";
import { Helvetica, Poppins } from '../styles/GlobalStyles'
export default function SignUp({ navigation }) {
    const heightButton = 50
    const borderRounded = 10


    const navigateToLoginPage = () => {
        navigation.navigate('Login')
    }

    const colorGreen = () => {
        alert("green")
    }
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', gap: 7, marginTop: 93 }}>
                <Image source={require('../assets/shopimage/Shoplogo.png')} resizeMode="cover" />
            </View>
            {/* form input start here... */}
            <View style={{ gap: 12, marginTop: 54, marginBottom: 30 }}>
                {/* Email Input here... */}
                <View style={{ height: 50, borderWidth: 1, borderColor: '#BABABA', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="email-outline" size={20} color="#BABABA" style={{ paddingLeft: 15, paddingEnd: 5 }} />
                    <TextInput placeholder="Email" style={{ height: '100%', width: '100%' }} />
                </View>
                {/* Password Input here... */}
                <View style={{ height: 50, borderWidth: 1, borderColor: '#BABABA', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="lock" size={20} color="#BABABA" style={{ paddingLeft: 15, paddingEnd: 5 }} />
                    <TextInput placeholder="Password" style={{ height: '100%', width: '100%' }} />
                </View>
            </View>
            {/* form input ends here... */}

            {/* Sign In button here... */}
            <PressableComponent
                title="Sign Up"
                green="#0ACF83"
                fontFamily={Poppins.formFontButton}
                heightButton={heightButton}
                alignItemsCenter="center"
                justifyContenCenter="center"
                borderRounded={borderRounded}
                colorGreen={colorGreen}
                onPress={colorGreen}
            />
            <View style={{ flexDirection: "row", gap: 3, alignItems: "center", justifyContent: "center", marginTop: 42 }}>
                <Text style={Poppins.formContent}>If you have an account? </Text>
                <Text style={Poppins.formNavigation} onPress={navigateToLoginPage}>Sign In here</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 15, alignItems: "center", justifyContent: "center", marginTop: 27 }}>
                <Image source={require('../assets/apple.png')} resizeMode="cover" />
                <Image source={require('../assets/facebook.png')} resizeMode="cover" />
                <Image source={require('../assets/google.png')} resizeMode="cover" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 23,
        backgroundColor: 'white'
    },
});
