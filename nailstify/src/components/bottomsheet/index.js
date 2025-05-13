import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../wrapper'

const Bottomsheet = () => {
  return (
    <Wrapper>
         <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
          
          </View>
        </BottomSheet>
    </Wrapper>
  )
}

export default Bottomsheet