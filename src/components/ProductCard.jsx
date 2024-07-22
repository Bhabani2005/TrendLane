import { StyleSheet, Text, Image, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProductCard = ({ item, handleLiked }) => {
const navigation= useNavigation();
    return (
        <TouchableOpacity onPress={()=> {
            navigation.navigate("Product_details",{item});
        }} style={styles.Container}>
            <Image source={{ uri: item.image }}
                style={styles.coverImage} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.likeContainer}>
                <TouchableOpacity onPress={() => {
                    handleLiked(item);

                }}
                    >
                    {item.isLiked ? (
                        <Entypo name={'heart'} size={28} color={'#E55B5B'} />
                    ) : (<Entypo name={'heart-outlined'} size={28} color={'#E55B5B'} />)}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 10,
        position: 'relative',
        elevation: 10,
    },
    coverImage: {
        height: 256,
        width: '95%',
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 5,

    },
    title: {
        fontSize: 15,
        color: '#535C68',
        fontWeight: '500',

    },
    price: {
        fontSize: 15,
        color: '#535C68',
        fontWeight: '450',
    },
    content: {
        paddingLeft: 12,
    },
    likeContainer: {
        height: 36,
        width: 36,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        position: 'absolute',
        top: 20,
        right: 10,
    },
})