import { StyleSheet  } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../services";
export const styles = StyleSheet.create({
    inputfield:{
        height:height(6.44),
        backgroundColor:colors.appBgColor2,
        width:width(43),
        borderRadius:14,
        paddingLeft:13
    },
    labletext:{
        color:colors.appTextColor6,
        fontSize:totalSize(1.3),
        fontWeight:'900',
        marginBottom:height(.44)
    }
})