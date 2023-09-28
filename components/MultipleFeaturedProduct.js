import React from "react";
import { View, Text, Image, Pressable, useWindowDimensions } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
export default function SingleFeaturedProduct({ item }) {

    const windowWidth = useWindowDimensions().width
    const windowheight = useWindowDimensions().height
    return (
        <View style={{ backgroundColor: 'white', height: '100%  ', width: 155, marginRight: 15 }}>
            <View style={{ flexBasis: 100 }}>
                <Image source={item.image} style={{ flex: 1, height: '100%', width: '100%', resizeMode: 'contain', alignSelf: 'center' }} />
            </View>
            <View style={{ flexGrow: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
                <Text style={{ fontSize: 14 }}>{item.name.substring(0, 15) + '...'}</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>PH {item.price}</Text>
                <MaterialIcons name="add-shopping-cart" size={22} color="black" style={{marginVertical: 10}} />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center', backgroundColor: 'white',  }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <Image source={require('../assets/star_filled.png')} style={{ height: 10, width: 10, resizeMode: 'contain' }} />
                        <Text style={{ fontSize: 10 }}>{item.rating}</Text>
                    </View>
                    <Text style={{ fontSize: 10 }}>{item.reviews} Reviews</Text>
                    <MaterialCommunityIcons name="dots-vertical" size={20} color="#333" />
                </View>
            </View>
        </View>
    )
}