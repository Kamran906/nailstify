import { StyleSheet } from "react-native";
import { height,width,totalSize } from "react-native-dimension";
export const styles= StyleSheet.create({
    imagestylewrapper:
        {height:height(19.44), width:width(37.33),borderRadius:totalSize(18),resizeMode:'contain',flexDirection:'row',alignItems:'center',justifyContent:'center'},
        input:{
            backgroundColor:'red',width:width(42),
        },
        Wrapper:{
            width:width(43.55),
        },
        inputwrapper:{
            width:width(92.44),
            alignSelf:'center',
        },
        phonenumber:{
            height:height(7),
            backgroundColor:'red'
        },
        icon: {
            position: 'absolute',
            right:width(9.3),
            top:height(2.2),
            backgroundColor:'red'
        },
        button:{
            fontWeight: 'bold', fontsize: 20,
        },
        btn:{
            height:height(5.66),
            width:width(84)
        },
        btnwrapper:{
            position:'absolute',
            bottom:totalSize(2.44),
            width:width(100)
        },
        imagewrapper:{
            height:height(15.39), width:width(33.33),borderRadius:totalSize(15)
        },
        
})