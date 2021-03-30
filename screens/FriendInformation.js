import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen = () => {

//   const [image, setImage] = useState();
//   const {colors} = useTheme();

//   const takePhotoFromCamera = () => {
//     ImagePicker.openCamera({
//       compressImageMaxWidth: 300,
//       compressImageMaxHeight: 300,
//       cropping: true,
//       compressImageQuality: 0.7
//     }).then(image => {
//       console.log(image);
//       setImage(image.path);
//       this.bs.current.snapTo(1);
//     });
//   }

//   const choosePhotoFromLibrary = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 300,
//       cropping: true,
//       compressImageQuality: 0.7
//     }).then(image => {
//       console.log(image);
//       setImage(image.path);
//       this.bs.current.snapTo(1);
//     });
//   }

//   renderInner = () => (
//     <View style={styles.panel}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={styles.panelTitle}>Upload Photo</Text>
//         <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
//       </View>
//       <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
//         <Text style={styles.panelButtonTitle}>Take Photo</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
//         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={() => this.bs.current.snapTo(1)}>
//         <Text style={styles.panelButtonTitle}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   renderHeader = () => (
//     <View style={styles.header}>
//       <View style={styles.panelHeader}>
//         <View style={styles.panelHandle} />
//       </View>
//     </View>
//   );

//   bs = React.createRef();
//   fall = new Animated.Value(1);

      //return (
    //     <View style={styles.container}>

     //</View> <BottomSheet 
//         ref={this.bs}
//         snapPoints={[330, 0]}
//         renderContent={this.renderInner}
//         renderHeader={this.renderHeader}
//         initialSnap={1}
//         callbackNode={this.fall}
//         enabledGestureInteraction={true}
//       />
//       <Animated.View style={{margin: 20,
//         opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
//     }}>
//         <View style={{alignItems: 'center'}}>
//           <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
//             <View
//               style={{
//                 height: 100,
//                 width: 100,
//                 borderRadius: 15,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <ImageBackground
//                 source={{
//                   uri: image,
//                 }}
//                 style={{height: 100, width: 100}}
//                 imageStyle={{borderRadius: 15}}>
//                 <View
//                   style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <Icon
//                     name="camera"
//                     size={35}
//                     color="#fff"
//                     style={{
//                       opacity: 0.7,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       borderWidth: 1,
//                       borderColor: '#fff',
//                       borderRadius: 10,
//                     }}
//                   />
//                 </View>
//               </ImageBackground>
//             </View>
//           </TouchableOpacity>
        //   <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
        //     Firstname_lastname
        //   </Text>
        // </View>

        return (
        
            <View style={styles.container}>
                            
         <View style={styles.action}>
          <FontAwesome name="user-o" color="##42f4" size={20} />
          <TextInput
            placeholder="First Name__ Last Name"
            placeholderTextColor="##42f4"
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
        <View style={styles.action}>
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
          <Text style={styles.panelButtonTitle}>Send Friend Request</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Send Message</Text>
        </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
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
    shadowOpacity: 1.0,
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
    borderRadius: 6,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 25,
    height: 30,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#42f4',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
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
    marginTop:10,
    paddingLeft: 10,
    color: '#05375a',
  },
});