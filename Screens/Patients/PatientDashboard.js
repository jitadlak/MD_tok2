import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector, useDispatch} from 'react-redux';
import {fetchDataDoctor, fetchSinglePatient} from '../../Redux/action';
const PatientDashboard = ({navigation}) => {
  // const[userEmail, setUserEmail]= useState('')
  // const[userDetails, setUserDetails]= useState()
  // const[name, setName]= useState('jit')

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(fetchDataDoctor());
    console.log('datascreen', list);
  }, []);
  const list = useSelector(state => state.DoctorFetchReducer);
  const userPatient = useSelector(state => state.PatientUserReducer);
  const DATA = [
    {
      id: 'snkjksndkn',
      icon: require('../../assets/images/bone.png'),
      title: 'Brounces',
    },
    {
      id: 'snkjksnerredkn',
      icon: require('../../assets/images/eye.png'),
      title: 'Eyes',
    },
    {
      id: 'snkjkserendkn',
      icon: require('../../assets/images/heart.png'),
      title: 'Heart',
    },
    {
      id: 'snkjksdfdssndkn',
      icon: require('../../assets/images/stethoscope.png'),
      title: 'Therapist',
    },
    {
      id: 'snkjksdsfsndkn',
      icon: require('../../assets/images/stomach.png'),
      title: 'Dentist',
    },
    {
      id: 'snkzfsjksndkn',
      icon: require('../../assets/images/tooth.png'),
      title: 'Stomach',
    },
  ];

  console.log('patient', userPatient);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      dispatch(fetchSinglePatient(value));
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E2F4F9'}}>
      <View style={styles.headContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{marginTop: 20, fontSize: 16, color: 'white'}}>
            Hello, {userPatient.userPatient.name}
          </Text>
          <Image
            style={{height: 50, width: 50, borderRadius: 20}}
            source={{uri: userPatient.userPatient.image}}
          />
        </View>
        <Text style={styles.heading}> Your Health is our priority. </Text>
        <View>
          <TextInput
            placeholder="Find Your Doctor"
            style={styles.input}
            placeholderTextColor="black"
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>Categories</Text>
          <Text style={styles.categoryText}>See All</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <FlatList
            numColumns={3}
            data={DATA}
            renderItem={item => {
              return (
                <View style={styles.flatlistview}>
                  <Image
                    style={{height: 40, width: 40, tintColor: '#33A1FF'}}
                    source={item.item.icon}
                  />
                  <Text style={{color: 'black'}}>{item.item.title}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>Top Doctors</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllDoctors')}>
            <Text style={styles.categoryText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={list.doctorData}
          renderItem={item1 => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('AboutDoctor', item1.item)}>
                <View style={styles.doctorView}>
                  <Image
                    resizeMode="contain"
                    style={{height: 100, borderRadius: 10}}
                    source={{uri: item1.item.image}}
                  />
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: 'white',
                    }}>
                    Doctor : {item1.item.name}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: 'white',
                    }}>
                    {item1.item.specialization}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: 'white',
                    }}>
                    Rating : {item1.item.rating}/5
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default PatientDashboard;

const styles = StyleSheet.create({
  headContainer: {
    height: 200,
    width: '100%',
    backgroundColor: '#33A1FF',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 15,
  },
  input: {
    height: 40,
    width: '90%',
    paddingLeft: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    fontSize: 16,
    color: 'black',
  },
  categoryContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  flatlistview: {
    width: 100,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  doctorView: {
    height: 180,
    width: 200,
    backgroundColor: '#33A1FF',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
});
