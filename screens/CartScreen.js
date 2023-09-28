import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, useWindowDimensions, ScrollView, Image } from "react-native";

import { MaterialIcons, Feather } from '@expo/vector-icons';
import CartList from "../components/CartList";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

export default function CartScreen({ navigation }) {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

    const products = [
        { id: 1, name: 'HD Wireless Headphone 11', image: require('../assets/products/headphone.png'), category: 'headphones', rating: 86.32, reviews: 86, price: 350 },
        { id: 2, name: 'Cable Headphone 11', image: require('../assets/products/cable.png'), category: 'cable', rating: 100, reviews: 86, price: 25 },
        { id: 3, name: 'Cable Headphone 12', image: require('../assets/products/cable.png'), category: 'cable', rating: 20, reviews: 16, price: 125 },
    ]

    const filteredProducts = (item) => {
        if (dataList.category !== item) {
            setDataList([...products.filter(e => e.category === item)])

        } else {
            setDataList(products)
        }
        setCategory(item)
        console.log(item)
    }

    const uniqueProductNames = [...products.reduce((map, obj) => map.set(obj.category, obj), new Map()).values()]
    console.log(uniqueProductNames)
    const [category, setCategory] = useState('headphones')
    const [dataList, setDataList] = useState(products)
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 17, paddingHorizontal: 24 }}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="black" style={{ fontWeight: 'bold' }} onPress={() => navigation.push('Main')} />
                <Text style={{ fontWeight: 'bold' }}>Shipping Cart</Text>
                <Text style={{ fontWeight: 'bold' }}>Edit</Text>
            </View>

            {/* cart lists here... */}
            <View style={{ backgroundColor: 'white', flexBasis: 312, paddingHorizontal: 24, marginTop: 5 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                    <CartList />
                </ScrollView>
            </View>
            {/* checkout button here  */}
            <View style={{ flexDirection: 'column', paddingHorizontal: 24, rowGap: 6 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 12 }}>Total 7 Items</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>PH 1,675</Text>
                </View>
                <Pressable style={{ backgroundColor: '#0ACF83', height: 42, width: windowWidth - 500, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <Text style={{ color: 'white' }}>Checkout</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={25} color="white" style={{ position: 'absolute', right: 22 }} />
                </Pressable>
            </View>
            {/* Featured products her ...  */}
            <View style={{ backgroundColor: '#F6F6F6', flexBasis: 85, marginTop: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 24, paddingHorizontal: 24, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <Text>Featured Products</Text>
                <Text style={{ color: '#7F7F7F' }}>See All</Text>
            </View>
            {/* category button here...  */}
            <View style={{ paddingLeft: 24, marginTop: 3 }}>
                <ScrollView horizontal scrollEventThrottle={1} showsHorizontalScrollIndicator={false} style={styles.scrollView} alignItems={'center'}>
                    {uniqueProductNames.map((item, index) => (
                        <Pressable key={item.id}
                            style={{ marginRight: 11, backgroundColor: category == item.category ? '#0ACF83' : '#f1f1f1', height: 25, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, borderRadius: 50 }}
                            onPress={() => filteredProducts(item.category)}
                        >
                            <Text style={{ color: category === item.category ? '#fff' : '#7F7F7F', fontSize: 14 }}>{item.category}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
            {/* categorie list here... */}
            <View style={{ backgroundColor: 'white', flexGrow: 1, paddingVertical: 10 }}>
                <FlatList
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    keyExtractor={(item) => item.id.toString()}
                    data={dataList}
                    renderItem={({ item }) => (
                        <View style={{ width: 313, height: 124, backgroundColor: 'white', marginLeft: 24, borderRadius: 10, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between', flexWrap: 'wrap', position: 'relative', elevation: 10, shadowColor: '#333', }}>
                            <View style={{ width: 313 / 2, height: '100%', paddingHorizontal: 24 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 25, flexShrink: 0, marginTop: 10 }}>{item.name.substring(0, 15) + '...'}</Text>
                                <View style={{ position: 'absolute', bottom: 0, right: -20, flexDirection: 'row' }}>
                                    <Text style={{ color: '#0ACF83' }}>Shop now</Text>
                                    <Feather name="arrow-right" size={20} color="#0ACF83" />
                                </View>
                            </View>

                            <View style={{ flexGrow: 1, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={item.image} style={{ width: 120, height: 120, resizeMode: 'cover' }} />
                            </View>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        height: 25,
    },
})

