import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { CartList, NailsShapesList } from '../../../components/generalcomponents'
import { products } from '../../../services/constants/dummyData'
import { OrderSummary } from '../../../components/smallcomponents'
import { styles } from './style'
import Spacer from '../../../components/spacer'

const ProductCart = ({ isCartScreen, countdecreament, countincreament, countsum, deleticon }) => {
  return (
    <Wrapper >
      <Wrapper background1 style={styles.sub} >
        <Wrapper style={styles.textwrapper}>
          <Spacer isBasic/>
          <Text style={styles.text}>{"Your Cart"}</Text>
          <Spacer isSmall />
        </Wrapper>
        <CartList Cart={isCartScreen} products={products} Increamet={countincreament} Decrement={countdecreament} Sum={countsum} remove={deleticon} />
      </Wrapper>
    </Wrapper>
  )
}

export default ProductCart