import { StyleSheet } from "react-native";
import { height,width } from "react-native-dimension";
export const styles= StyleSheet.create({
    contactinformation:{
        width:width(100),
    },
    check:{
        alignSelf:'center',
        width:width(90),marginTop:height(.88), marginBottom:height(3)
    },
    Bttn:{
        position:'absolute',
        bottom:90,
        width:width(100)
    },
    shippingadress:{
        width:width(100),
    },
    addresscheck:{
        alignSelf:'center',
        width:width(88),marginTop:height(.88), marginBottom:height(19)
    },
})