import React from "react";
import {Text, Pressable } from "react-native"

export default function PressableComponent(props) {
    return (
        <Pressable style={[
            {
            backgroundColor: props.green, 
            height: props.heightButton,
            alignItems: props.alignItemsCenter,
            justifyContent: props.justifyContenCenter,
            borderRadius: props.borderRounded
        }]}
            onPress={props.onPress}
        >
            <Text style={[props.fontFamily]}>{props.title}</Text>
        </Pressable>
    )
}