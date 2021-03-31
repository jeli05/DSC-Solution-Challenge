import 'react-native-gesture-handler';

import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { 
  createDrawerNavigator 
} from "@react-navigation/drawer";

import HomeScreen from './screens/HomeScreen';
import CourseScreen from './screens/CourseScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import RoomScreen from './screens/RoomScreen';
import FriendsScreen from './screens/FriendsScreen';
import MessagesScreen from './screens/MessagesScreen';
import ChatScreen from './screens/ChatScreen';
import FriendInformation from './screens/FriendInformation';
import ProfileEdit from './screens/ProfileEdit';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateProfileScreen from './screens/CreateProfileScreen';
import GetStartedScreen from './screens/GetStartedScreen';

import { Settings } from 'react-native';
import { Navigation } from 'react-feather';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { Drawer } from 'react-native-paper';



// credit to https://aboutreact.com/react-native-bottom-navigation/ for main structure

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawers = createDrawerNavigator();   

function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted">
      <Stack.Screen 
        name="GetStarted"
        component={GetStartedScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfileScreen}
        options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Course"
          component={CourseScreen}
          options={{ title: 'Course Page' }} />
        <Stack.Screen
          name="Room"
          component={RoomScreen}
          options={{ title: 'Room Call' }} />
      </Stack.Navigator>
  );
}

function FriendsStack() {
  return (
      <Stack.Navigator
        initialRouteName="Friends"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Friends"
          component={FriendsScreen}
          options={{ title: 'My Friends' }}/>
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={{ title: 'My Messages' }} />
        <Stack.Screen
          name="FriendInformation"
          component={FriendInformation}
          options={{ title: 'My Friends Profile' }}/>
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Chat with ___' }} />
      </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/>
       <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{ title: 'Edit Profile' }}/>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings Page' }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="LoginStack"
          component={LoginStack}
          options={{
            tabBarLabel: 'Log Out',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='logout'
                color={color}
                size={size} />
            ),
           }} />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="FriendsStack"
          component={FriendsStack}
          options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-settings"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
