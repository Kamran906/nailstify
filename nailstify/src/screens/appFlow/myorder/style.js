import { StyleSheet } from "react-native";
import { height,width } from "react-native-dimension";
import { colors } from "../../../services";
export const styles= StyleSheet.create({
    searchinput:{
        backgroundColor:colors.appBgColor1,
        height:height(5.91),
        width:width(89.33),
        alignSelf:'center'
    },
    inputstyle:{
        backgroundColor:colors.appBgColor1,
        borderColor:colors.appTextColor9,
        borderWidth:1
    }
})