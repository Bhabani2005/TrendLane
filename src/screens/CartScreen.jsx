import { StyleSheet, Text, StatusBar, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../components/Header'
import CartHeader from '../components/CartHeader'
import CartCard from '../components/CartCard'
import { CartContext } from '../context/CartContext'

const CartScreen = () => {
    const{carts,totalPrice,deleteItem}= useContext(CartContext);
    return (
        <LinearGradient colors={['#F9DDA4', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <CartHeader isCart={true} />
            </View>
            <FlatList data={carts} ListHeaderComponent={<>
                </>} renderItem={({item})=> <CartCard item={item}
                deleteItem={deleteItem}/>}
                ListFooterComponent={<>
                <View style={styles.priceContainer}>
                <View style={styles.priceAndTitle}>
                    <Text style={styles.text}>Total:</Text>
                    <Text style={styles.text}>{totalPrice}</Text>
                </View>
                <View style={styles.priceAndTitle}>
                    <Text style={styles.text}>Shipping:</Text>
                    <Text style={styles.text}>$0.0</Text>
                </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Grand Total:</Text>
                <Text style={[styles.text, { color: 'black', fontWeight: '600' }]}>${totalPrice.toFixed(2)}</Text>
            </View>
                </>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 80,
                }}
                />
            
            <TouchableOpacity style={styles.checkoutContainer}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    headerContainer: {
        marginBottom: 20,
    },
    priceAndTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 5,
    },
    priceContainer: {
        marginTop: 40,
    },
    text: {
        color: '#757575',
        fontSize: 17,
    },
    divider: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        marginVertical: 10,
    },
    checkoutContainer: {
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