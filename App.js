/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base';
import { MainNavigation } from './src/navigation';
import db from '@react-native-firebase/firestore'
import { MainContextProvider } from './src/context/maincontext';

const App = () => {

 
  return (
    <NativeBaseProvider>
      <MainContextProvider>

       <MainNavigation />
    </MainContextProvider>
    </NativeBaseProvider>

  );
};
export default App;
