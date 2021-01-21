import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/HomeScreen';
import DestinationSearchScreen from '../screens/DestinationSearch'
import Guests from '../screens/Guests'
import Post from '../components/Post'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
        }}>
            <Tab.Screen 
                name={"Home"} 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="home" size={34} color={color} />
                    )
                }}    
            />
            <Tab.Screen 
                name={"Search"} 
                component={DestinationSearchScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="search" size={30} color={color} />
                    )
                }}    
            />
            <Tab.Screen 
                name={"Saved"} 
                component={Guests}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="hearto" size={30} color={color} />
                    )
                }}    
            />
            <Tab.Screen 
                name={"Profile"} 
                component={Post}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="user" size={30} color={color} />
                    )
                }}    
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator
