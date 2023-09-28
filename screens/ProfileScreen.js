import React from "react";
import { View, Text, Image, ImageBackground, FlatList, Dimensions, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';
import { Helvetica, Poppins } from '../styles/GlobalStyles'

export default function ProfileScreen() {
    const { width, height } = Dimensions.get('window')
    const categories = [
        { status: 'To Pay' },
        { status: 'To Ship' },
        { status: 'To Received' },
        { status: 'Delivered' },
        { status: 'Cancel' },
    ]
    const products = [
        { id: 1, name: 'Dell 22 monitor - P2222222222222', image: require('../assets/products/product01.png') },
        { id: 2, name: 'Dell 22 monitor - SE2222H', image: require('../assets/products/product02.png') },
        { id: 3, name: 'Dell 22 monitor - SE2222H', image: require('../assets/products/product03.png') },    
        { id: 4, name: 'Dell 22 monitor - SE2222H', image: require('../assets/products/product04.png') },    
    ]
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ backgroundColor: 'white', height: 175, zIndex: 20 }}>
                <ImageBackground source={require('../assets/timeline.png')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover', position: 'relative' }} >
                    <LinearGradient
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        colors={["#03D484", '#03D48400']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../assets/profile.png')} style={{ width: 47, height: 47, borderRadius: 100 / 2, resizeMode: 'cover' }} />
                            <Text style={Poppins.profileNameStyle}>Jul Pundng</Text>
                            <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                <Text style={Helvetica.profileHeaderContent}>Following 50</Text>
                                <Text style={Helvetica.profileHeaderContent}>Followers 25</Text>
                            </View>
                        </View>
                    </LinearGradient>
                    <Feather name="settings" size={24} color="white" style={{ position: 'absolute', bottom: 14, right: 7 }} />
                </ImageBackground>
            </View>
            {/* categry button starts here... */}
            <View style={{ height: 52, width, backgroundColor: 'white', elevation: 3, shadowColor: '#000000' }}>
                <FlatList
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    data={categories}
                    renderItem={({ item }) => (
                        <Pressable style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 14 }} onPress={() => alert(item.status)}>
                            <Text style={[Poppins.categoryStyle, { marginRight: 25 }]}>{item.status}</Text>
                        </Pressable>
                    )}
                />
            </View>
            {/* categry button ends here... */}
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 29, alignItems: 'flex-end' }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000000' }}>Featured Products</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#7F7F7F' }}>See All</Text>
            </View>

            {/* featured products starts here... */}
            <View style={{backgroundColor: 'white', marginTop: 16 }}>
                <FlatList
                    horizontal
                    data={products}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={{backgroundColor: 'white', marginRight: 22, width: 175, height: 197, alignItems: 'center', paddingVertical: 7}}>
                            <Image source={item.image} style={{height: 125, width: 125}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14}}>{item.name.substring(0, 20) + '...'}</Text>
                            <Pressable style={{height: 24, backgroundColor: '#4CD964', width: 131, alignSelf: 'center', borderRadius: 100 / 2, alignItems: 'center', justifyContent: 'center', marginTop: 7}}><Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium', color: '#ffffff'}}>VIEW DETAILS</Text></Pressable>
                        </View>
                    )}
                />
            </View>
            {/* featured products ends here... */}

            {/* check other items starts here ...  */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 29}}>
                <Text>Check other Items</Text>
            </View>
            {/* check other items ends here ...  */}
        </View>
    )
}