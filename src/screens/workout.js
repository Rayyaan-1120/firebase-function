import { View,Text } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react"
import DayBox from "../components/Daybox";
import { useMainContext } from "../context/maincontext";
import db from '@react-native-firebase/firestore'



const WorkoutScreen = ({navigation,route}) => {

    // let days = ["day 1","day 2","day 3","day 4","day 5","day 6","day 7"];

    const {data} = useMainContext()

    const [state,setstate] = useState([])

    // console.log(data,'data');

    // useEffect(() => {
    //   let ref = db().collection('users').doc('QzvJeB97XvJoV4Ej8Wwb').collection('exercises').doc(data?.exercisetype).collection('routine')
    //   let maindata = []
    // //   ref.get().then(doc => console.log(doc.data(),'doc data'))

    // ref.get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.data().day,doc.id,'doc data');
    //         maindata.push({
    //             day:doc.data().day,
    //             id:doc.id,
    //             completed:doc.data().completed,
    //             exercises:doc.data().exercises
    //         })
    //         setstate([...state,...maindata])
    //     });
    // });
    // },[])

    console.log(state,'state');
   
    return(
        <SafeAreaView style={{backgroundColor:'#fff',flex:1,justifyContent: 'center'}}>
           <View alignItems={'center'} w={'100%'} mx='auto' >
               {data?.map((day,index)=>{
                     return <DayBox day={day?.exercisetype} key={index} pressfunc={()=>{
                        navigation.navigate('SingleDayScreen',{
                            data:day,
                        })
                     }}/>
               })}
           </View>
        </SafeAreaView>
    )
}

export default WorkoutScreen