import { StyleSheet, Image, Text, StatusBar, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  const navigation = useNavigation();
  const handleLogin= ()=> {
    navigation.navigate("Login")
  };
  return (
    <View style={styles.container}>

      <Text style={styles.welcometxt}>Your one-stop shop for amazing deals and endless discoveries!</Text>

      <Image source={require("../assets/images/homescreen.png")} style={styles.homeimg} />
      <Text style={styles.subtitle}>Start shopping with</Text>
      <Text style={styles.appname}>TrendLane

      </Text>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style= {[styles.loginButtonWrapper,{backgroundColor:'#4834DF'}]}
        onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  homeimg: {
    height: 300,
    width: 450,
    resizeMode: "center",
    marginLeft: 30,
    //paddingBottom: 30,
  },
  welcometxt: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 25,
    //marginVertical: 20,
  },
  appname: {
    fontSize: 15,
    fontWeight: '500',
    //marginVertical: 20,
  },
  buttoncontainer: {
    flexDirection: 'row',
    marginVertical: 40,
    borderWidth: 2,
    borderColor: '#252f40',
    width: '80%',
    height: 60,
    borderRadius: 70,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    //backgroundColor: '#4834DF',
    borderRadius: 67,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontFamily:'Poppins',
  },
  signupButtonText: {
   
    fontSize: 16,
    fontFamily:'Poppins',
  },
});





