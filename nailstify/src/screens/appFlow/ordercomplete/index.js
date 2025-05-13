import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { OrderCompleteComp } from '../../../components/smallcomponents'
import { Buttons } from '../../../components'
import { styles } from './style'
import { routes } from '../../../services'

const OrderComplete = ({navigation}) => {
  return (
   <Wrapper isMain>
    <OrderCompleteComp/>
    <Wrapper style={styles.btn} alignItemsCenter>
    <Buttons.Colored text="Continue Shopping"  textStyle={{fontWeight:'bold',fontsize:20}} onPress={()=>navigation.navigate(routes.home)} />
    </Wrapper>
   </Wrapper>
  )
}

export default OrderComplete