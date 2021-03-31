import * as React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({ route, navigation }) => {
   return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
      <View
          style={{
            marginTop: 15,
            flex: 0,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Icon
            name='gear'
            type='evilicon'
            color='#517fa4'
            onPress={
              () => navigation.navigate('Settings')
            }
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>

          <Avatar.Image 
            //source={{
            //pic of person  ,
            //}}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>My Profile</Title>
            
            <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('ProfileEdit')
            }>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
            
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          {/* <Icon name="Bio" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>Add anything you want</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="profile" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>First name_last name</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Email" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>emailid@mail.utoronto.ca</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Section" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>101/102</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Preferred studying time" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>24 hour clock</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Timezone" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>__EST time</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Favorite Course" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>JRE 420</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Needs help on" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>ECE291</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Working on" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>APS263</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="Hobbies" color="#777777" size={40}/> */}
          <Text style={{color:"#777777", marginLeft: 30}}>Activities of choice</Text>
        </View>
      </View>
     
    </SafeAreaView>
  );
};


export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  
  },

});