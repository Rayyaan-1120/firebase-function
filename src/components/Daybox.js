import React from "react";
import { View,Text } from "native-base";
import { TouchableOpacity } from "react-native";


const DayBox = ({day,pressfunc,showcompleted}) => {
               
    return(
        <TouchableOpacity onPress={pressfunc} style={{backgroundColor:"#dadada",width:"90%",marginHorizontal:'auto',marginVertical:10}}>
            <View alignItems={'center'} w={'100%'} p={5}>
                <Text fontSize={15} textTransform="capitalize">{day}</Text>
                {showcompleted && <Text fontSize={15} color="green.500" textTransform="capitalize">Completed</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default DayBox