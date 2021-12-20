import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import {useSelector,  useDispatch} from 'react-redux'
import { fetchDataDoctor } from '../../Redux/action';
const AllDoctors = ({navigation}) => {
   
  
    const dispatch= useDispatch()

    useEffect(()=>{
     
        dispatch(fetchDataDoctor())
        console.log('datadoctorscreen',list)
        
      
    },[])
    const list= useSelector(state=>state.DoctorFetchReducer)


    return (
        <View style={{flex:1, backgroundColor:'#E2F4F9',alignItems:'center',}}>
          <View style={{height:70, width:'100%', backgroundColor:'#33A1FF',justifyContent:'center'}}>
          <Text style={styles.heading}>Our Doctors</Text>
          </View>

            <FlatList
         
                numColumns={2}
                data={list.doctorData}
                renderItem={item1 => {
                  return (
                      <TouchableOpacity onPress={()=>navigation.navigate("AboutDoctor",item1.item)}>
                     <View style={styles.cont}>
                     
                     <Image
                     style={styles.img}
                     source={{uri: item1.item.image}}
                     />
                     <Text style={styles.rating}> Dr. {item1.item.name}</Text>
                     <Text style={styles.text}>{item1.item.specialization}</Text>
                   
                     <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <Text style={styles.text}>$ {item1.item.fee}    </Text>
                     <Text style={styles.text}>{item1.item.rating}/5</Text>


                     </View>
                     <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("AboutDoctor",item1.item)}>
                     <Text style={styles.btnText}>Book Now</Text>
                     </TouchableOpacity>
                     
                     </View>
                     
                     
                     </TouchableOpacity>
                  )}}/>

        </View>
    )
}

export default AllDoctors

const styles = StyleSheet.create({
    heading:
    {alignSelf:'center',
     fontSize:25, fontWeight:'bold',
      color:'white',
  },
    cont:{
        height:220,
        
   
        backgroundColor:'#fff',
        borderRadius:15,
        margin:5,
        marginTop:20,
      
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:20,
        borderColor:'lightgray',
        borderWidth:1
        
    },
    img:{
        height:100,
        width:100,
        borderRadius:50,
        margin:10,
        borderColor:"lightgray",
        borderWidth:4
    },
    rating:{
        fontWeight:'bold',
        fontSize:16,
        color:'black',
        alignSelf:'center',
        margin:5
       
    },
    text:{
      fontWeight:'bold',
      fontSize:14,
      color:'gray',
      alignSelf:'center',
      margin:5
     
  },
  btn:{
    backgroundColor:'#33A1FF',
    height:25,
    width:120,
    margin:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }


    
})
