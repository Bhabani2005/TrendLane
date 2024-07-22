import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Modal,
  Platform,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation= useNavigation();
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { colors } = useTheme();
  const handleGoback = () => {
    navigation.goBack();
};

  const takePhotoFromCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
          setIsModalVisible(false);
        } else if (response.errorCode) {
          console.log(response.errorMessage);
        }
      }
    );
  };

  const choosePhotoFromLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
          setIsModalVisible(false);
        } else if (response.errorCode) {
          console.log(response.errorMessage);
        }
      }
    );
  };

  const renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => setIsModalVisible(false)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Hide the picker
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoback}>
                <FontAwesome6 name={"arrow-left"} color="black" size={25} />
            </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {renderModalContent()}
        </View>
      </Modal>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <View style={styles.imageContainer}>
              <ImageBackground
                source={{ uri: image }}
                style={styles.image}
                imageStyle={{ borderRadius: 15 }}
              >
                <View style={styles.imageOverlay}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={styles.cameraIcon}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={styles.nameText}>Bhabani Charan Panda</Text>
        </View>

        {['First Name', 'Last Name'].map((placeholder, index) => (
          <View style={styles.action} key={index}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, { color: colors.text }]}
            />
          </View>
        ))}

        <View style={styles.row}>
          <View style={styles.pickerContainer}>
            <View style={styles.action }>
              <FontAwesome name="venus-mars" color={colors.text} size={20} />
              <Picker
                selectedValue={gender}
                style={[styles.picker, { color: colors.text }]}
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                <Picker.Item  label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>

          <View style={styles.pickerContainer}>
            <View style={styles.action}>
              <Feather name="calendar" color={colors.text} size={20} />
              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
                <Text style={[styles.textInput, { color: colors.text }]}>
                  {dob ? dob.toDateString() : 'Select Date'}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={dob || new Date()}
                  mode="date"
                  display="default"
                  onChange={onDateChange}
                />
              )}
            </View>
          </View>
        </View>

        {['Phone', 'Email', 'Country', 'City'].map((placeholder, index) => (
          <View style={styles.action} key={index + 2}>
            {index === 0 ? (
              <Feather name="phone" color={colors.text} size={20} />
            ) : index === 1 ? (
              <FontAwesome name="envelope-o" color={colors.text} size={20} />
            ) : index === 2 ? (
              <FontAwesome name="globe" color={colors.text} size={20} />
            ) : (
              <Icon name="map-marker-outline" color={colors.text} size={20} />
            )}
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, { color: colors.text }]}
              keyboardType={index === 0 ? 'number-pad' : index === 1 ? 'email-address' : 'default'}
            />
          </View>
        ))}
        
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
},
  container: {
    marginTop:70,
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E5B143',
    alignItems: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textput: {
    fontSize:1,
  },
  modalContent: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#E5B143',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginVertical:5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  picker: {
    flex: 1,
  },
  dateInput: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: -15,
    marginBottom: -15,
    height:60,
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 1,

  },
  datePicker: {
    width: '100%',
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  imageOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    opacity: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FF6347',
    borderRadius: 20,
    padding: 10,
    paddingTop:15,
    paddingLeft:15,
  },
  nameText: {
    fontSize: 25,
    color: '#ab2007',
  },
});
