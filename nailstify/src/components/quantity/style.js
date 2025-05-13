import { StyleSheet } from "react-native";
import { height , totalSize, width} from "react-native-dimension";
import { colors } from "../../services";
export const styles= StyleSheet.create({
   sub:{
    width:width(55),
    right:width(4),
marginTop:height(1.33)
   },
   txt:{
    color:colors.appTextColor6,
    fontWeight:'900',
    fontSize:totalSize(2.3)
   },
   countbtn:{
    backgroundColor:colors.appColor1,
    height:height(7),
    width:width(14.33),
    borderRadius:27,
    justifyContent:'center',
    alignItems:'center'
},
countwrapper:{
    width:width(63),
    alignSelf:'center',
},
count:{
    fontSize:totalSize(4),
    color:colors.appTextColor6
}
})