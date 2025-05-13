import { StyleSheet } from "react-native";
import { sizes, colors, appStyles } from "../../services";
import { height,width,totalSize } from "react-native-dimension";
export const styles = StyleSheet.create({
    professionsCard: {
        //borderColor:colors.appBgColor3,
        marginBottom: sizes.marginBottom
    },
    selectedProfessionsCard: {
        // borderColor:colors.appTextColor1,
        backgroundColor: colors.appBgColor2,
        marginBottom: sizes.marginBottom
    },

    ////SwipableModal
    swipableModalFooter: {
        backgroundColor: colors.appBgColor1,
        borderTopLeftRadius: sizes.cardRadius,
        borderTopRightRadius: sizes.cardRadius,
        paddingTop: sizes.baseMargin,
        ...appStyles.shadowDark
    },
    barContainer: {
        top: sizes.TinyMargin,
        alignSelf: 'center',
    },
    //EnterValueModalPrimaryCard
    enterValueModalPrimaryCard: {
        backgroundColor: colors.appBgColor1,
        borderRadius: sizes.modalRadius,
        padding: sizes.baseMargin,
        marginHorizontal: sizes.marginHorizontal * 2,
        ...appStyles.shadow
    },
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
    },
    welcome:{
        backgroundColor:colors.appTextColor6,
         width:width(95),
        height:height(85),
        borderTopRightRadius:totalSize(2.77),
        borderTopLeftRadius:totalSize(2.77)
    },
    icon:{
        marginRight:width(3)
    },
    button:{
        fontWeight: 'bold', fontsize: 20,
    },
    model:{
        alignSelf : 'center',
        position:'absolute',
        bottom:0,
        height: height(85),
        top:height(12.44)

    }
})