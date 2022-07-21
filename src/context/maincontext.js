import React, {useContext, createContext, useState} from 'react';

const MainContext = createContext();

export const MainContextProvider = ({children}) => {
 
  const [data,setdata] = useState([])

  const [fetchagain,setfetchagain] = useState(false)


  return (
    <MainContext.Provider value={{data,setdata,fetchagain,setfetchagain}}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () =>  useContext(MainContext);
