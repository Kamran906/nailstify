import React, {useState } from 'react'
import ProductCart from '../productcart'
import Spacer from '../../../components/spacer'
import {KeyboardAvoiding } from '../../../components/scrollViews'
import {OrderSummary } from '../../../components/smallcomponents'
import Wrapper from '../../../components/wrapper'
import useCart from './hook'
import { styles } from './style'
import { routes } from '../../../services'

const Cart = ({ navigation, onPressNext, products,onPressBack }) => {
  const { calculateTotalPrice, handleDecrement, handleIncrement, count, showDeleteIcon } = useCart(navigation)
  console.log("this is count" , count)
  return (
    <Wrapper style={styles.container} >
      <KeyboardAvoiding>
        <Spacer isSmall />
        <ProductCart isCartScreen={true} products={products} countdecreament={handleDecrement} countincreament={handleIncrement} countsum={count} deleticon={showDeleteIcon} />
        <Spacer isBasic/>
        <OrderSummary  onPressBack={onPressBack} total="Subtotal" rate={calculateTotalPrice} condition="Taxes and shipping charges will be calculated at checkout" onPress={onPressNext} />
      </KeyboardAvoiding>
    </Wrapper>
  )
}

export default Cart