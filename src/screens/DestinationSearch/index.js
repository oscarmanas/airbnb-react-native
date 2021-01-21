import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import searchResults from '../../../src/assets/data/search'
import SuggestionRow from './SuggestionRow'

const DestinationSearchScreen = (props) => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate('Guests')
                    }}
                    fetchDetails
                    styles={{
                        textInput: styles.textInput,
                    }}
                    query={{
                        key: 'AIzaSyAdmusNfspvGyTY9-QFy6V2LLA5hxIObdw',
                        language: 'en',
                        types: '(cities)',
                    }}
                    suppressDefaultStyles
                    renderRow={(item) => <SuggestionRow item={item} />}
                />
        </View>
    );
}

export default DestinationSearchScreen;
