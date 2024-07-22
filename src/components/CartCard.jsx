import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const CartCard = ({ item,deleteItem }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.cartImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.circleContainer}>
                    <View style={[styles.circle, {
                        backgroundColor: item.color
                    }]}></View>
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizeText}>{item.size}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={()=> {
                deleteItem(item);
            }} style={styles.trashbutton}>
                <FontAwesome name={'trash-o'} color={'#F68CB5'} size={25} />
            </TouchableOpacity>


        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    cartImage: {
        height: 130,
        width: '25%',
        borderRadius: 20,
        marginLeft: 10,
    },
    cardContent: {
        flex: 1,
    },
    title: {
        fontSize: 17,
        color: '#444444',
        fontWeight: '500',
        marginLeft: 5,
    },
    price: {
        color: '#797979',
        marginVertical: 10,
        fontWeight: '500',
        marginLeft: 5,
    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },

    circleContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    sizeCircle: {
        backgroundColor: "white",
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    sizeText: {
        fontSize: 16,
        fontWeight: '500'
    },
    trashbutton: {
        marginRight: 10,
    }
})