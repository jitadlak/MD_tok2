import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';
import auth, { firebase } from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({navigation}) => {
  const [email, setemail]= useState('')
  const [password, setPassword]= useState('')
  const [name, setName]= useState('')
  const [mobile, setMobile]= useState('')
  const [specialization, setSpecialization]= useState('')
  const [about, setAbout]= useState('')
  const [rating, setRating]= useState('')
  const [experience, setExperience]= useState('')
  const [fees, setFees]= useState('')
  const [image, setImage]= useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-Rme-Dwjyl29g2RtYjlwb2j_-q6lwbyXEw&usqp=CAU')




  const uploadData=async()=>{
    console.log('upload function called')
    const id = uuid.v4();
    firestore()
      .collection('Doctors')
      .add({
        id: id,
        email: email,
        password: password,
        name: name,
        mobile: mobile,
        specialization: specialization,
        about: about,
        rating: rating,
        experience:experience,
        fees:fees,
        image:image
       
      })
      .then(() => {
        console.log('Post Added !');
        
        setName(null);
        setPassword(null);
        setSpecialization(null);
        setemail(null);
        setMobile(null);
        setAbout(null);
        setRating(null);
        setExperience(null);
        setFees(null);
         Snackbar.show({
            text: 'SignUp SuccessFully Please Login Now  !!',
            duration: Snackbar.LENGTH_SHORT,
          });
          navigation.navigate("LoginScreen")
      })
      .catch(error => {
        console.log(error);
      });
  }

  const createUser=async()=>{
      try {

            console.log('create function called')
        if(!email || !password || !name || !mobile || !specialization || !about ||!rating || !experience || !fees)
      {
           return Snackbar.show({
            text: 'All Fields are Required !!',
            duration: Snackbar.LENGTH_SHORT,
          });
      }

        const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
          await result.user.sendEmailVerification()
          console.log(result.user)
          if(result.user){
           uploadData()
          }
          console.log(result)
      } catch (error) {
        console.log(error)
        return Snackbar.show({
          text: 'Something Wrong Happend !!',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
  }

  return (
    <ScrollView style={{flex:1, backgroundColor:'#fff'}}>
      <View >
        <View style={{ alignItems: "center",marginTop:10 }}>
          <Image
            source={require("../assets/images/Logo.png")}
            resizeMode="contain"
            style={{ height: 50 }}
          />
        </View>
        <Text style={{alignSelf:'center', marginTop:10,
        fontSize:20, fontWeight:'bold', color:'black'
      }}>Doctor SignUp</Text>
        <View style={styles.FieldContainer}>
        <View>
        <TextInput placeholder="Name" placeholderTextColor='black' style={styles.inputField} onChangeText={(e)=>setName(e)} />
       
        </View>
          <TextInput placeholder="Username" placeholderTextColor='black' style={styles.inputField} onChangeText={(e)=>setemail(e)} />
          <View>
          <TextInput placeholder="Password" placeholderTextColor='black'  style={styles.inputField} onChangeText={(e)=>setPassword(e)} />
         
          </View>
          <View>
          <TextInput placeholder="Mobile" placeholderTextColor='black'  style={styles.inputField} onChangeText={(e)=>setMobile(e)} keyboardType="number-pad" />
         
          </View>
          <View>
          <TextInput placeholder="Doctor's Specialization" placeholderTextColor='black'  style={styles.inputField} onChangeText={(e)=>setSpecialization(e)}  />
         
          </View>
          <View>
          <TextInput placeholder="About Doctor"  placeholderTextColor='black'  style={styles.inputField} onChangeText={(e)=>setAbout(e)} />
         
          </View>
          <View>
          <TextInput placeholder="Ratings"  placeholderTextColor='black'  style={styles.inputField} onChangeText={(e)=>setRating(e)} />
         
          </View>
          <View>
          <TextInput placeholder="Experience in Year"  placeholderTextColor='black'  style={styles.inputField} onChangeText={(e)=>setExperience(e)} />
         
          </View>
          <View>
          <TextInput placeholder="Consulting Fees"  placeholderTextColor='black'  style={styles.inputField} onChangeText={(e)=>setFees(e)} />
         
          </View>
          
          
          <View style={{padding:10}}>
          <TouchableOpacity style={styles.button} onPress={()=>createUser()}>
            <Text style={{alignSelf:'center',color:'white', fontSize:20, fontWeight:'bold'}}>Sign Up</Text>
          </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity onPress={()=>navigation.navigate('OtpLogin')}>
              <Text style={{alignSelf:'center'}}>Login using Phone number</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
              <Text style={{alignSelf:'center'}}>Login using Email</Text>
              </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  inputField: {
    padding: 15,
    borderRadius: 13,
    backgroundColor: "lightgray",
    marginTop:5,
    color:'black',
    fontSize:18
  },
  FieldContainer: {
    padding: 10,
    
    backgroundColor:'#fff'
  },
  button: {
    padding: 10,
    borderRadius: 13,
    backgroundColor: "#32B7BA",
    
  },
});