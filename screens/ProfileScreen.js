import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Profile: Feel free to edit this page as you wish
          </Text>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Home')
            }>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text>Open Detail Screen</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Settings')
            }>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
        </Text>
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
export default ProfileScreen;