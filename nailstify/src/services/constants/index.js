import {colors}  from "../utilities/colors"
import  {appStyles}  from "../utilities/appStyles"
import { totalSize } from "react-native-dimension"


export const baseURL = ''
export const endPoints = {
    login: 'login',
    courses:'rooms',
    classes:'classes',
}
export const routes={
    auth:'auth',
    app:'app',
    splash:'splash',
    welcome:'welcome',
    home:'home',
    signup:'signup',
    signin:'signin',
    shapes:'shapes',
    mycolors:'mycolors',
    likestyle:'likestyle',
    recommendedproduct:'recommendedproduct',
    productdetail:'productdetail',
    nailmeasurement:'nailmeasurement',
    resetpasswrod:'resetpasswrod',
    searchitem:'searchitem',
    cart:'cart',
    productcart:'productcard',
    information:"information",
    shipping:'shipping',
    payment:'payment',
    shop:'shop',
    privacypolicy:'privacypolicy',
    ordercomplete:'ordercomplete',
    chatlist:'chatlist',
    profile:'profile',
    chat:'chat',
    myorder:'myorder',
    orderdetail:'orderdetail',
    termofservice:'termofservice',
    changepassword:'changepassword'
}
export const headers = {
    screenOptions: {
          headerShown: false,
         title: 'Title',
         headerTitleAlign: 'left',
         headerStyle: [appStyles.headerStyle],
         headerTitleStyle: appStyles.headerTitleStyle,
         headerTintColor: colors.appTextColor4,
         headerBackTitle: ' '

    }
}
export const tabs = {
    screenOptions: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.appTextColor3,
        tabBarInactiveTintColor: colors.appTextColor4,
    
        
        tabBarLabelStyle: {
          fontSize: totalSize(1.3),
          marginBottom: Platform.OS == 'android' ? 10 : 0
        },
      
    },
}