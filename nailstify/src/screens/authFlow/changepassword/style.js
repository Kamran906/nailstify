import { StyleSheet } from "react-native";
import { height,width } from "react-native-dimension";
export const styles= StyleSheet.create({
    btncontainer:{
        width:width(90),
        alignSelf:'center',
        top:height(2)
    },
    button:{
        fontWeight: 'bold', fontsize: 20,
    },
    btn:{
        height:height(5.66),
        width:width(84)
    },
})