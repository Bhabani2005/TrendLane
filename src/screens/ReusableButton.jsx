import React from 'react';
import { View, Text, Button, StyleSheet,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ReusableButton = () => {
  const handlePress = () => {
    // Handle button press logic here
    console.log('Button pressed');
  };

  return (
    <ImageBackground style={styles.background}>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonContent}>
            <Icon name="check" size={30} color="#fff" />
            <Text style={styles.buttonText}>Success Button</Text>
          </View>}
          onPress={handlePress}
          color="green"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonContent}>
             <Icon name="exclamation" size={30} color="#fff" />
            <Text style={styles.buttonText}>Danger Button</Text>
            </View>}
             
          onPress={handlePress}
          color="red"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonContent}>
            <Icon name="warning" size={30} color="#fff" />
            <Text style={styles.buttonText}>Warning Button</Text>
          </View>}
          onPress={handlePress}
          color="#FAD02E"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonContent}>
            <Icon name="info" size={30} color="#fff" />
            <Text style={styles.buttonText}>Info Button</Text>
          </View>}
          onPress={handlePress}
          color="blue"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={<View style={styles.buttonContent}>
            <Icon name="star" size={30} color="#fff" />
            <Text style={styles.buttonText}>Primary Button</Text>
          </View>}
          onPress={handlePress}
          color="#6200ee"
        />
      </View>
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
   background: {
    flex: 1,
    backgroundColor:'#ffffff',
    //width: null,
    //height: null,
   //resizeMode: 'cover',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    //borderWidth:30,
   // flex:1,
  },
  buttonContainer: {

    borderWidth: 1,
    borderCurve: 10,
    borderRadius: 10,
     marginBottom: 10,
    borderRadius: 10, 
    overflow: 'hidden', 
    marginVertical: 30,
  },
  
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  buttonText: {
    color: '#EAF0F1',
    fontSize: 20,
    marginLeft: 15,
    marginRight:15,
  },
});

export default ReusableButton;