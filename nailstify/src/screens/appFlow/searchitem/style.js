import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";
export const  styles = StyleSheet.create({
    searchinput:{
        backgroundColor:colors.appBgColor1,
        height:height(5.91),
        width:width(89.33),
        alignSelf:'center'
    },
    products:{
       width:width(100),
       alignItems:'center'
    },
    txt: {
        color: colors.appTextColor6,
        fontWeight: '800',
        fontSize:totalSize(1.99),
    },
    inputstyle:{
        backgroundColor:colors.appBgColor1,
        borderColor:colors.appTextColor9,
        borderWidth:1
    }
})