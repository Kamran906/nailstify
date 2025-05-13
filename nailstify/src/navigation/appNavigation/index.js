import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers, tabs } from '../../services';
import * as App from '../../screens/appFlow';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChangePassword, LikeStyle, MyColors, MyShapes, SignUp } from '../../screens/authFlow';
const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (

    <Tab.Navigator screenOptions={tabs.screenOptions} >
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="shopping-bag" type='feather' color={color} size={26} />
        ),
      }} name="Home" component={App.Home} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="search" type='feather' color={color} size={26} />
        ),
      }}
        name="searchitem" component={App.SearchItem} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="chatbubble-outline" type='ionicon' color={color} size={26} />
        ),
      }}
        name="chatlist" component={App.ChatList} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
          <Icon name="person-outline" type='ionicon' color={color} size={26} />
        ),
      }}
        name="profile" component={App.Profile} />
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={headers.screenOptions}
      initialRouteName={routes.home}>
      <AppStack.Screen name={routes.home} component={MyTabs}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.shop} component={App.Shop}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.productdetail} component={App.ProductDetail}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.recommendedproduct} component={App.RecommendedProduct}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.privacypolicy} component={App.PrivacyPolicy}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.ordercomplete} component={App.OrderComplete}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.chat} component={App.Chat}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.myorder} component={App.MyOrder}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.orderdetail} component={App.OrderDetail}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.termofservice} component={App.TermOfService}
        options={{ headerShown: false, }} />
      <AppStack.Screen name={routes.shapes} component={MyShapes} />
      <AppStack.Screen name={routes.mycolors} component={MyColors} />
      <AppStack.Screen name={routes.likestyle} component={LikeStyle} />
      <AppStack.Screen name={routes.signup} component={SignUp} />
      <AppStack.Screen name={routes.changepassword} component={ChangePassword} />
    </AppStack.Navigator>
  )
}

export default AppNavigation