import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from '@expo/vector-icons';


export default function Header({onPress}) {


    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24 }}>
            <Feather name="arrow-left-circle" size={24} color="black" onPress={onPress} />
            <Text style={{fontWeight: 'bold'}}>TECHBOYZ</Text>
            <Image source={require('../assets/profile.png')} />
        </View>
    )
}