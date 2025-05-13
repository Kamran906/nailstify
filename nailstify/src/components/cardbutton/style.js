import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { appStyles, colors } from "../../services";
export const styles= StyleSheet.create({
    in:{
        width:width(88),
        alignSelf:'center'
    },
    btntext:{
        color:colors.appTextColor6,
        fontSize:totalSize(1.77),
        fontWeight:'800'
    },
    btnwrap:{
        width:width(42.66),
        height:height(5.91),
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
    },
    btom:{
        backgroundColor:colors.appBgColor1,
        position:'absolute',
        height:height(10),
        width:width(100),
        bottom:0,
        shadowColor: "#000",
// ...appStyles.shadow,  
elevation:5,  
borderTopWidth:.55,
borderColor:'lightgray'
    },
    rate:{
        color:colors.appTextColor6,
        fontSize:totalSize(1.99),
        fontWeight:'800'
    },
})