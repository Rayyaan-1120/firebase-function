import { View,Text } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import React from "react"
import { useMainContext } from "../context/maincontext";

const HomeScreen = ({navigation}) => {

    const {data} = useMainContext()

    // let filteredarrlength = data.filter(item => item.completed === true).length;


    return (
        <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
           <View alignItems={'center'} w={'100%'}>
              <View mt={8} minH={180} w={'90%'} justifyContent="space-between" alignItems="center" flexDir={'row'} mx="auto" bg={'red.600'} >
                <View>
                <Text ml={8} fontSize={20} color={'#fff'} fontWeight="bold">Progress</Text>
                {/* <Text ml={8} fontSize={20} color={'#fff'} fontWeight="bold">Completed {(filteredarrlength / data?.length) * 100}%</Text> */}
                </View>
                <View  mr={8} alignItems={'center'} justifyContent="center" p={3} w={85} h={85} borderRadius="full" bg="#fff">
                   {/* <Text fontSize={16} color={'#000'} fontWeight="bold">{filteredarrlength} / {data.length} days</Text> */}
                </View>
              </View>
              <TouchableOpacity style={{width: '100%'}} onPress={() => {
                navigation.navigate('WorkoutScreen')
              }}>
              <View mt={8} minH={180} w={'90%'} justifyContent="center" alignItems="center" flexDir={'row'} mx="auto" bg={'red.600'}>
              <Text textAlign={'center'} fontSize={20} color={'#fff'} fontWeight="bold">Workout</Text>
              </View>
              </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
}

export default HomeScreen