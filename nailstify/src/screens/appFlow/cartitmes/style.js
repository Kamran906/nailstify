import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";
export const  styles= StyleSheet.create({
    title:{
        fontSize:totalSize(1.55),
        color:colors.appTextColor6,
        fontWeight:'900'
    },
    cartcontainer:{
width:width(92),
alignSelf:'center'
    },
    m:{
        width:width(100),
        top:height(.99),
    },
    ordersummery:{
        height:height(45),
        backgroundColor:colors.appBgColor1
    }
})