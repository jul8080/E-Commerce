import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Pressable, Image } from "react-native";
import { EvilIcons, Feather, Entypo  } from '@expo/vector-icons';
import Header from "../components/Header";



export default function SearchScreen({ showModal, setShowModal }) {

    const hideSearch = () => {
        setShowModal(false)
    }
    const products = [
        { id: 1, name: 'HD Wireless Headphone 11', image: require('../assets/products/headphone.png'), category: 'headphones', rating: 86.32, reviews: 86, price: 350 },
        { id: 2, name: 'Cable Headphone 11', image: require('../assets/products/cable.png'), category: 'cable', rating: 100, reviews: 86, price: 25 },
        { id: 3, name: 'Cable Headphone 12', image: require('../assets/products/cable.png'), category: 'cable', rating: 20, reviews: 16, price: 125 },
    ]
    return (

        <View style={{ marginTop: 20, backgroundColor: 'white', flex: 1 }}>
            <Header onPress={hideSearch} />
            <View style={{ marginTop: 15, backgroundColor: 'white', flexBasis: 55, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <Text style={{ fontWeight: 'bold' }}>Search</Text>
                <Feather name="shopping-cart" size={24} color="black" style={{ position: 'absolute', right: 24 }} />
            </View>
            {/* Search input here... */}
            <View style={{ flexBasis: 45, width: '100%', backgroundColor: 'white', alignItems: 'center' }}>
                <View style={{ width: 326, height: '100%', borderWidth: 1, borderColor: '#BABABA', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="search" size={20} color="#BABABA" style={{ paddingRight: 12, paddingLeft: 15 }} />
                    <TextInput autoFocus={true} placeholder="Search" style={{ flexShrink: 1, width: '100%', height: '100%' }} />
                </View>
            </View>
            {/* Search history here... */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30, rowGap: 20, paddingHorizontal: 25 }}>
                <Text style={{marginBottom: 20}}>Lastest search</Text>
                <View style={{ rowGap: 25, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                        <EvilIcons name="clock" size={20} color="black" />
                        <Text style={{ flex: 1 }}>HD Wireless</Text>
                        <Feather name="x" size={15} color="black" />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                        <EvilIcons name="clock" size={20} color="black" />
                        <Text style={{ flex: 1 }}>Cable</Text>
                        <Feather name="x" size={15} color="black" />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                        <EvilIcons name="clock" size={20} color="black" />
                        <Text style={{ flex: 1 }}>Cable</Text>
                        <Feather name="x" size={15} color="black" />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Pressable><Text style={{ fontSize: 12 }}>Show more</Text></Pressable>
                </View>

                {/* product popular here... */}
                <View style={{}}>
                    <Text style={{ fontSize: 16, marginBottom: 16 }}>Popular product</Text>
                    {products.map(product => (
                        <View key={product.id} style={{ flexDirection: 'row', marginBottom: 25, columnGap: 15 }}>
                            <View style={{ height: 75, width: 75, backgroundColor: '#F6F6F6' }}>
                                <Image source={product.image} style={{ resizeMode: 'cover', height: '100%', width: '100%' }} />
                            </View>
                            <View style={{flex: 1 }}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>{product.name}</Text>
                                <Text style={{ flex: 1, fontWeight: 'bold' }}>PH {product.price}</Text>
                                <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 3}}>
                                        <Image source={require('../assets/star_filled.png')} style={{resizeMode: 'cover', width: 16, height: 16}} />
                                        <Text style={{fontSize: 12}}>{product.rating}</Text>
                                    </View>
                                    <Text style={{fontSize: 12, flex: 1}}>{product.reviews} Reviews</Text>
                                    <Entypo name="dots-three-vertical" size={12} color="black" />
                                </View>
                            </View>
                        </View>
                    ))}
                    {/* duplicate product just for test starts here... */}
                    {products.map(product => (
                        <View key={product.id} style={{ flexDirection: 'row', marginBottom: 25, columnGap: 15 }}>
                            <View style={{ height: 75, width: 75, backgroundColor: '#F6F6F6' }}>
                                <Image source={product.image} style={{ resizeMode: 'cover', height: '100%', width: '100%' }} />
                            </View>
                            <View style={{flex: 1 }}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>{product.name.substring(0, 20) + '...'}</Text>
                                <Text style={{ flex: 1, fontWeight: 'bold' }}>PH {product.price}</Text>
                                <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 3}}>
                                        <Image source={require('../assets/star_filled.png')} style={{resizeMode: 'cover', width: 16, height: 16}} />
                                        <Text style={{fontSize: 12}}>{product.rating}</Text>
                                    </View>
                                    <Text style={{fontSize: 12, flex: 1}}>{product.reviews} Reviews</Text>
                                    <Entypo name="dots-three-vertical" size={12} color="black" />
                                </View>
                            </View>
                        </View>
                    ))}
                    {/* duplicate product just for test ends here... */}
                </View>
            </ScrollView>
        </View>

    )
}

