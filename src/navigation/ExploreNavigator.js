import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResultsScreen from '../screens/SearchResults';


const Stack = createStackNavigator();

const Router = (props) => {
        return (
            <Stack.Navigator>
                    <Stack.Screen
                        name={'Welcome'}
                        component={HomeScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name={'SearchResults'}
                        component={SearchResultsScreen}
                        options={{
                            title: 'Search your destination',
                        }}
                    />
            </Stack.Navigator>
        );
};

export default Router;