// import React, {useState, useEffect} from 'react';
// import {
//   KeyboardAvoidingView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   TouchableOpacity,
// } from 'react-native';

// import RazorpayCheckout from 'react-native-razorpay';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import auth, {firebase} from '@react-native-firebase/auth';
// import Snackbar from 'react-native-snackbar';
// import uuid from 'react-native-uuid';

// import firestore from '@react-native-firebase/firestore';

// const BookAppointment = ({navigation, route}) => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   console.log(route.params);
//   const {name, about, experience, fee, image, rating, type, id} = route.params;
//   const calfee = fee * 100;

//   console.log('useremal', userEmail);
//   const Date = date => {
//     setSelectedDate('');
//     setSelectedDate(date);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('user');
//       setUserEmail(value);
//     } catch (e) {
//       // error reading value
//     }
//   };

//   const uploadData = async () => {
//     console.log('upload function called');
//     const idnew = uuid.v4();
//     firestore()
//       .collection('Appointment')
//       .add({
//         DoctorName: name,
//         id: idnew,
//         DoctorId: id,
//         Doctorabout: about,
//         Doctorrating: rating,
//         Doctorexperience: experience,
//         Doctorfees: fee,
//         Doctorimage: image,
//         appointmentPatient: userEmail,
//         appointmentDate: selectedDate,
//       })
//       .then(() => {
//         console.log('Post Added !');

