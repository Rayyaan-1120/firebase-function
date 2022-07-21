import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import React, { useEffect } from 'react';
import WorkoutScreen from '../screens/workout';
import SingleDayScreen from '../screens/singleDay';
import {MainContextProvider, useMainContext} from '../context/maincontext';
import CompletedScreen from '../screens/completedScreen';
import db from '@react-native-firebase/firestore'
import ExercisesScreens from '../screens/exercisesScreen';
import SingleDayStart from '../screens/singleDayStart';


export const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  const {data,setdata,fetchagain} = useMainContext()

  useEffect(() => {
    let ref = db().collection('users').doc('ZecA3wNeOxK9wCMOtY1z').collection('workouts')
    let maindata = []
    ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
          maindata.push(doc.data())
          setdata([...data,...maindata])
      });
  });
  
//   setdata(maindata)
  },[])

  console.log(data,'data I am')


  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
          <Stack.Screen name="SingleDayScreen" component={SingleDayScreen} />
          <Stack.Screen name="CompletedScreen" component={CompletedScreen} />
          <Stack.Screen name="SingleDayStartScreen" component={SingleDayStart} />
          {/* <Stack.Screen name="ExercisesScreen" component={ExercisesScreens} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
};
