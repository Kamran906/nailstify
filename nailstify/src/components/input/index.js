import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Wrapper from '../wrapper'
import { styles } from './style'


const Input = ({label}) => {
  return (
<Wrapper alignItemsFlexStart>
    <Text style={styles.labletext}>{label}</Text>
    <TextInput style={styles.inputfield}/>
</Wrapper>
  )
}

export default Input