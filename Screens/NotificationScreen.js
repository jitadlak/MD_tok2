import React from 'react'
import { StyleSheet, Text, View,FlatList, Image,ScrollView } from 'react-native'

const NotificationScreen = () => {
    const DATA = [
        {
          id: 'yesdghfjahjkfkdjf',
          notification: 'Dr. Jonny McCrimmon has rescheduled the appointment dues to schedule confict.'
        },
        {
          id: 'gfhjsdgfhjdsgfhj',
         notification: 'Please submit the blood report by 9 am'
        },
        
      ];
      const DATA1 = [
        {
          id: 'yesdghfjahjkfkdjf',
          image: require('../assets/images/OliviaParker.png'),
          name: 'Geetesh Sahu (2)',
          discription:
            'Hi Doctor, i am a cardio patient. I need your \nhelp imidiately',
        },
        {
          id: 'gfhjsdgfhjdsgfhj',
          image: require('../assets/images/SophieKihm.png'),
          name: 'Murli bhai',
          discription: 'Yes',
        },
        {
            id: 'gfhjsdgfhjdssfsxcgfhj',
            image: require('../assets/images/SophieKihm.png'),
            name: 'Manjit',
            discription: 'Yes',
          },
          {
            id: 'gfhjszdzxvdgfhjdsgfhj',
            image: require('../assets/images/AmeliaWaston.png'),
            name: 'Animesh ',
            discription: 'Yes',
          },
          {
            id: 'gfhjszdzsfssxvdgfhjdsgfhj',
            image: require('../assets/images/OliviaParker.png'),
            name: 'Rajiv ',
            discription: 'Yes',
          },
          
        
      ];
    return (
        <View style={styles.mainContainer}>
           <Text style={styles.heading}>Notifications</Text>
           <View>
           <FlatList
           data={DATA}
           renderItem={item => {
             return (
           <View style={styles.notification}>
           <Text style={styles.notiText}>{item.item.notification}</Text>
           </View>
          
           );
        }}
      />
      </View>
      <View
      style={{
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
        margin:10
      }}
    />
    <ScrollView>
    <FlatList
    data={DATA1}
    renderItem={item1 => {
      return (
    
          <View style={styles.view} key={item1.item.id}>
            <View 
              style={styles.imgView}>
              <Image
                style={{height: 60, width: 60}}
                resizeMode="contain"
                source={item1.item.image}
              />
            </View>
            <View style={{margin: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'red',
                }}>
                {item1.item.name}
              </Text>
              <View style={{flexDirection: 'row', margin: 5}}>
                <Image
                  style={{height: 15, width: 15, tintColor:'gray'}}
                  resizeMode="contain"
                  source={require('../assets/images/call.png')}
                />
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Missed
                </Text>
               
              </View>
             
            </View>
            
          </View>
          
       
      );
    }}
  />
    </ScrollView>
        </View>
        
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    heading:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center',
        margin:30
    },
    notification:{
        width:'90%',
        
        backgroundColor:'#7E51D0',
        margin:10,
        alignSelf:'center',
        borderRadius:8
    },
    notiText:{
        fontSize:17,
        padding:20,
        color:'#fff'
    },
    imgView:
  {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#32b7ba',
  },
  view: {
    height: 100,
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 5,
    alignSelf:'center'
  },
})
