import { View,Text } from "native-base";
import { ActivityIndicator, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react"
import { useMainContext } from "../context/maincontext";
import db from '@react-native-firebase/firestore'
 

const CompletedScreen = ({navigation,route}) => {


    const {data,extradata} = route.params;

    console.log(data,'data');
    console.log(extradata,'extradata');

    const {fetchagain,setfetchagain,setdata} = useMainContext();

    const [loading,setloading] = useState(true)



      useEffect(() => {
      let ref = db().collection('users').doc('ZecA3wNeOxK9wCMOtY1z').collection('workouts').doc(extradata?.exercisetype).collection('days').doc(data?.day)


      ref.update({
        completed:true
      }).then(() => {
        console.log('updated');
        setloading(false)
        setfetchagain(!fetchagain)
        setTimeout(() => {
            navigation.navigate('WorkoutScreen'
            // ,{
            //     data:{
            //         documentinserted:true,
            //         duration:extradata?.duration,
            //         exercisetype:extradata?.exercisetype,
            //         subscribed:extradata?.subscribed
            //     },
            // }
            )
        },1000)
      }).catch(err => {
        setloading(false)
        console.log(err)
    })

// ref.get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data().day,doc.id,'doc data');
//     });
// })
        
      },[])

    return (
        <SafeAreaView style={{backgroundColor:'#fff',flex:1,alignItems:'center',justifyContent: 'center'}}>
        <View alignItems={'center'} w={'100%'} mx='auto' >
            {loading ? (
               <ActivityIndicator size={'large'} color="green"/>
            ) : (
                <Text>Completed Day</Text>
            )}
        </View>
        </SafeAreaView>
    );
}

export default CompletedScreen