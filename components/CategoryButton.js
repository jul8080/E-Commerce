import React, { useState } from "react";
import { StyleSheet, Text, Pressable, ScrollView } from "react-native";


export default function CategoryButton({ search, setSearch }) {
    console.log(search)
    const categories = [
        { text: 'Headphone' },
        { text: 'Mobile' },
        { text: 'Earpads' },
        { text: 'Cable1' },
        { text: 'Cable2' },
        { text: 'Cable3' },
    ]
    const [active, setActive] = useState(0)

    const swithCategory = (category, index) => {

        setSearch(category.text)
        setActive(index)
    }
    return (
        <ScrollView horizontal scrollEventThrottle={1} showsHorizontalScrollIndicator={false} style={styles.scrollView} alignItems={'center'}>
            {categories.map((category, index) => (
                <Pressable key={category.text}
                    style={{ marginRight: 11, backgroundColor: active == index ? '#0ACF83' : '#f1f1f1', height: 25, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, borderRadius: 50 }}
                    onPress={() => swithCategory(category, index)}
                >
                    <Text style={{ color: active === index ? '#fff' : '#7F7F7F', fontSize: 14 }}>{category.text}</Text>
                </Pressable>
            ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollView: {
        height: 25,
    }
})