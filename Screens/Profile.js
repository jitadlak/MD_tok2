import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = ({navigation}) => {
  const  signOut=async()=>{
await auth()
.signOut()
.then(() => storeData());
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('user', 'false' )
      navigation.replace("LoginScreen")
      console.log('async storage set blank')
    } catch (e) {
      console.log('async storage not set')
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          alignSelf: "center",
          marginTop:10,
          fontSize: 23,
          fontWeight: "bold",
          color:'black'
        }}
      >
        Profile
      </Text>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginBottom: 13 }}>
          <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-l889V8_Nv64SYZECELEBUzvWgmgxdlAow&usqp=CAU',
          }}
            style={{
              borderWidth: 3,
              borderColor: "#32B7BA",
              borderRadius: 111,
              width: 118,
              height: 118,
            }}
          />
        </View>
        <Text style={{ fontSize: 26, fontWeight: "bold", paddingBottom: 6 }}>
          Geetesh Sahu
        </Text>
        <Text style={{ fontSize: 19, color: "#32B7BA" , paddingBottom: 36}}>Heart Surgeon</Text>
        <TouchableOpacity style={styles.button} onPress={()=>signOut()}>
          <Text style={{alignSelf:'center',color:'white'}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    button: {
        padding: 23,
        borderRadius: 13,
        backgroundColor: "#32B7BA",
        width:'85%'
      },
});