import React,{useState} from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import AgoraUIKit,{PropsInterface} from 'agora-rn-uikit'
import { SafeAreaView } from 'react-native'
const VideoComponent = ({navigation}) => {
  const [videocall, setVideocall] = useState(true);

   let rtcProps= { appId: "987df9da48694a3594687168fb26d800",
    channel:"test", 
    token:"006987df9da48694a3594687168fb26d800IACDpXNryb/8/QgKXtDwjTAWLU2TVKBXa2yR1dtso/JTRgx+f9gAAAAAEACBVNzpi8HeYQEAAQCLwd5h"}
   
    let callbacks= {EndCall: ()=> EndCallFun()}

  

  const EndCallFun=()=>{
    setVideocall(false)
    navigation.replace("TabNavigatorS")
  }
  return videocall ? (
    <View>
     <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}/>
    </View>
  ): 
  
  (
       <View style={styles.container}>
      <Text style={styles.text}>Video Call Ended</Text>
      <Image
        style={styles.img}
        source={require('../assets/images/SophieKihm.png')}
      />
      <Text style={styles.text}>Emma Smith</Text>

      <View style={styles.imgview}>
        <TouchableOpacity onPress={() => navigation.replace('TabNavigatorS')}>
          <Image
            style={styles.img1}
            source={require('../assets/images/call.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VideoComponent

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
})