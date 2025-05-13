import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../services";
export const styles= StyleSheet.create({
    
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
        
shapewrapper:{
    width:width(41.88),
    backgroundColor:colors.appBgColor1,
    borderRadius:17,
    margin:width(2),
    alignSelf:'center',
    borderWidth: 1,
    borderColor: colors.appTextColor9
},
name:{
    color:colors.appTextColor6,
    fontSize:totalSize(1.66),
    fontWeight:'700',
},
productRate:{
    color:colors.appTextColor6,
    fontSize:totalSize(1.5),
},
img:{
    width:width(41.44),
    borderTopLeftRadius:17,
    borderTopRightRadius:17
},
rate:{
    marginHorizontal: width(2)
} ,
bottomflat:{
    marginTop:height(2)
}
})