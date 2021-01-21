import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {

    const post = props.post;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: 'https://www.andorrabybus.com/blog/wp-content/uploads/2019/02/mejores-pistas-esqui-andorra-740x350.jpg'}}            
            />

            <Text style={styles.time}>Excursion de un dia</Text>

            <Text style={styles.description} numberOfLines={3}>Excursion a Andorra en temporada de invierno para esquiar. Estaremos todo el dia. Hara un dia muy bonito para hacer cualquier actividad bonita.</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>36€ </Text>
                <Text style={styles.price}> 30€</Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>19,99€ total</Text>
        </View>
    )
}

export default Post
