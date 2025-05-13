import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { HeaderAuth } from '../../../components/headers'
import { OrdersList } from '../../../components/generalcomponents'
import { MyOrderDataList } from '../../../services/constants/dummyData'
import Input from '../../../components/smallcomponents'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { KeyboardAvoiding } from '../../../components/scrollViews'
import { routes } from '../../../services'
import { TextInputs } from '../../../components'

const MyOrder = ({navigation}) => {
  return (
   <Wrapper>
    <HeaderAuth Title="My Order"/>
    <KeyboardAvoiding>
      <Spacer isBasic/>
    <TextInputs.Search placeholder="Search messsges" inputContainerStyle={styles.inputstyle} iconNameRight="search" iconTypeRight="feather"/>
    <Spacer isBasic/>
    <OrdersList data={MyOrderDataList} onPress={()=>navigation.navigate(routes.orderdetail)}/>
    </KeyboardAvoiding>
   </Wrapper>
  )
}

export default MyOrder