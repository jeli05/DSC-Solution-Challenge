import * as React from 'react';
import { Button, Icon, Avatar } from 'react-native-elements';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const FriendsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Messages')
            }>
            <Text>My Messages</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('FriendInformation')
            }>
            <Text>Friends Information</Text>
          </TouchableOpacity> */}
        </View>
        <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginTop: 16,
              textDecorationLine: 'underline'
            }}>
            Friends
          </Text>
        <View
          style={{
            flex: 0,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Avatar
            size="medium"
            overlayContainerStyle={{backgroundColor: 'orange'}}
            rounded
            title={'CB'}
            activeOpacity={0.7}
            onPress={ () => navigation.navigate('FriendInformation') }
          />
          <Avatar
            size="medium"
            overlayContainerStyle={{backgroundColor: 'blue'}}
            rounded
            title={'JL'}
            activeOpacity={0.7}
            onPress={ () => navigation.navigate('FriendInformation') }
          />
          <Avatar
            size="medium"
            overlayContainerStyle={{backgroundColor: 'purple'}}
            rounded
            title={'SG'}
            activeOpacity={0.7}
            onPress={ () => navigation.navigate('FriendInformation') }
          />
          <Avatar
            size="medium"
            overlayContainerStyle={{backgroundColor: 'green'}}
            rounded
            title={'AM'}
            activeOpacity={0.7}
            onPress={ () => navigation.navigate('FriendInformation') }
          />
        </View>
        <View
          style={{
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center',
            // justifyContent: 'space-between'
          }}>
        <Text>
          ECE2T3       ECE2T3       EngSci2T3        ECE2T4
        </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default FriendsScreen;