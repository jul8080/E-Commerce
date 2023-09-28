import React from "react";
import HomeScreen from "./HomeScreen";
import OrderScreen from "./OrderScreen";
import CartScreen from "./CartScreen";
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import ProfileScreen from "./ProfileScreen";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from "./SettingScreen";
const BottomTab = createBottomTabNavigator();

export default function Main() {

    return (
        <BottomTab.Navigator

            screenOptions={({ route }) => ({
                tabBarStyle: {height: 40, paddingTop: 2},
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = "home"
                        // color = focused ? '#333' : '#7F7F7F'
                    } else if (route.name === 'Orders') {
                        iconName = "clipboard"
                        size = focused ? 20 : 19
                        // color = focused ? '#333' : '#7F7F7F'
                    } else if (route.name === 'Cart') {
                        iconName = "shopping-cart"
                        size = focused ? 20 : 19
                        // color = focused ? '#333' : '#7F7F7F'
                    } else if (route.name === 'Profile') {
                        iconName = "user"
                        size = focused ? 20 : 19
                        // color = focused ? '#333' : '#7F7F7F'
                    } else if (route.name === 'Settings') {
                        iconName = "settings"
                        size = focused ? 20 : 19
                        // color = focused ? '#333' : '#7F7F7F'
                    }
                    return (<Feather name={iconName} size={size} color={color} /> )
                },
                tabBarActiveTintColor: '#333',tabBarInactiveTintColor: '#7F7F7F', headerShown: false,
            }
            )}
            
            >
            <BottomTab.Screen name="Home" component={HomeScreen}  />
            <BottomTab.Screen name="Orders" component={OrderScreen}  />
            <BottomTab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: 3, tabBarBadgeStyle: {top: -5} }} />
            <BottomTab.Screen name="Profile" component={ProfileScreen}  />
            <BottomTab.Screen name="Settings" component={SettingScreen} />
        </BottomTab.Navigator>
    )
}
