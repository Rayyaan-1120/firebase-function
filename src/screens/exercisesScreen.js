import { View,Text } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import React from "react"
import DayBox from "../components/Daybox";
import { useMainContext } from "../context/maincontext";

const ExercisesScreens = ({navigation}) => {

    const {data} = useMainContext()

    return(
        <SafeAreaView style={{backgroundColor:'#fff',flex:1,alignItems:'center',justifyContent: 'center'}}>
            <View alignItems={'center'} w={'100%'} mx='auto' >
            {data?.map((exe,index)=>{
                     return <DayBox day={exe?.exercisetype} key={index} pressfunc={()=>{
                        navigation.navigate('WorkoutScreen',{
                            data:exe
                        })
                     }}/>
               })}
            </View>
        </SafeAreaView>
    )
}

export default ExercisesScreens