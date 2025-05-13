import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Wrapper from '../wrapper'
import { styles } from './style'
import { useState } from 'react'
import { width } from 'react-native-dimension'
import { Buttons } from '..'
import { Icon } from 'react-native-elements'
import Spacer from '../spacer'
styles
const Quantity = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
       
      };
    
      const handleDecrement = () => {
        if (count === 1) {
          setShowDeleteIcon(true);
        } else {
          setCount(count - 1);
        }
      };
      useEffect(()=>{
        if (count === 1) {
          
        }
      },[count])
    return (
        <Wrapper style={styles.main}>
            <Wrapper alignItemsFlexEnd >
                <Wrapper style={styles.sub} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
                    <Text style={styles.txt}>Quantity</Text>
                </Wrapper>
            </Wrapper>
            <Spacer isDoubleBase />
            <Wrapper style={styles.countwrapper} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
                <TouchableOpacity style={styles.countbtn} onPress={handleDecrement}  >
                    <Icon name='minus' type='antdesign' size={42} />
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity style={styles.countbtn} onPress={handleIncrement}>
                    <Icon name='add' type='ionicon' size={42} />
                </TouchableOpacity>
            </Wrapper>
            
        </Wrapper>
    )
}

export default Quantity