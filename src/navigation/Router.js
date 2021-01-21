import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import GuestsScreen from '../screens/Guests'
import DestinationSearchScreen from '../screens/DestinationSearch'
import HomeTabNavigator from './HomeTabNavigator'
import Post from '../components/Post'

const Stack = createStackNavigator(); 

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                }}
                />

                <Stack.Screen
                    name={"Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title: "Search"
                }}
                />

                <Stack.Screen
                    name={"Saved"}
                    component={GuestsScreen}
                    options={{
                        title: "Saved"
                }}
                />

                <Stack.Screen
                    name={"Profile"}
                    component={Post}
                    options={{
                        title: "Profile"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
