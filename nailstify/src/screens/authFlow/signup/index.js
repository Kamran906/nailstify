import { TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, TextInputs } from '../../../components'
import { styles } from './style'
import { takePhotoFromCamera } from '../../../services/helpingMethods'
import { appImages, colors, routes } from '../../../services'
import Spacer from '../../../components/spacer'
import { HeaderAuth } from '../../../components/headers'
import Input, { PhoneInputComp } from '../../../components/smallcomponents'
import { KeyboardAvoiding } from '../../../components/scrollViews'
import { Icon } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid'

const SignUp = ({ navigation, route }) => {
  //State
  const [firstname,setFristName]=useState();
  const [lastname,setLastName]=useState();
  const [email,setEmail]=useState();
  const [number,setNumber]=useState();
  const [password,setPassword]=useState();
  const [profile, setProfile] = useState(null);
  const [confirmpassword,setConfirmpassword]=useState();

  //firest Base function
  const registerUser=()=>{
    const userId= uuid.v4()
firestore().collection("users").doc(userId).set({
  name:firstname,
  lastname:lastname,
  email:email,
  password:password,
  confirmpassword:confirmpassword,
  userId:userId,
  number:number
}).then(res=>{
  navigation.navigate(routes.signin)
  console.log("user Created")
}).catch(error=>{
  console.log(error)
})
  }
  // validation
  const validate=()=>{
    let isValid= true
    if(firstname==''){
      isValid=false
    }
    if(lastname==''){
      isValid=false
    }
    if(email==''){
      isValid=false
    }
    if(password==''){
      isValid=false
    }
    if(confirmpassword==''){
      isValid=false
    }
    if(number==''){
      isValid=false
    }
    if(password !==confirmpassword){
      isValid=false
    }
    return isValid;
  }
//signup handle function
const signupHandle=()=>{
  if(validate()){
    registerUser();
  }else{
    Alert.alert("Please Enter your Correct Data")
  }
}

  console.log(route?.params?.screen) 
  //Function of Camer 
  const openCamera = async () => {
    let image = await takePhotoFromCamera()
    if (image) {
      console.log(image?.path)
      setProfile(image)
    }
  }
  useEffect(() => {
    console.log('first,', profile)
  }, [])
  console.log(route?.params?.screen, 'Edit')
  return (
    <Wrapper isMain background1 >
      <HeaderAuth Title={
        route?.params?.screen == 'editProfile' ? "Edit Profil" : "Create an account"} />
      <KeyboardAvoiding >
        <Spacer isBasic />
        <TouchableOpacity onPress={openCamera} >
          <Wrapper alignItemsCenter justifyContentCenter >
            <Wrapper isImageBackground source={profile != null ? { uri: profile?.path } : appImages.profile} style={styles.imagestylewrapper}>
              <Icon name='camera' type='feather' size={25} color={colors.appBgColor1} />
            </Wrapper>
          </Wrapper>
        </TouchableOpacity>
        <Spacer isBasic />
        <Wrapper style={styles.inputwrapper} flexDirectionRow justifyContentSpaceBetween>
          <Wrapper flexDirectionRow style={styles.Wrapper}>
            <Input label="FIRST NAME" placeholder="First Name" value={firstname} onChangeText={txt=> setFristName(txt)} />
          </Wrapper>
          <Wrapper flexDirectionRow style={styles.Wrapper}>
            <Input label="LAST NAME" placeholder="Last Name" value={lastname} onChangeText={txt=> setLastName(txt)} />
          </Wrapper>
        </Wrapper>
        <Spacer isBasic />
        <TextInputs.Colored placeholder={"johndoe@email.com"} title={"Email"} value={email} onChangeText={txt=> setEmail(txt)}/>
        <Spacer isBasic />
        <PhoneInputComp title="PHONE NUMBER" value={number} onChangeText={txt=> setNumber(txt)}/>
        <Spacer isBasic />
        {route?.params?.screen == 'editProfile' ? null :
            <Wrapper>
              <TextInputs.Colored title={"PASSWORD"} placeholder="Password" iconNameRight={'eye'}
              value={password} onChangeText={txt=> setPassword(txt)}
                iconTypeRight={'feather'} />
              <Spacer isBasic />
              <TextInputs.Colored title={"CONFIRM PASSWORD"} placeholder="Confirm Password" iconNameRight={'eye'}
              value={confirmpassword} onChangeText={txt=> setConfirmpassword(txt)}
                iconTypeRight={'feather'} />
              <Spacer isDoubleBase />
            </Wrapper>}
      </KeyboardAvoiding>
      <Wrapper style={styles.btnwrapper} alignItemsCenter>
        <Buttons.Colored text={
          route?.params?.screen == 'editProfile' ? "Save Change" : "Sign Up"} textStyle={styles.button} buttonStyle={styles.btn} onPress={() =>{signupHandle()}} />
      </Wrapper>
    </Wrapper>
  )
}
export default SignUp