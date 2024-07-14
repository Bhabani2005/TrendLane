import { StyleSheet, Text, StatusBar, View, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Fontisto from "react-native-vector-icons/Fontisto"
const Loginscreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper}>
        <FontAwesome6 name={"arrow-left"} color="#4834DF" size={25}/>
      </TouchableOpacity>
      <View style={styles.textcontainer}>
        <Text style={styles.headingtext}>Hey,</Text>
        <Text style={styles.headingtext}>Welcome</Text>
        <Text style={styles.headingtext}>Back</Text>
      </View>
      <View style={styles.formcontainer}>
        <View style={styles.inputcontainer}>
            <Fontisto name={"email"} size={30}color={'#4834DF'}></Fontisto>
            <TextInput/>
        </View>
      </View>
    </View>
  );
};

export default Loginscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: StatusBar.currentHeight,
        padding: 10
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor:'#D9D9D9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textcontainer: {
        marginVertical: 20,
    },
    headingtext: {
        fontSize: 32,
        color: '#1287A5',
        fontFamily: 'Poppins',
    },
    formcontainer: {
        marginTop: 20,

    },
    inputcontainer: {
        borderWidth: 1,
        borderColor: '#252f40',
        borderRadius: 100,
        paddingHorizontal: 20,
        height: 50,
        width: '100%',
    },
})