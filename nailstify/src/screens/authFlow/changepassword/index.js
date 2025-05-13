import { View, Text } from 'react-native'
import React from 'react'
import { Buttons, TextInputs, Wrapper } from '../../../components'
import { HeaderAuth } from '../../../components/headers'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { routes } from '../../../services'

const ChangePassword = ({route,navigation}) => {
    console.log(route?.params?.screen)
  return (
    <Wrapper isMain>
        <HeaderAuth Title="Change Password"/>
        <Spacer isBasic />
      <TextInputs.Colored placeholder={"CURRENT PASSWORD"} title={"CURRENT PASSWORD"} />
      <Spacer isBasic />
      <TextInputs.Colored placeholder={"NEW PASSWORD"} title={"NEW PASSWORD"} />
      <Spacer isBasic />
      <TextInputs.Colored placeholder={"CONFIRM PASSWORD"} title={"CONFIRM PASSWORD"} />
      <Spacer isBasic />
      <Wrapper style={styles.btncontainer} alignItemsCenter>
        <Buttons.Colored text="Update Password" textStyle={styles.button} buttonStyle={styles.btn} onPress={()=>navigation.navigate(routes.app,{screen:routes.profile})} />
      </Wrapper>
    </Wrapper>
  )
}

export default ChangePassword