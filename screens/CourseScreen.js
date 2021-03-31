import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { Button, Icon, Avatar, ListItem } from 'react-native-elements';

const CourseScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
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
            Welcome to ECE ___
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Room')
            }>
            <Text>General Course Room</Text>
            <Avatar
                size="small"
                overlayContainerStyle={{backgroundColor: 'blue'}}
                rounded
                title={"CB"}
                activeOpacity={0.7}
                onPress={ () => navigation.navigate('FriendInformation') }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Room')
            }>
            <Text>Room 1</Text>
            <Avatar
                size="small"
                overlayContainerStyle={{backgroundColor: 'blue'}}
                rounded
                title={"JL"}
                activeOpacity={0.7}
                onPress={ () => navigation.navigate('FriendInformation') }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Room')
            }>
            <Text>Room 2</Text>
            <Avatar
                size="small"
                overlayContainerStyle={{backgroundColor: 'blue'}}
                rounded
                title={"SG"}
                activeOpacity={0.7}
                onPress={ () => navigation.navigate('FriendInformation') }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Room')
            }>
            <Text>Room 3</Text>
            <Avatar
                size="small"
                overlayContainerStyle={{backgroundColor: 'blue'}}
                rounded
                title={"AM"}
                activeOpacity={0.7}
                onPress={ () => navigation.navigate('FriendInformation') }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Room')
            }>
            <Text>Room 4</Text>
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
export default CourseScreen;