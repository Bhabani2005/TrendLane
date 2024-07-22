import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const navigation=useNavigation();
  const handleEditProfile= () =>{
    navigation.navigate("EditProfile")
  }
    return (
    <LinearGradient colors={['#F9DDA4', '#FFFBFC']} style={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          source={require('../assets/images/profilepic.jpg')} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>Bhabani Charan Panda</Text>
        <Text style={styles.profileEmail}>pandafromberhampur@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile} >
        <Icon name="person" size={24} />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemText}>Edit Profile</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="location-on" size={24} />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemText}>My Address</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="list" size={24} />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemText}>My Orders</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="credit-card" size={24} />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemText}>My Cards</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="settings" size={24} />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemText}>Settings</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Icon name="logout" size={24} />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemText}>Log Out</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    marginTop:StatusBar.currentHeight,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 10,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '500',
    color:'#757575'
  },
});

export default ProfileScreen;
