import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import CartHeader from '../../../components/headers'
import { routes } from '../../../services'
import Spacer from '../../../components/spacer'
import { GiftCard, OrderSummary, OrderSummarySection, PaymentRecordList, PaymentSection } from '../../../components/smallcomponents'
import { ContactAndShipData } from '../../../services/constants/dummyData'
import { KeyboardAvoiding } from '../../../components/scrollViews'

const Payment = ({ navigation ,onPressNext,onPressBack}) => {
  return (
   <ScrollView>
    <Wrapper>  
      <Spacer isSmall />
      <PaymentRecordList onPressBack={onPressBack} email={ContactAndShipData.email} city={ContactAndShipData.city} country={ContactAndShipData.country} address={ContactAndShipData.address}/>
   <Spacer isSmall/>
   <GiftCard />
   <Spacer isSmall/>
   <PaymentSection />
   <Spacer isSmall/>
   <OrderSummarySection onPress={onPressNext} />
    </Wrapper>
    </ScrollView>
  )
}

export default Payment