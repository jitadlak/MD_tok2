import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import VideoComponent from './VideoComponent';

const VideoCall = ({navigation}) => {

  return  (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Video Call</Text>
    //   <Image
    //     style={styles.img}
    //     source={require('../assets/images/SophieKihm.png')}
    //   />
    //   <Text style={styles.text}>Emma Smith</Text>

    //   <View style={styles.imgview}>
    //     <TouchableOpacity onPress={() => navigation.navigate('TabNavigatorS')}>
    //       <Image
    //         style={styles.img1}
    //         source={require('../assets/images/call.png')}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <VideoComponent/>
  );
};

export default VideoCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  img: {
    height: 100,
    width: 100,
    margin: 20,
  },
  img1: {
    height: 20,
    width: 20,
  },
  imgview: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginTop: 50,
    borderRadius: 20,
  },
});
