import React from 'react';
import Post from '../components/Post';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigtor = (props) => {
        return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#f15454',
                indicatorStyle: {
                    backgroundColor:'#f15454',
                }
            }}>
                <Tab.Screen name={'list'} component={Post} />
                <Tab.Screen name={'map'} component={Post} />
            </Tab.Navigator>
        );
};

export default SearchResultsTabNavigtor;