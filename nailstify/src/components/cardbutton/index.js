import { TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../wrapper'
import { Text } from '..'
import { styles } from './style'
import { colors } from '../../services'
export const CardButton = () => {
    const [isInCart, setIsInCart] = useState(false);
    const handleCartButtonPress = () => {
        setIsInCart(!isInCart);
      };
  return (
  <Wrapper>
      <Wrapper style={styles.btom} justifyContentCenter alignItemsCenter >
                <Wrapper style={styles.in} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                    <Text style={styles.rate}>{"Rs. 800"}</Text>
                    <TouchableOpacity style={[styles.btnwrap, {backgroundColor:isInCart?'white':colors.appColor1 , borderWidth:isInCart? 1:.1 ,borderColor: isInCart?'red' :colors.appColor1} ]} onPress={handleCartButtonPress}>
                        <Text style={[styles.btntext,{ color: isInCart ? 'red' : 'black' },]}> {isInCart ? 'Remove from Cart' : 'Add to Cart'}</Text>
                    </TouchableOpacity>
                </Wrapper>
            </Wrapper>
  </Wrapper>
  )
}

