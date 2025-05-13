import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import Spacer from '../../../components/spacer'
import { ShippingContact, ShippingMethod } from '../../../components/smallcomponents'
import { styles } from './style'
import { ContactAndShipData } from '../../../services/constants/dummyData'

const Shipping = ({onPresNext,onPressBack}) => {
  return (
    <Wrapper>
      <Spacer isSmall />
          <ShippingContact onPressBack={onPressBack} isshippetid={true} ispayment={true} email={ContactAndShipData.email} city={ContactAndShipData.city} country={ContactAndShipData.country} address={ContactAndShipData.address}/>
        <Spacer isSmall />
        <ShippingMethod onPress={onPresNext}/>
    </Wrapper>
  )
}

export default Shipping