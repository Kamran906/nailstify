import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";
export const styles = StyleSheet.create({
    text:{
        color:colors.appTextColor6,
        fontWeight:'900',
        fontSize:totalSize(1.66)
    },
    txt:{
        color:colors.appTextColor6,
        fontWeight:'900',
        fontSize:totalSize(1.33)
    },
    wrapper:{
        width:width(90),
        alignSelf:'center',
        top:height(2)
    },
    lowertxt:{
        color:colors.appTextColor3,
        top:height(1),
        fontSize:totalSize(1.15),
        fontWeight:'700'
    },
    shaperwrapper:{
        height:height(5.55),
        width:width(42.44),
        backgroundColor:colors.appColor5,
        borderRadius:9,
        marginLeft:width(4),
        margin:6
    },
    list:{
    marginLeft:width(1),
    },
    btnwrapper:{
        position:'absolute',
        bottom:20,
        width:width(100)
    }, button:{
        fontWeight: 'bold', fontsize: 20,
    },
    btn:{
        height:height(5.66),
        width:width(84)
    },
})