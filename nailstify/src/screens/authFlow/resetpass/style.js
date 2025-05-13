import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";

export const styles= StyleSheet.create({
    container:{
        width:width(90),
        alignSelf:'center',
        top:height(4.33),
        marginBottom:height(5,3)
    },
    text:{
        color:colors.appTextColor3,
        fontWeight:'700',
        fontSize:totalSize(1.99),
    },
    btncontainer:{
        width:width(90),
        alignSelf:'center',
        top:height(2)
    },
    button:{
        fontWeight: 'bold', fontsize: 20,
    },
    btn:{
        height:height(5.66),
        width:width(84)
    },
})