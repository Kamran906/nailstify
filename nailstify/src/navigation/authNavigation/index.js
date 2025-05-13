import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as Auth from '../../screens/authFlow';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={headers.screenOptions}
            initialRouteName={routes.signin}>
            <AuthStack.Screen name={routes.signup} component={ Auth.SignUp} /> 
            <AuthStack.Screen name={routes.signin} component={ Auth.SignIn} /> 
            <AuthStack.Screen name={routes.shapes} component={ Auth.MyShapes} />
            <AuthStack.Screen name={routes.mycolors} component={ Auth.MyColors} />
            <AuthStack.Screen name={routes.likestyle} component={ Auth.LikeStyle} /> 
            <AuthStack.Screen name={routes.resetpasswrod} component={ Auth.ResetPassword} />
         <AuthStack.Screen name={routes.changepassword} component={Auth.ChangePassword}/> 
        </AuthStack.Navigator>
    )
}

export default AuthNavigation