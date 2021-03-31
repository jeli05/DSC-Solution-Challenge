import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image
  } from 'react-native';

const RoomScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 0.95 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image 
            // style={{ width: 340, height: 500, marginBottom: 0 }}
            source={require('../images/Callv6.png')}/>
          {/* <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            A screenshot of the call interface should suffice for now
          </Text> */}
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
      padding: 0,
      width: 300,
      marginTop: 0,
    },
  });
export default RoomScreen;