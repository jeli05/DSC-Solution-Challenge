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

const CreateProfileScreen = ({navigation}) => {

    const [bio, setBio] = React.useState();
    const [section, setSection] = React.useState();
    const [preferredTime, setPreferredTime] = React.useState();
    const [favouriteCourse, setFavouriteCourse] = React.useState();
    const [needHelp, setNeedHelp] = React.useState();
    const [hobbies, setHobbies] = React.useState();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                 <Text style={styles.titles}>Create Profile</Text>
            </View>

            <View style={styles.footer}>
                <Text>Bio</Text>
                <TextInput
                    multiline
                    placeholder = "Write anything you want about yourself"
                    style={styles.TextInput}  
                    onChangeText={(val)=>setBio(val)} />

                <Text>Lecture Section</Text>
                <TextInput
                    placeholder = "Section"
                    style={styles.TextInput}
                    autoCapitalize = 'none'
                    onChangeText={(val)=>setSection(val)} />

                <Text>Preferred Study Time</Text>
                <TextInput
                    placeholder = "e.g 8 pm - 9 pm" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setPreferredTime(val)} />

                <Text>Favourite Course</Text>
                <TextInput
                    placeholder = "Favourite Course" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setFavouriteCourse(val)} />

                <Text>Needs Help On</Text>
                <TextInput
                    placeholder = "Courses/Subjects/Assignments You're Struggling With" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setNeedHelp(val)} />

                <Text>Hobbies</Text>
                <TextInput
                    multiline
                    placeholder = "Hobbies" 
                    style={styles.TextInput}
                    onChangeText={(val)=>setHobbies(val)} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeStack', { screen: 'HomeScreen'})}
                    style={[styles.button, {
                        boderwidth: 1,
                        borderRadius: 30,
                        borderLeftWidth: 2,
                        borderRightWidth: 2
                    }]}>
                    <Text style={[styles.textSign, {color: '#fff'}]}>Finish</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.button, {
                        borderWidth: 1,
                        marginTop: 30,
                        borderRadius: 30,
                        borderLeftWidth: 2,
                        borderRightWidth: 2
                    }]}>
                        <Text style={styles.textSign}>Go Back</Text>
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
        flex: 3,
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
    TextInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#fff'
    },
    button: {
        color: '#1d4e1f',
        alignItems: 'center',
        marginTop: 20
    },
    textSign: {
        fontSize: 24, 
        fontWeight: 'bold'
    }
});

export default CreateProfileScreen;
