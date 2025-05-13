import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { HeaderAuth } from '../../../components/headers'
import { styles } from './style';
import { CartList } from '../../../components/generalcomponents';
import { ContactAndShipData, products } from '../../../services/constants/dummyData';
import Spacer from '../../../components/spacer';
import { Method, Payment, ShippingContact, Summary } from '../../../components/smallcomponents';
import { KeyboardAvoiding } from '../../../components/scrollViews';
const OrderDetal = ({}) => {
  return (
   <Wrapper>
    <HeaderAuth Title="Order # 1234567"/>
    <KeyboardAvoiding>
    <Spacer isBasic/>
    <Wrapper  style={styles.itemwrapper}><Text style={styles.itemtext}>{"Items"}</Text></Wrapper>
  <Spacer isSmall/>
  <CartList products={products} />
  <Spacer isBasic/>
  <ShippingContact style={styles.contdetail} email={ContactAndShipData.email} city={ContactAndShipData.city} country={ContactAndShipData.country} address={ContactAndShipData.address}/>
  <Method />
  <Spacer isBasic/>
  <Payment />
  <Spacer isBasic/>
  <Summary />
  <Spacer isDoubleBase/>
  <Spacer isDoubleBase/>
  </KeyboardAvoiding>
   </Wrapper>
  )
}

export default OrderDetal