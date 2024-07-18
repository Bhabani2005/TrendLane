import { StyleSheet, Text, Image, View, StatusBar } from 'react-native'
import React from 'react'

const CardComponent = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.card_container}>
                <Image style={styles.CardImg} source={require("../assets/images/noise watch.jpg")} />
                <View style={styles.card_content} >
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.card_desc}>Noise Icon Buzz 1.69" Display with Bluetooth Calling, Built-In Games, Voice Assistant Smartwatch  (Deep Wine Strap, Regular)</Text>
                    <Text style={styles.card_desc}>MRP:1199 </Text>
                    <Text style={styles.card_desc}>Discount: 25% </Text>
                </View>
            </View>
        </View>
    )
}

export default CardComponent

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
    },
    card_container: {
        width: 320,
        height: 450,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 10,
        shadowColor:'#000',
        shadowOffset: {width: 0 , height: 1},
    },
    CardImg: {
        height: 250,
       width: '100%',
        resizeMode: 'cover',
        elevation: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    card_content: {
        minHeight: 180,
        margin: 10,
        backgroundColor:'#f9f9f9'
    },
    cardTitle: {
       fontSize: 20,
       fontWeight:'bold'
    },
    card_desc: {
        marginVertical: 2,

    }
})