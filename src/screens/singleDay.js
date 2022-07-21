import { View,Text, ScrollView } from "native-base";
import { ActivityIndicator, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react"
import DayBox from "../components/Daybox";
import db from '@react-native-firebase/firestore'
import { useMainContext } from "../context/maincontext";

const SingleDayScreen = ({navigation,route}) => {

  const {data} = route.params;

  const arr = [...Array(data?.duration).keys()]
  console.log(arr,'arr');

  const {fetchagain,setfetchagain} = useMainContext();


  const [loading,setloading] = useState(true)
  const [state,setstate] = useState([])

  const getdata = () => {
    let maindata = []

    db().collection('users').doc('ZecA3wNeOxK9wCMOtY1z').collection('workouts').doc(data?.exercisetype).collection('days').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data(),'doc data');
            maindata.push(doc.data())
            setstate([...maindata])
        }
        
        )
        setloading(false)
    }).catch(err => {
        console.log(err,'err');
        setloading(false)
    })
  }

  const insertdocs = async () => {
    setloading(true)
    if(data?.subscribed && !data?.documentsinserted){
        Promise.all(arr.map(async (day,index) => {
          await db().collection('users').doc('ZecA3wNeOxK9wCMOtY1z').collection('workouts').doc(data?.exercisetype).collection('days').doc(`day ${index + 1}`).set({
            day:`day ${index + 1}`,
            completed:false,
            // exercises:[]
          })
        }))

        await db().collection('users').doc('ZecA3wNeOxK9wCMOtY1z').collection('workouts').doc(data?.exercisetype).update({
            documentsinserted:true
        })

        getdata()
        // setloading(false)
    }else if(data?.subscribed && data?.documentsinserted){
        setloading(true)
        getdata()
    }
    else{
        setloading(false)
        console.log('not subscribed');
    }
  }

  useEffect(() => {
    // setstate([])
    insertdocs();
  },[fetchagain])

  function compare( a, b ) {
    if ( Number(a.day.slice(4)) < Number(b.day.slice(4)) ){
      return -1;
    }
    if ( Number(a.day.slice(4)) > Number(b.day.slice(4)) ){
      return 1;
    }
    return 0;
  }
  
//   objs.sort( compare );

useEffect(() => {
    if(state.length > 0){
        console.log(state,'state');
        setstate(state.sort(compare))
    }
},[state])


  console.log(data);

  return(
         <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
            {loading ? (
                <View alignItems="center" justifyContent={'center'} flex={1}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <>
                 <ScrollView contentContainerStyle={{alignItems:"center"}} w={'100%'} mx='auto' >
               {state?.length > 0 ? state?.map((day,index)=>{
                     return <DayBox day={day.day} showcompleted={day?.completed} key={index} pressfunc={()=>{
                        navigation.navigate('SingleDayStartScreen',{
                            data:day,
                            extradata:data
                        })
                     }}/>
               }) : (
                     <Text>Not subscribed</Text>
               )}
           </ScrollView>
          
           </>
            )}
        </SafeAreaView>
  )

}

export default SingleDayScreen
