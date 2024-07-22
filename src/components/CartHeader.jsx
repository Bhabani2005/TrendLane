import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
const CartHeader = () => {
    const navigation= useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> {
                navigation.navigate('Home_Stack')
            }} style={styles.appIconContainer}>
                <MaterialIcons name='arrow-back-ios' size={30} color={'#E5B143'} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.myCart}>My Cart</Text>
        </View>
    )
}

export default CartHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        //justifyContent:'space-evenly'
    },
    appIconContainer: {
        backgroundColor: '#FFFFFF',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    backIcon: {
        marginLeft: 8,
    },
    myCart: {
        marginLeft:'20%',
        fontSize: 25,
        color:'black',


    }
})