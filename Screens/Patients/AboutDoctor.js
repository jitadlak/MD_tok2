import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,

} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';


const AboutDoctor = ({navigation, route}) => {
const {about,experience, fee, id, image, name, rating, specialization}=route.params;
let doctorData= route.params;
  console.log(route.params)

   

  






  return (
    <View style={{flex: 1, backgroundColor: '#33A1FF', alignItems:'center', justifyContent:'center'}}>
 
      <View style={styles.drimg}>
        <Image
          resizeMode="contain"
          style={{height: 150, width: '100%', borderRadius: 5}}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.aboutView}>
        <ScrollView>
          <View style={{padding: 20}}>
            <Text style={styles.name}>DR. {name}</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold',color:'black'}}>
             {specialization}
            </Text>
            <View style={styles.info}>
              <View style={styles.infocont}>
                <Text style={{fontSize: 18,color:'black'}}> Fees</Text>
                <Text style={styles.text}>${fee}</Text>
              </View>
              <View style={styles.infocont}>
                <Text style={{fontSize: 18,color:'black'}}>Experience</Text>
                <Text style={styles.text}>{experience} Yr</Text>
              </View>
              <View style={styles.infocont}>
                <Text style={{fontSize: 18,color:'black'}}>Rating</Text>
                <Text style={styles.text}>{rating}/5</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                About{' '}
              </Text>
              <Text style={{fontSize: 16,color:'black'}}>
               {about}
              </Text>
            </View>
          </View>

         

        </ScrollView>
        <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate("BookAppointment",doctorData)}>
          <Text style={styles.btnText}>Book an Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutDoctor;
const styles = StyleSheet.create({
  drimg: {
    height: 180,
    width: '100%',
    backgroundColor: '#33A1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutView: {
    width: '100%',
    backgroundColor: 'white',
    height:'70%'
    
  
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
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  infocont: {
   
    width: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontWeight: 'bold', fontSize: 20, color: 'black', margin: 5},

 
});
