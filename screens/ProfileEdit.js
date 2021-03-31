import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import {useTheme} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';
// import ImagePicker from 'react-native-image-crop-picker';

const ProfileEdit = () => {
        return (
            <View style={styles.container}>
              <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Name: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />
          
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Bio: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />
         </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Section: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />
         </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Preferred Studying Time: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Timezone: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />

         </View>
        <View style={styles.action} >
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Favorite Course: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />  

        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Needs Help On: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />

        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Working On: "
            placeholderTextColor="#666666"
            autoCorrect={false}
        
          />

        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#666666" size={20} />
          <TextInput
            placeholder="Hobbies: "
            placeholderTextColor="#666666"
            autoCorrect={false}
           
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 20,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 20,
  },
  panelTitle: {
    fontSize: 35,
    height: 37,
  },
  panelSubtitle: {
    fontSize: 35,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 8, // changed from 10 to 8 so that "Submit" shows
    marginBottom: 5, // changed from 10 to 5 so that "Submit" shows
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop:15,
    paddingLeft: 15,
    color: '#05375a',
  },
});