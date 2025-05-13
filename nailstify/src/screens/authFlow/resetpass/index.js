import { View } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers, TextInputs } from '../../../components'
import Text from '../../../components/text'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { height } from 'react-native-dimension'
import { HeaderAuth } from '../../../components/headers'
const ResetPassword = () => {
  return (
    <Wrapper isMain>
      <HeaderAuth Title="Reset Password" />
      <Wrapper style={styles.container}>
        <Text style={styles.text}>{"Enter your email and we'll send you a link to reset you password"}</Text>
      </Wrapper>
      <Spacer isBasic />
      <TextInputs.Colored placeholder={"johndoe@email.com"} title={"Email"} />
      <Spacer isBasic />
      <Wrapper style={styles.btncontainer} alignItemsCenter>
        <Buttons.Colored text="Send Password Reset Link" textStyle={styles.button} buttonStyle={styles.btn} />
      </Wrapper>
    </Wrapper>
  )
}
export default ResetPassword