//         Snackbar.show({
//           text: 'Appointment Done  !!',
//           duration: Snackbar.LENGTH_SHORT,
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const pay = () => {
//     var options = {
//       description: 'Doctor Appointment',
//       image: 'https://i.imgur.com/3g7nmJC.png',
//       currency: 'INR',
//       key: 'rzp_test_LDFfqjsLmdBsJH', // Your api key
//       amount: calfee,
//       name: 'Geetesh',
//       prefill: {
//         email: 'void@razorpay.com',
//         contact: '9191919191',
//         name: 'Razorpay Software',
//       },
//       theme: {color: '#F37254'},
//     };
//     RazorpayCheckout.open(options)
//       .then(data => {
//         uploadData();
//         navigation.push('SuccessAppointment', {date: selectedDate});
//         console.log(`Success: ${data.razorpay_payment_id}`);
//       })
//       .catch(error => {
//         // handle failure
//         alert(`Error: ${error.code} | ${error.description}`);
//       });
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//       <ScrollView>
//         <Text style={styles.heading}>Book Your Appointment</Text>
//         <DatePicker onSelectedChange={date => Date(date)} />
//         <View>
//           <TextInput
//             placeholder="Note"
//             style={styles.input}
//             placeholderTextColor="black"
//           />
//         </View>
//         <TouchableOpacity style={styles.btn} onPress={() => pay()}>
//           <Text style={styles.btnText}>Confirm Appointment And Pay </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default BookAppointment;

// const styles = StyleSheet.create({
//   heading: {
//     alignSelf: 'center',
//     margin: 10,
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   input: {
//     height: 80,
//     width: '80%',
//     borderWidth: 0.5,
//     alignSelf: 'center',
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: 'lightgray',
//     fontSize: 18,
//     margin: 10,
//     color: 'black',
//   },
//   btn: {
//     height: 50,
//     width: 300,
//     backgroundColor: '#33A1FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 20,
//     margin: 10,
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Touchable, TouchableOpacityBase } from 'react-native'
import {Calendar} from 'react-native-calendars';
import {useSelector, useDispatch} from 'react-redux';
import { fetchSinglePatient } from '../../Redux/action';
import RazorpayCheckout from 'react-native-razorpay';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
 import Snackbar from 'react-native-snackbar';

const BookAppointment = ({navigation,route}) => {
  const [date, setdate] = useState()
  const [time, setTime] = useState()
  const [TransactionId, setTransactionId] = useState()

  const TimeSlot=[
    {
      time: "11 AM"
    },
    {
      time: "12 PM"
    },
    {
      time: "1 PM"
    },
    {
      time: "2 PM"
    },
    {
      time: "4 PM"
    },
    {
      time: "5 PM"
    },
    {
      time: "6 PM"
    },
    {
      time: "7 PM"
    },
    {
      time: "8 PM"
    },
    
  ]
  const dispatch = useDispatch();
  const DoctorData= route.params
  useEffect(() => {
    getData();
  
  },[]);

  const userPatient = useSelector(state => state.PatientUserReducer);
  const userData= userPatient.userPatient;



  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      dispatch(fetchSinglePatient(value));
    } catch (e) {
      console.log('error', e);
    }
  };

  console.log('doctor ka data',DoctorData)
  console.log('user ka data',userData)

  // let AppointmentData = {
  //   PatientId: userData.id,
  //   DoctorId: DoctorData.id,
  //   DoctorName: DoctorData.name,
  //   PatientName: userData.name,
  //   AppointmentDate: date,
  //   AppointmentTime: time,
  //   DoctorSpecialization: DoctorData.specialization,
  //   TransactionId: TransactionId
  // }

  const pay = () => {
    var options = {
      description: 'Doctor Appointment',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_LDFfqjsLmdBsJH', // Your api key
      amount: 1000,
      name: 'Geetesh',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
          uploadData(data.razorpay_payment_id)
        
        console.log(`Success: ${data.razorpay_payment_id}`);
        // setTransactionId(data.razorpay_payment_id)
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };


  const uploadData = async (paymentId) => {
    console.log('upload function called');
   
   await firestore()
      .collection('Appointment')
      .add(
        {
          PatientId: userData.id,
          DoctorId: DoctorData.id,
          DoctorName: DoctorData.name,
          PatientName: userData.name,
          AppointmentDate: date,
          AppointmentTime: time,
          DoctorSpecialization: DoctorData.specialization,
          PaymentId: paymentId
        }
      )
      .then(() => {
        console.log('Post Added !');

        Snackbar.show({
          text: 'Appointment Done  !!',
          duration: Snackbar.LENGTH_SHORT,
        });
        navigation.replace('SuccessAppointment', {date: date});
      })
      .catch(error => {
        console.log(error);
      });
  }; 

  
  return (
    <View style={{flex:1,backgroundColor:'#E2F4F9' , justifyContent:'center', alignItems:'center'}}>
    <View style={{height:70, width:'100%', backgroundColor:'#33A1FF',justifyContent:'center'}}>
    <Text style={styles.heading}>Select Appointment Date And Time</Text>
    </View>
    <ScrollView>
    <Calendar
    onDayPress={(day) => setdate(day.dateString)}
    theme={{
      backgroundColor: '#E2F4F9',
      calendarBackground: '#E2F4F9',
      
     
    }}
   
/>
<View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap',alignSelf:'center' }}>

<FlatList
         
numColumns={3}
data={TimeSlot}
renderItem={item1 => {
  return (
    <View style={styles.timeView}>
    <TouchableOpacity onPress={()=>setTime(item1.item.time)}>
    <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>{item1.item.time}</Text>
    </TouchableOpacity>
    
    </View>
  
  )}}/>
</View>
<Text style={styles.dateText}>Appointment Date : {date}</Text>
<Text style={styles.dateText}>Appointment Time : {time} </Text>
<TouchableOpacity style={styles.btn} onPress={() => pay()}>
        <Text style={styles.btnText}>Confirm Appointment And Pay </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default BookAppointment
const styles= StyleSheet.create({
  heading:
  {alignSelf:'center',
   fontSize:20, fontWeight:'bold',
    color:'white',
},
btn: {
      height: 50,
      width: 300,
      backgroundColor: 'teal',
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
    timeView:
    {height:40,width:80, backgroundColor:'#33A1FF', margin:5, borderRadius:8, alignItems:'center',justifyContent:'center', },
    dateText:
    {alignSelf:'center', fontSize:17, fontWeight:'bold', color:'black'}
})
