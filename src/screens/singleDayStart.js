import { View,Text } from "native-base";
import { ActivityIndicator, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react"
import { useMainContext } from "../context/maincontext";
import db from '@react-native-firebase/firestore'

export default function SingleDayStart({navigation,route}) {

    const {data,extradata} = route.params;

    return(
        <SafeAreaView style={{backgroundColor:'#fff',flex:1,alignItems:'center',justifyContent: 'center'}}>
        <View alignItems={'center'} w={'100%'} mx='auto' >
        <View position={'absolute'} mx="auto" width="100%" alignItems="center" justifyContent={'center'} bottom={10} right={0} left={0}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('CompletedScreen',{
                    data:data,
                    extradata:extradata
                })
            }} style={{padding:12,borderRadius:5,width:'90%',backgroundColor:'red'}}>
                <Text textAlign={'center'} fontsize={15} color="#fff">Start Workout</Text>
            </TouchableOpacity>
           </View>
        </View>
        </SafeAreaView>
    )
}