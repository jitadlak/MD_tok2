import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import auth, { firebase } from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage'
const PatientSignIn = ({navigation}) => {
    const [email, setemail]= useState('')
    const [password, setPassword]= useState('')


    const storeData = async () => {
      try {
        await AsyncStorage.setItem('user', email)
        console.log('async storage set', email)
      } catch (e) {
        console.log('async storage not set')
      }
    }
    
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('user')
        // if(!value == " ") {
        //   navigation.replace('PatientDashboard')
        // }else{
        //   return
        // }
      } catch(e) {
        // error reading value
      }
    }
    
useEffect(()=>{
  getData()
})


    const createUser=async()=>{
        try {
          if(!email || !password){
            return Snackbar.show({
              text: 'Please fill all details !!',
              duration: Snackbar.LENGTH_SHORT,
            });
          }
          const result = await firebase.auth().signInWithEmailAndPassword(email, password)
            // await result.user.sendEmailVerification()
            console.log(result.user)
            if(result.user.emailVerified== true){
              let userData= JSON.stringify(result.user)
              storeData()
              navigation.replace("PatientDashboard")
              return Snackbar.show({
                text: 'Login Successfull !!',
                duration: Snackbar.LENGTH_SHORT,
              });
            }
            else{
              return Snackbar.show({
                text: 'Email is Not Verified please verify !!',
                duration: Snackbar.LENGTH_SHORT,
              });
            }
            console.log(result)
        } catch (error) {
          console.log(error)
          return Snackbar.show({
            text: 'The Credentials is invalid or the user does not have this credentials !!',
            duration: Snackbar.LENGTH_SHORT,
          });
        }
    }


    return (
        <View style={{flex:1, backgroundColor:'#fff', padding:10}}>
          <View style={styles.imgView}>
          <Image
          source={require("../../assets/images/Logo.png")}
          resizeMode="contain"
          style={{ height: 60 }}
        />
          </View> 
          <Text style={styles.signintext}>Sign In </Text>
          <Text style={styles.signintext2}>Hii, Sign In As A Patient On MD_Tok</Text>

          <View style={{marginTop:'10%', margin:10}}>
        <Text style={{fontSize:16, color:'#33A1FF', marginTop:10}}>Email</Text>
        <TextInput
        placeholder="Email Address"
        onChangeText={(e)=>setemail(e)}
        style={{borderBottomWidth:2, borderColor:'gray',fontSize:18}}
        />
        <Text style={{fontSize:16, color:'#33A1FF', marginTop:10}}>Password</Text>
        <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(e)=>setPassword(e)}
        style={{borderBottomWidth:2, borderColor:'gray', fontSize:18}}
        />
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>createUser()}>
          <Text style={styles.btnText}>SignIn</Text>
          </TouchableOpacity>
        </View>
    )
}

export default PatientSignIn

const styles = StyleSheet.create({
    imgView:{
        margin:'10%',
        alignItems:'center',
        marginTop:100
    },
    signintext:{
        alignSelf:'flex-start',
        fontSize:22,
        color:'black',
        fontWeight:'bold',
        margin:10
    },
    signintext2:{
        alignSelf:'flex-start',
        fontSize:15,
        color:'gray',
        fontWeight:'bold',
        marginLeft:10
       
    },
    btn:
    {marginTop:'15%', height:50, width:300, 
    backgroundColor:'#33A1FF', alignSelf:'center', 
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
},
btnText:{
    color:"white",
    fontSize:18,
    fontWeight:'bold'
}
})
