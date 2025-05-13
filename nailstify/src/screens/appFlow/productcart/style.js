import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";
export const styles= StyleSheet.create({
    container:{
        width:width(90),
        alignSelf:'center'
    },
    sub:{
        width:width(100),
        top:height(1),
    },
    text:{
        fontSize:totalSize(1.77),
        fontWeight:'800',
        color:colors.appTextColor6
    },
    textwrapper:{
        width:width(88),
        alignSelf:'center',
    }
})