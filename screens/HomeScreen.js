import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Pressable, Modal } from "react-native";
import { Octicons } from '@expo/vector-icons';
import Header from "../components/Header"
import SingleFeaturedProduct from "../components/SingleFeaturedProduct";
import MultipleFeaturedProduct from "../components/MultipleFeaturedProduct";
import SearchScreen from "./SearchScreen";
import { useNavigation } from "@react-navigation/native";

// import fonts here...
export default function HomeScreen() {

    const navigation = useNavigation()

    const products = [
        { id: 1, name: 'HD Wireless Headphone 11', image: require('../assets/products/headphone.png'), category: 'headphones', rating: 86.32, reviews: 86, price: 350 },
        { id: 2, name: 'Cable Headphone 11', image: require('../assets/products/cable.png'), category: 'cable', rating: 100, reviews: 86, price: 25 },
        { id: 3, name: 'Cable Headphone 12', image: require('../assets/products/cable.png'), category: 'cable', rating: 20, reviews: 16, price: 125 },
    ]
    const [dataList, setDataList] = useState(products)
    const [category, setCategory] = useState('headphones')

    const filteredProducts = (item) => {

        if (dataList.category !== item) {

            setDataList([...products.filter(e => e.category === item)])
        } else {
            setDataList(products)
        }
        setCategory(item)
    }

    const showSearch = () => {
        setShowModal(true)
    }

    const uniqueProductNames = [...products.reduce((map, obj) => map.set(obj.category, obj), new Map()).values()]
    const [showModal, setShowModal] = useState(false)
    
    const navigateToLoginScreen = () => {
        navigation.navigate('Login')
    }

    return (

        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: 20, }}>
                <Header onPress={navigateToLoginScreen} />
                <View style={{ flexBasis: 50, marginTop: 20, backgroundColor: 'white', paddingHorizontal: 24 }}>
                    <Pressable style={{ backgroundColor: 'white', height: '100%', alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderColor: '#BABABA', borderRadius: 10 }} onPress={showSearch}>
                        <Octicons name="search" size={20} color="#BABABA" style={{ paddingLeft: 15, paddingEnd: 12 }} />
                        <Text style={{ color: '#BABABA' }}>Search Items: headphone</Text>
                    </Pressable>
                </View>

            </View>
            <View style={{ backgroundColor: '#f6f6f6', marginTop: 19, borderRadius: 30, paddingLeft: 24, paddingVertical: 32 }}>

                <ScrollView horizontal scrollEventThrottle={1} showsHorizontalScrollIndicator={false} style={styles.scrollView} alignItems={'center'}>
                    {uniqueProductNames.map((item, index) => (
                        <Pressable key={item.id}
                            style={{ marginRight: 11, backgroundColor: category === item.category ? '#0ACF83' : '#f1f1f1', height: 25, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, borderRadius: 50 }}
                            onPress={() => filteredProducts(item.category)}
                        >
                            <Text style={{ color: category === item.category ? '#fff' : '#7F7F7F', fontSize: 14 }}>{item.category}</Text>
                        </Pressable>
                    ))}
                </ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text>Featured Products</Text>
                    <Text style={{ marginRight: 24, color: '#7F7F7F' }}>See All</Text>
                </View>
            </View>

            <View style={{ backgroundColor: 'white', flexBasis: 190 }}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    data={dataList}
                    renderItem={
                        ({ item }) => <SingleFeaturedProduct item={item} />
                    }
                />
            </View>
            {/* featured product here... */}
            <View style={{ flexGrow: 1, backgroundColor: 'white', flexDirection: 'row', paddingLeft: 24 }}>
                <FlatList
                    key={(item) => item.id.toString()}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    data={dataList}
                    renderItem={
                        ({ item }) => <MultipleFeaturedProduct item={item} />
                    }
                />
            </View>
            {/* Search screen is here... */}
            <Modal
                visible={showModal}
                animationType="fade"
                transparent
                onRequestClose={() => setShowModal(false)}
            >

                <SearchScreen showModal={showModal} setShowModal={setShowModal} />
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    scrollView: {
        height: 25,
    },

})
