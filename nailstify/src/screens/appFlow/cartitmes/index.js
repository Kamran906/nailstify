import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { CartDetail, CartList } from '../../../components/generalcomponents'
// import { products } from '../../../services/constants/dummyData'
import { OrderSummary } from '../../../components/smallcomponents'

const ProductCart = ({products,total,totalrate,cartcondition,delet}) => {
  return (
    <Wrapper>
      <Wrapper style={styles.m} background1 >
        <Spacer isBasic />
        <Wrapper style={styles.cartcontainer}>
          <Text style={styles.title}>{"Your Cart"}</Text>
          <CartList products={products} remove={delet} />
        </Wrapper>
      </Wrapper>
      <Spacer isBasicl />
      <Wrapper style={styles.ordersummery} alignItemsCenter>
        <OrderSummary total={total} rate={totalrate} condition={cartcondition}/>
      </Wrapper>
    </Wrapper>

  )
}

export default ProductCart