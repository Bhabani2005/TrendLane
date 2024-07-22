import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image source={require('../assets/images/applogo.png')} style={styles.appIcon} />
      </View>
      <View style={styles.profileIconContainer}>
        <Image source={require('../assets/images/profilepic.jpg')} style={styles.profileIcon}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  appIcon: {
    height: 80,
    width: 80,
    marginTop: 3,
  },
  appIconContainer: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconContainer:{
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -3,
  },
  profileIcon: {
    height: 58,
    width: 58,
    borderRadius: 29,
  }

})