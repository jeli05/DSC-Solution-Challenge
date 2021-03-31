import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button, 
  Dimensions,
  SafeAreaView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const GetStartedScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titles}>CONNECT</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>Study and Connect With Your Peers !</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}>
                        <Text style={[styles.textSign, {color: '#fff'}]}>Get Started</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b2dac6'
    },
    header: {
        flex: 1, 
        backgroundColor: '#c1e1c5',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#7dc47f',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30 
    },
    titles: {
        fontSize: 45,
        color:'#fff'
    },
    text: {
        marginTop: 40,
        marginLeft: 40,
        fontSize: 30,
        color: '#fff'
    },
    button: {
        color: '#1d4e1f',
        alignItems: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderLeftWidth: 2,
        borderRightWidth: 2
    },
    textSign: {
        fontSize: 24, 
        fontWeight: 'bold'
    }
});

export default GetStartedScreen;
