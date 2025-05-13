import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { products } from '../../../../services/constants/dummyData';

const useCart = (navigation) => {

  // All useState
  const [count, setCount] = useState(1);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  // function for handle cart increment
  const handleIncrement = () => {
    console.log("sdfasdfasdfasd", count)
    setCount(count + 1);
    setShowDeleteIcon(false);
  };

  // function for cart decrement
  const handleDecrement = () => {
    if (count === 1) {
      setShowDeleteIcon(true);
    } else {
      if(count > 1) setCount(count - 1);
    }
  };

  // listner for show delete button when cart count is 1
  useEffect(() => {
    if (count === 1) {
      setShowDeleteIcon(true);
    }
  }, [count])


  const makeRateFilter = products.map((item) => {
    return item.rate
  })
  const calculateTotalPrice = makeRateFilter.reduce((fff, val) => {
    return fff + val
  }, 0)
  console.log(calculateTotalPrice, makeRateFilter, 'calculateTotalPrice')
  return {

    calculateTotalPrice, handleDecrement, handleIncrement, count, showDeleteIcon

}
}

export default useCart