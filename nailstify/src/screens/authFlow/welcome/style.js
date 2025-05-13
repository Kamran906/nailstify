import { StyleSheet } from 'react-native';
import { colors } from '../../../services';
import { width ,height, totalSize} from 'react-native-dimension';


export const styles = StyleSheet.create({
logo:{
    resizeMode:"contain",
    width:width(50),
    height:height(58.3),
    top:height(20)
},
text:{
    color:colors.appTextColor4,
    fontSize:totalSize(2),
    top:-5
},
txt:{
    fontSize:totalSize(2.6),
    color:colors.appColor1,
    fontWeight:'800',
    top:-7
},
bottomwrapper:{
    width:width(100),
    position:'absolute',
    bottom:0,
    height:height(26)
},
welcome:{
    backgroundColor:colors.appTextColor6,
    borderTopLeftRadius:width(4),
    borderTopRightRadius:width(4),
     width:width(94.66),
    height:height(8),
},
icon:{
    marginRight:width(3)
},
button:{
    fontWeight: 'bold', fontsize: 20,
},
btn:{
    height:height(5.66),
    width:width(84)
},
model:{
    width:width(100),
    alignItems:'flex-start',
    backgroundColor:'red',
}
});