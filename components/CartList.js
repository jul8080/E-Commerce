import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Octicons, Entypo, Feather   } from '@expo/vector-icons';
export default function CartList() {
    return (
        <View style={{flexBasis: 87, backgroundColor: 'white', flexDirection: 'row', alignItems: 'flex-end',marginBottom: 8}}>
            <View style={{flexGrow: 1, flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
                <View style={{backgroundColor: '#D9D9D9'}}>
                    <Image source={require('../assets/products/cable.png')} style={{resizeMode: 'cover', height: 68, width: 68}} />
                </View>
                <View style={{rowGap: 8}}>
                    <Text style={{fontSize: 11}}>Cable 1</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>PH 125</Text>
                </View>
            </View>
            <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 9 }}>
                <Pressable style={{height: 25, width: 25, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderColor: '#D9D9D9'}}><Entypo name="minus" size={15} color="black" /></Pressable>
                <Text style={{fontWeight: 'bold'}}>1</Text>
                <Pressable style={{height: 25, width: 25, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderColor: '#D9D9D9'}}><Octicons name="plus" size={15} color="black" /></Pressable>
                <Feather name="trash-2" size={20} color="lightgray" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        
    }
})
