import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../services";
import { fonts } from "@rneui/base";
export const styles = StyleSheet.create({
    main: {
        height: height(14.77),
         borderWidth: 1.3,
        color: colors.appTextColor9,
        borderRadius: 15,
        borderColor:colors.appTextColor9,
        paddingLeft: 6,
        width:width(90),
        alignSelf:'center',
        backgroundColor:colors.appBgColor1
    },
    img: {
        height: height(12.31),
        width: width(26.66),
        borderRadius: totalSize(1.6)
    },
    names: {
        color: colors.appTextColor6,
        fontSize: totalSize(1.44),
        fontWeight: '800'
    },
    text: {
        color: colors.appTextColor4,
        fontSize: totalSize(1),
        top: -4,
        marginBottom: height(.4),
        fontWeight: '600'
    },
    detail: {
        height: height(12.31),
        marginLeft: width(2),
    },
    shipptext:{
        fontSize:totalSize(1.48),
        fontWeight:'500',
        color:colors.appTextColor3
    },
    rate: {
        color: colors.appTextColor6,
        fontWeight: '700'
    },
    countwrapper: {
        width: width(23),
        alignSelf: 'flex-end',
    },
    iconwrapper:{
        width: width(54),
        alignSelf:'flex-start',
        marginTop:height(.2),
    },
    chat: {
        backgroundColor: colors.appColor1,
        height: height(4.2),
        width: width(8),
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }, count: {
        fontSize: totalSize(1.64),
        color: colors.appTextColor6,
        fontWeight: '600',
    },
    txt: {
        color: colors.appTextColor6,
        fontWeight: '800',
        fontSize:totalSize(1.9),
    },
    titltext:{color:colors.appTextColor3,
        fontWeight:'900',
        fontSize:totalSize(1.44)},
    totalrate: {
        width: width(90)
    },
    totaltext: {
        color: colors.appTextColor3,
        fontSize: totalSize(1.44),
        fontWeight: '700'
    },
    cond: {
        width: width(50),
        top: height(1.44)
    },
    countbtn:{
        // marginTop:height(18),
        // backgroundColor:'red'
        position:'absolute',
        bottom:totalSize(3.33),
        width:width(100)
    },
    btnwrapper: {
        width: width(52),
        backgroundColor: colors.appBgColor7,
        height: height(5.66),
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        color: colors.appTextColor6,
        fontSize: totalSize(1.4),
        fontWeight: '800'
    },
    checkoutbtnwrapper: {
        width: width(34),
        backgroundColor: colors.appColor1,
        height: height(5.66),
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        position: 'absolute',
        width: width(90),
        alignSelf: 'center',
        bottom:0,
    },
    delete: {
       backgroundColor: colors.appColor2,
        height: height(4.2),
        width: width(8.22),
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ss: {
        width: width(88),
        alignSelf: 'center',
    marginBottom:height(1.77)
    },
    wrapper: {
         height: height(45),
         marginBottom:height(15),
         width:width(100),
    },
    icon:{
        marginTop:height(.1),marginLeft:width(.1)
    },
    sub2: {
        width: width(89),
        alignSelf: 'center',
    },
    storywrapper: {
        //    height:height(19),
        paddingLeft: width(3)
    },
    imagestyle: {
        height: width(13.86),
        width: width(13.86),
        resizeMode: 'contain',
    },
    namehere: {
        color: colors.appTextColor6,
        marginLeft: width(2.44),
        fontSize: totalSize(1.3)
    },
    inputstyle:{
      height:height(6.66),
      borderRadius: totalSize(1.5),
      width: width(88),
      backgroundColor:colors.appBgColor2
    },
    imgback: {
        height: height(7.3),
        width: width(15),
        borderRadius: totalSize(4.88),
        borderWidth: totalSize(.13),
        borderColor: colors.appColor1,
        marginLeft: width(2)
    },
    adstylewrapper: {
        height: height(15.27),
        width: width(89.33),
        borderRadius: totalSize(1.99),
        borderWidth: totalSize(.14),
        alignSelf: 'center',
        borderColor:colors.appTextColor9
    
    },
    subadwarpper: {
        width: width(48),
        paddingLeft: width(4),
        paddingTop: height(2),
        borderRadius:totalSize(2),
    },
    title: {
        fontSize: totalSize(1.88),
        fontWeight: '800',
        color: colors.appTextColor6
    },
    des: {
        color: colors.appTextColor3,
        fontSize: totalSize(1.44)
    },
    getRecommendbtn: {
        height: height(3.88),
        width: width(35),
        backgroundColor: colors.appColor1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgg: {
        width: width(38),
        height: height(15.08),
        borderRadius:totalSize(1.88),
    },
    btntxt: {
        color: colors.appTextColor6,
        fontSize: totalSize(1.3),
        fontWeight: '800'
    },
    titlewrapper:{
        height:height(7.3),padding:totalSize(.3)
    },
    headertitletext:{
        fontSize:totalSize(1.4),
        fontWeight:'700',
        color:colors.appTextColor4
    },
    labletext:{
        color:colors.appTextColor6,
        fontSize:totalSize(1.22),
        fontWeight:'800',
        marginBottom:height(.44)
    },
    cartbtn:{
        flexDirection:'row',
    },
    inputfield:{
        height:height(5.91),
        backgroundColor:colors.appBgColor2,
        width:width(40),
        borderRadius:totalSize(1.5),
        paddingLeft:13
    },
    butnwrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    imggg: {
        width: width(40),
        height: height(14.99),
    },
    sub:{
        fontWeight:'900',
        color:colors.appTextColor6,
        fontSize:totalSize(2.11),
    },
    chats:{
        backgroundColor:colors.appColor1,
        height:height(6),
        width:width(12),
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    colortext:{
        color:colors.appTextColor6,
        fontSize:totalSize(1.3)
    },    
    table:{
        borderWidth:.99,
        borderColor:colors.appTextColor9,
        height:height(22),
       borderRadius:totalSize(1.55),
        top:height(1.5)
    },
    sizewrapp:{
        borderBottomWidth:.99,
        borderColor:'lightgray',
        height:height(5.53),
    },
    name:{
        left:width(3),
        color:colors.appTextColor6,
        fontSize:totalSize(1.99),
        fontWeight:'700'
    },
    icon:{
        right:width(2)
    },
    selecttext:{
        color:colors.appTextColor4,
        right:width(4)
    },
    phonenumber:{
        height:height(7),
        width:width(90),
        backgroundColor:colors.appBgColor2,
        borderRadius:totalSize(2),
    },
    titletext:{
        color:colors.appTextColor6,
        fontSize:totalSize(1.3),
        fontWeight:'900',
    },
    maininputwrapper:{
        width:width(90),
        alignSelf:'center',
    },
    contactinformation:{
        width:width(100),
    },
    contactinformationsub:{
        width:width(89.99),
        alignSelf:'center'
    },
    inftitle:{
        color:colors.appTextColor3,
        fontSize:totalSize(1.99),
        fontWeight:'900'
    },
    acounttext:{
        fontSize:totalSize(1.48),
        fontWeight:'500',
        color:colors.appTextColor4
    },
    logtext:{
        color:colors.appTextColor6,
        fontSize:totalSize(1.77),
        fontWeight:'800',
        marginLeft:width(2.2)
    },
    returntext:{
        color:colors.appTextColor3,
        fontSize:totalSize(1.66),
        fontWeight:'900'
    },
    bottmtext:{
        width:width(82),
        alignSelf:'center'
    },
    btmtext:{
        color:colors.appTextColor3,
        fontSize:totalSize(1.44),
        fontWeight:'900'
    },
    contactshippingsub:{
        width:width(88),
      alignSelf:'center'
    },
    paymentmain:{
    
    },
    conttitle:{
        color:colors.appTextColor3,
        fontSize:totalSize(1.99),
        fontWeight:'900'
    },
    emailwrapper:{
        width:width(88),
        alignSelf:'center'
    },
    emailtext:{
        color:colors.appTextColor1,
        fontSize:totalSize(1.6),
        fontWeight:'500'
    },
    contactdetail:{
        width:width(88),
        alignSelf:'center',
        marginBottom:height(2.55)
    },
    Shippingmethod:{
        borderWidth:totalSize(.04),
       borderColor:colors.appTextColor4,
       borderBottomWidth:totalSize(.04),
       height:height(6.89),
    },
    shippingsub:{
        width:width(88),
      alignSelf:'center',
      
    },
    iconstyle:{
        marginLeft:width(2)
    },
    methodtext:{
        fontSize:totalSize(1.57),
        fontWeight:'600'
    },
    btn:{
        width:width(100),
        marginTop:height(11)
    },
    seeall: {
        fontSize: totalSize(1.5),
        fontWeight: '600',
        color: colors.appTextColor6
    },
    textall:{
        width:width(89),
        alignSelf:'center'
    },
    details: {
        height: height(13),
        marginLeft: width(2.77),
        width:width(41)
    },
    Cardwrapper: {
        width: width(88),
        alignSelf: 'center',
    marginBottom:height(1.66),
    borderWidth:.15,
    borderRadius:totalSize(2),
    borderColor:colors.appTextColor9
    },
    codeinput:{
        width:width(73.86),
    },
    labletextstyle:{
        fontWeight:'900',
        fontSize:totalSize(1.33)
    },
    codebtn:{
        borderRadius:totalSize(1.66),
        height:height(5.91),
        width:width(11),
        backgroundColor:colors.appColor1,
        justifyContent:'center',
        alignItems:'center',
        right:width(10)
    },
    codwrapper:{
        width:width(92),
        marginBottom:height(3),
        right:width(1.44)
    },
    transtext:{
        fontSize:totalSize(1.66),
        fontWeight:'400'
    },
    image:{
        width:width(7),
        height:height(4)
    },
    cashtext:{
        fontSize:totalSize(1.66),
        fontWeight:'500',
        color:colors.appTextColor3,
        left:width(4)
    },
    ordermain:{
        marginBottom:height(15)
    },
    total:{
        fontSize:totalSize(1.55),
        color:colors.appTextColor6,
        fontWeight:'800'
    },
    logostyle:{
        height:height(10.96),
        width:width(60)
    },
    centeritems:{
        width:width(85),
        flexDirection:'column',
    },
    comptext:{
        fontSize:totalSize(2.3),
        fontWeight:'700',
        color:colors.appTextColor6
    },
    order:{
        fontSize:totalSize(1.33),
        color:colors.appTextColor3
    },
    tnx:{
        fontSize:totalSize(1.55),
        fontWeight:'600',
        color:colors.appTextColor6
    },
    chatwrapper:{
        height:height(7),
        borderBottomWidth:1.55,
        borderColor:colors.appTextColor9
    },
    chatsub:{
        width:width(90),
        alignSelf:'center',
    },
    username:{
        fontSize:totalSize(1.88),
        fontWeight:'700',
        color:colors.appTextColor3
    },
    msgs:{
        fontSize:totalSize(1.55),
        color:colors.appTextColor3
    },
    namewrapper:{
        marginLeft:width(4),
    },
    wrapper:{
        width:width(90),
        alignSelf:'center',
    },text:{
        color:colors.appTextColor9,
        fontWeight:'900',
        fontSize:totalSize(1.2)
    },
    userimage:{
        width:width(20),
        height:height(9.23),
        resizeMode:'contain'
    },
    useremail:{
        fontSize:totalSize(1.2),
        color:colors.appTextColor3,
        fontWeight:'500'
    },
    profilewrapper:{
        width:width(89.33),
    },
    profmain:{width:width(100)
    },
    nameemailwrapper:{  width:width(35), marginLeft:width(2.55),height:height(9.33),flexDirection:'column',justifyContent:'space-evenly'
    },
    ordercomp:{
        height:height(7),
        width:width(100),
        borderTopWidth:1.44,
        borderColor:colors.appTextColor9,
        borderBottomWidth:1.4
    },
    optiontext:{
        fontSize:totalSize(1.77),
        fontWeight:'600',
        color:colors.appTextColor3
    },
    orderlist:{
        height:height(11.33),
        borderBottomWidth:1.88,
        borderColor:colors.appTextColor9
    },
    orderstyle:{
        color:colors.appTextColor3,
        fontWeight:'800',
        fontSize:totalSize(1.4)
    },
    itemtext:{
        color:colors.appTextColor3,
        fontWeight:'600',
        fontSize:totalSize(1.1), 
    },
    datetext:{
        color:colors.appTextColor4,
        fontSize:totalSize(1.3), 
    },
    Sheet:{
        width:width(92),
        alignSelf:'center',
        height:height(6.89)
    },
    summerywrapper:{
        backgroundColor:colors.appBgColor1,
        height:height(41)
    },
    text:{
        color:colors.appTextColor6,
        top:height(1.2),
        marginBottom:height(.4)
    },
    prodrate:{
        color:colors.appTextColor3,
        fontWeight:'600'
    },
    liketext:{
        fontSize:totalSize(1.44)
    }
})