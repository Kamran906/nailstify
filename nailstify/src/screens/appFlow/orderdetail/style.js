import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";
export const styles=StyleSheet.create({
    itemwrapper:{
        width:width(90),
        alignSelf:'center'
    },
    itemtext:{
        fontSize:totalSize(1.88),
        color:colors.appTextColor6,
        fontWeight:'700'
    },
    contdetail:{
        backgroundColor:colors.appBgColor2
    }
})