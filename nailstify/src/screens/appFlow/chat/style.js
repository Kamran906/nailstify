import { StyleSheet } from "react-native";
import { height, width, totalSize } from "react-native-dimension";
import { colors, fontFamily } from "../../../services";

export const styles = StyleSheet.create({
    subWrpper: {
        width: width(90),
        marginLeft: width(4)
    },
    chatwraper: {
        flex: 1,
    },
    input: {
        borderRadius: totalSize(2.1),
        backgroundColor: colors.appBgColor1,
        paddingLeft:totalSize(5.55),
        height:height(8),
        flexDirection:'row',
        marginBottom:-7,
    },
    replyWrapper: {
        padding: 6,
        marginHorizontal: 8,
        borderRadius: totalSize(2),
        borderWidth: 1.2,
        borderColor: colors.appTextColor5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        left:width(3),
    },
    userimgstyle:{ },
    voiceicon:{  marginLeft: width(5.55),bottom:height(.22) },
    imagegallery:{   },
        sendicon:{ 
            width:width(10.66),marginRight: width(2.44),
            height:height(5),top:4,
            backgroundColor:colors.appColor1,
            borderRadius:totalSize(2.55)
            },
    ss:{
        height:height(3),
    }

})