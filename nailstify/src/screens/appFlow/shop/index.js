import React, { useEffect, useState } from 'react'
import { routes } from '../../../services'
import { products } from '../../../services/constants/dummyData'
import Spacer from '../../../components/spacer'
import Wrapper from '../../../components/wrapper'
import CartHeader from '../../../components/headers'
import Information from '../Information'
import Shipping from '../shippping'
import Payment from '../payment'
import Cart from '../cart'

const Shop = ({ navigation }) => {
  const [togler, setTogler] = useState("Cart")
  const [step, setStep] = useState(0)
  return (
    <Wrapper>
        <Spacer isSmall />
        <CartHeader onPressback={() => navigation.navigate(routes.home)} setStep={setStep} step={step}/>
        {step == 0 ? (
          <Cart onPressNext = {()=> setStep(1)  } onPressBack={()=>navigation.navigate(routes.home)} data={products}/>
        )
          :
          step == 1 ? (
            <Information onPressNext = {()=> setStep(2)} onPressBack={()=> setStep(0)} />
          )
            :
            step == 2 ? (
              <Shipping onPressNext = {()=> setStep(3)} onPressBack={()=> setStep(1)}/>
            )
              : (
                <Payment onPressBack={()=> setStep(1)} onPressNext = {()=>navigation.navigate(routes.ordercomplete)}/>
              )}
    </Wrapper>
  )
}

export default Shop