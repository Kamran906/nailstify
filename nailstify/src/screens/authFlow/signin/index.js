import { View, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers, TextInputs } from '../../../components'
import { appImages, routes } from '../../../services'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { HeaderAuth } from '../../../components/headers'
import { KeyboardAvoiding } from '../../../components/scrollViews'
import { Icon } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const LogInUser = () => {
    firestore()
      .collection('users')
      .where('email', '==', email,'password','==',password)
      .get()
      .then(res => {
        if (res.docs != []) {
          console.log(JSON.stringify(res.docs[0].data()));
          gotoNext(
            res.docs[0].data().name,
            res.docs[0].data().email,
            res.docs[0].data().userId)
        } else {
          Alert.alert("User Not Found");
        }
      })
      .catch(error => {
        console.log(error)
        Alert.alert("User Not Found")
      })
  }
  //save data in async storage
  const gotoNext=async(name,email,userId)=>{
await AsyncStorage.setItem('NAME',name);
await AsyncStorage.setItem('EMAIL',email);
await AsyncStorage.setItem('USERID',userId);
navigation.navigate(routes.chat)
  }
  return (
    <Wrapper isMain>
      <HeaderAuth />
      <KeyboardAvoiding>
        <Wrapper alignItemsCenter>
          <Spacer isTiny />
          <Image source={appImages.splash} />
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Text style={styles.logintext}>{"Log in to your account"}</Text>
        </Wrapper>
        <Spacer isDoubleBase />
        <TextInputs.Colored
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholder={"johndoe@email.com"}
          title={"Email"}
        />
        <Spacer isBasic />
        <TextInputs.Colored
          value={password}
          onChangeText={txt => setPassword(txt)}
          title={"PASSWORD"}
          placeholder="Password"
          iconNameRight={'eye'}
          iconTypeRight={'feather'}
        />
        <Wrapper alignItemsFlexEnd>
          <Text style={styles.forgot} onPress={() =>{LogInUser(), navigation.navigate(routes.resetpasswrod)}}>Forgot password?</Text>
        </Wrapper>
        <Spacer isDoubleBase />
        <Wrapper alignItemsCenter>
          <Buttons.Colored text="Log In" textStyle={styles.button} buttonStyle={styles.btn} onPress={() => navigation.navigate(routes.app)} />
        </Wrapper>
      </KeyboardAvoiding>
    </Wrapper>
  )
}

export default SignIn