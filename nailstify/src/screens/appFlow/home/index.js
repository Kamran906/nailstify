import React, { Component, useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Wrapper } from '../../../components';
import { routes } from '../../../services';
import { AllProductsList, StoryList } from '../../../components/generalcomponents';
import { Allproducts, StoriesData, StoryImage, adOneData, adSecondData, adone } from '../../../services/constants/dummyData';
import { AdOneComponent, AdOneListDetail, AdSecondComponent, Cart, ExpandableText } from '../../../components/smallcomponents';
import Spacer from '../../../components/spacer';
import { HomeHeader } from '../../../components/headers';
import { KeyboardAvoiding } from '../../../components/scrollViews';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { Welcome, WelcomeModel } from '../../../components/modals';
import messaging from '@react-native-firebase/messaging';

function Home({ }) {
  const navigation = useNavigation();
  //use state
  const [isModalVisible, setModalVisible] = useState(false);
  //model close Function
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(()=>{
    getDeviceToken();
    },[])
    const getDeviceToken= async ()=>{
    let token= await messaging().getToken();
    console.log(token)
    }

    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived! in foreground mode', JSON.stringify(remoteMessage));
      });
  
      return unsubscribe;
    }, []);
  return (
    <Wrapper >
      <HomeHeader isHome onPressCart={() => navigation.navigate(routes.shop)} />
      <Spacer isBasic />
      <Button title='aaaa' onPress={()=>getDeviceToken()}/>
      <KeyboardAvoiding>
        <StoryList data={StoriesData}  />
        <Spacer isBasic />
        <AdOneComponent data={adOneData} style={styles.imgstyle} />
        <Spacer isBasic />
        <AdSecondComponent data={adSecondData} onPress={() => setModalVisible(true)} />
        <WelcomeModel isModalVisible={isModalVisible} closeModal={closeModal} onPresSignUp={() => { navigation.navigate(routes.auth, { screen: routes.signup }), setModalVisible(false) }} onPressSignIn={() => { navigation.navigate(routes.auth, { screen: routes.signin }), setModalVisible(false) }} />
        <Spacer isBasic />
        <ExpandableText LeftText="just Added" RightText="See All" onPress={() => navigation.navigate(routes.recommendedproduct)} />
        <Spacer isSmall />
        <AllProductsList 
          products={Allproducts} onPressNext={() => navigation.navigate(routes.productdetail)} />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </KeyboardAvoiding>
    </Wrapper>
  );
}

export default Home;
