import { StyleSheet } from "react-native";
import { height,totalSize,width } from "react-native-dimension";
import { colors } from "../../../services";
export const styles= StyleSheet.create({
    subwrapper:{
      width:width(93),
    },
rtext:{
    fontSize:totalSize(2),
    color:colors.appTextColor6,
    fontWeight:'700',
    top:height(1.66),
    marginLeft:width(2),
    marginBottom:height(2.88)
}
})