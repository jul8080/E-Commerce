import React from "react";
import { View, Text, Image, Pressable, useWindowDimensions } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function SingleFeaturedProduct({ item }) {

    const windowWidth = useWindowDimensions().width
    const windowheight = useWindowDimensions().height
    return (
        <View style={{ backgroundColor: 'white', width: windowWidth, height: '100%', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'white', width: windowWidth / 2, paddingLeft: 24, justifyContent: 'center', gap: 20}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', paddingLeft: 24, lineHeight: 30}}>{item.name}</Text>
                <Pressable style={{flexDirection: 'row', alignItems: 'center' ,justifyContent: 'flex-start' , paddingLeft: 24}} onPress={() => alert('Shop now...')}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#0ACF83'}}>Shop now</Text>
                    <Feather name="arrow-right" size={20} color="#0ACF83" />
                </Pressable>
            </View>
            <View style={{ backgroundColor: 'white', width: windowWidth / 2, alignItems: 'center', justifyContent: 'center', paddingRight: 24 }}>
                <Image source={item.image} style={{ resizeMode: 'cover', height: 135, width: 117 }} />
            </View>
        </View>
    )
}