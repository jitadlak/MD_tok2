import React,{useEffect, useState} from 'react'
import { View, Text , StyleSheet,TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native';

const SuccessAppointment = ({navigation, route}) => {

  const [lot, setLot] = useState()

    const datee = route.params.date
    const lottie =  <LottieView source={require('../../assets/images/successful.json')} style={{height:300, width:100, alignSelf:'center'}}  autoPlay
    loop />

    
    useEffect(()=>{
      setLot(lottie)
    },[])
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
       {lot}

        <Text style={styles.text}>Your Appointment is Successfully Booked With Our Doctor on {datee} </Text>
        <TouchableOpacity style={styles.btn}  onPress={() => navigation.replace("PatientDashboard")}>
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
        </View>
    )
}

export default SuccessAppointment

const styles= StyleSheet.create({
    text:{
        alignSelf:"center",
        fontSize:25,
        color:'black',
        fontWeight:'bold',
        margin:10
    },
    btn: {
        height: 50,
        width: 300,
        backgroundColor: '#33A1FF',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        margin: 10,
      },
      btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
})
