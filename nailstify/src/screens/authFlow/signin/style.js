import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";
export const styles= StyleSheet.create({
    logintext:{
        fontSize:totalSize(2.77),
        color:colors.appTextColor6,
        fontWeight:'900'
    },
    forgot:{
        fontSize:totalSize(1.4),
        color:colors.appTextColor6,
        fontWeight:'900',
        right:width(6.44),
        top:height(.88)
    },
    button:{
        fontWeight: 'bold', fontsize: 20,
    },
    btn:{
        height:height(5.66),
        width:width(84)
    },
})