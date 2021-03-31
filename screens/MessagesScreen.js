import * as React from 'react';
import { Button, Icon, Avatar, ListItem } from 'react-native-elements';
import {
    TouchableOpacity,
    FlatList,
    StyleSheet,
    View,
    Text,
    SafeAreaView
  } from 'react-native';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

const list = [
  {
    name: 'Chloe Bell',
    avatar: 'CB',
    color: '#b2e289'
    // subtitle: 'N/A'
  },
  {
    name: 'Stephanie Gao',
    avatar: 'SG',
    color: '#9fa3e3'
    // subtitle: 'N/A'
  },
  {
    name: 'Anmol Mahajan',
    avatar: 'AM',
    color: '#51c0bf'
    // subtitle: 'N/A'
  },
  {
    name: 'Jeff Li',
    avatar: 'JL',
    color: '#8db6c7'
    // subtitle: 'N/A'
  },
  // more items
]

const MessagesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 0,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Icon
            size={50}
            name='pencil'
            type='evilicon'
            color='#517fa4'
            onPress={
              () => navigation.navigate('Chat')
            }
          />
        </View>
        <View
          style={{
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            [Searchbar will go here]
          </Text> */}
        </View>
        <View>
          {
            list.map((l, i) => (
              <ListItem key={i} bottomDivider onPress={ () => navigation.navigate('Chat') }>
                <Avatar
                  size="small"
                  overlayContainerStyle={{backgroundColor: l.color}}
                  rounded
                  title={l.avatar}
                  activeOpacity={0.7}
                  onPress={ () => navigation.navigate('FriendInformation') }
                />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
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
    container: {
      flex: 1,
      paddingTop: 22
     },
     item: {
       padding: 10,
       fontSize: 18,
       height: 44,
     },
  });

export default MessagesScreen;