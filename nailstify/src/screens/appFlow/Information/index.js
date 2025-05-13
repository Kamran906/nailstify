import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper'
import {  InformationCart, ReturnToCart, ShippingAdressCart } from '../../../components/smallcomponents'
import Spacer from '../../../components/spacer'
import { styles } from './style'
import { Buttons, TextInputs } from '../../../components'
import { Primary } from '../../../components/checkBoxs'

const Information = ({ navigation,onPressNext ,onPressBack}) => {
  const [email,setEmail]= useState();
  const[country,setCountry]= useState();
  const [province,setProvince]= useState();
  const [city,setCity]=useState();
  const [address,setAddress]= useState();
  return (
    <ScrollView>
        <Spacer isSmall />
        <Wrapper style={styles.contactinformation} background1 >
          <InformationCart />
          <Spacer isBasic />
          <TextInputs.Colored placeholder={"johndoe@email.com"} title={"Email"} 
          value={email} onChangeText={txt=>setEmail(txt)}
          />
          <Spacer isSmall />
          <Wrapper style={styles.check}>
            <Primary text="Email me with update and offers" />
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        <Wrapper style={styles.shippingadress} background1 >
          <ShippingAdressCart />
          <Spacer isBasic />
          <TextInputs.Colored  placeholder={"Pakistan"} title={"COUNTRY"}
          value={country} onChangeText={txt=>setCountry(txt)}
          />
          <Spacer isSmall />
          <TextInputs.Colored  placeholder={"ICT"} title={"STATE/PROVINCE"}
          value={province} onChangeText={txt=>setProvince(txt)}
          />
          <Spacer isSmall />
          <TextInputs.Colored  placeholder={"Islamabad"} title={"CITY"} 
          value={city} onChangeText={txt=>setCity(txt)}
          />
          <Spacer isSmall />
          <TextInputs.Colored
            placeholder={"House#123, Street123, F7/1"} title={"STREET ADDRESS"} 
            value={address} onChangeText={txt=>setAddress(txt)}
            />
          <Spacer isSmall />
          <Wrapper style={styles.addresscheck}>
            <Primary text="Email me with update and offers" />
            <Spacer isDoubleBase />
            <Wrapper alignItemsCenter>
            <Buttons.Colored onPress={onPressNext} text="Continue to Shipping" textStyle={{ fontWeight: 'bold', fontsize: 20 }} />
            </Wrapper>
          <ReturnToCart onPress={onPressBack} />
          </Wrapper>
        </Wrapper>
    </ScrollView>
  )
}
export default Information