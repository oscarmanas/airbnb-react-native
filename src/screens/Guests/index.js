import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native'

const GuestScreen = (props) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();
    
        return (
        <View style={{justifyContent: 'space-between', height: '100%'}}> 
            <View>
                <View style={styles.row}> 
                    <View>
                        <Text style={{fontWeight:'bold'}}>Adults</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
                    </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable 
                    onPress={() => setAdults(Math.max(0, adults - 1))} 
                    style={styles.button}
                >
                    <Text style={{fontSize: 20, color:'#474747',}}>-</Text>
                </Pressable>
                
                <Text style={{marginHorizontal: 20, fontSize: 16,}}>{adults}</Text>
                
                <Pressable
                    onPress={() => setAdults(adults + 1)} 
                    style={styles.button}
                >
                    <Text style={{fontSize: 20, color:'#474747',}}>+</Text>
                </Pressable>
                </View>
                </View>

                <View style={styles.row}> 
                    <View>
                        <Text style={{fontWeight:'bold'}}>Children</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 2 to 12</Text>
                    </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable 
                    onPress={() => setChildren(Math.max(0, children - 1))} 
                    style={styles.button}
                >
                    <Text style={{fontSize: 20, color:'#474747',}}>-</Text>
                </Pressable>
                
                <Text style={{marginHorizontal: 20, fontSize: 16,}}>{children}</Text>
                
                <Pressable
                    onPress={() => setChildren(children + 1)} 
                    style={styles.button}
                >
                    <Text style={{fontSize: 20, color:'#474747',}}>+</Text>
                </Pressable>
                </View>
                </View>

                <View style={styles.row}> 
                    <View>
                        <Text style={{fontWeight:'bold'}}>Infants</Text>
                        <Text style={{color: '#8d8d8d'}}>Under 2</Text>
                    </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable 
                    onPress={() => setInfants(Math.max(0, infants - 1))} 
                    style={styles.button}
                >
                    <Text style={{fontSize: 20, color:'#474747',}}>-</Text>
                </Pressable>
                
                <Text style={{marginHorizontal: 20, fontSize: 16,}}>{infants}</Text>
                
                <Pressable
                    onPress={() => setInfants(infants + 1)} 
                    style={styles.button}
                >
                    <Text style={{fontSize: 20, color:'#474747',}}>+</Text>
                </Pressable>
                </View>
                </View>
            </View>
        
            <Pressable 
            onPress={() => navigation.navigate('home',{
                screen: 'Home',
                params: {
                    screen:'SearchResults',
                },
            })}
            style={{
                marginBottom: 20, 
                backgroundColor: '#f15454',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                borderRadius: 10,
                marginHorizontal: 20
                }}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold',}}>Search</Text>
            </Pressable>
        
        </View>
        );
};

export default GuestScreen;