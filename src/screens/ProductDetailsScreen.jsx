import { StyleSheet, Text, StatusBar, Image, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const sizes = ["S", "M", "L", "XL", "XXL"];
const colorsArr = ["#E44236", "#3498DB", "#6AB04A", "#777E8B", "#2C3335", "#F5BCBA"]
const ProductDetailsScreen = () => {
    const navigation= useNavigation();
    const{addToCart}= useContext(CartContext);
    const route= useRoute();
    const item= route.params.item;
   // console.log(route.params.item);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const handleAddToCart= (item)=>{
        item.size=selectedSize;
        item.color=selectedColor
        addToCart(item);
        navigation.navigate("Cart")
    }
    return (
        <LinearGradient colors={['#F9DDA4', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.description}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={[styles.title, styles.price]}>${item.price}</Text>
            </View>
            <View style={styles.sizeContainer}>
                <Text style={[styles.title, styles.sizeText]}>Size</Text>
                {
                    sizes.map((size,index) => {
                        return (
                            <TouchableOpacity
                            key={index} style={styles.sizeValueContainer} onPress={() => {
                                setSelectedSize(size);
                            }}>
                                <Text style={[styles.sizeValue, selectedSize == size && { color: '#E5B143' }]}>{size}</Text>
                            </TouchableOpacity>
                        );
                    })
                }

            </View>
            <View style={styles.colorContainer}>
                <Text style={[styles.title, styles.colorText]}>Colors</Text>
                {
                    colorsArr.map((color,index) => {
                        return (
                            <TouchableOpacity 
                            key={index}
                            onPress={() => {
                                setSelectedColor(color);
                            }} style={[styles.circleBorder, selectedColor === color && {
                                borderColor: color,
                                borderWidth: 2,
                            },]}>
                                <View style={[styles.circle,
                                { backgroundColor: color }
                                ]}></View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <TouchableOpacity onPress={()=>{
                handleAddToCart(item);
            }} style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    headerContainer: {
        padding: 10,
    },
    coverImage: {
        width: '100%',
        height: 385,
    },
    contentContainer: {
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        marginVertical: 12,
        marginHorizontal: 10,
    },
    priceContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        color: '#535C68',
        fontWeight: '500'
    },
    price: {
        color: '#4D4C4C',

    },
    sizeText: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    sizeContainer: {
        flexDirection: 'row',
    },
    sizeValueContainer: {
        marginLeft: 10,
        height: 34,
        width: 34,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    sizeValue: {
        fontSize: 16,
    },
    colorText: {
        marginHorizontal: 10,
        marginTop: 15,
    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,

    },
    colorContainer: {
        flexDirection: 'row',

    },
    circleBorder: {
        marginTop: 10,
        marginHorizontal: 3,
        height: 36,
        width: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor:'#E5B143',
        padding: 10,
        margin: 10,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    }
})