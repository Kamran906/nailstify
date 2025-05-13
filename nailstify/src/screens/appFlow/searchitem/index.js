import {Text } from 'react-native'
import React, { useRef } from 'react'
import Wrapper from '../../../components/wrapper'
import Spacer from '../../../components/spacer'
import { SearchProductsHeader } from '../../../components/headers'
import { styles } from './style'
import { FilterBottomSheet, RecommendedProductsList, SortyByBottomSheet } from '../../../components/generalcomponents'
import RBSheet from 'react-native-raw-bottom-sheet'
import { height } from 'react-native-dimension'
import { routes } from '../../../services'
import { TextInputs } from '../../../components'

const SearchItem = ({ navigation }) => {
  const refRBSheet = useRef();
  const Filter = useRef();
  return (
    <Wrapper style={{flex:1}} >
      <SearchProductsHeader onPressCart={() => navigation.navigate(routes.shop)} onPress={() => refRBSheet.current.open()} onPressFilter={() => Filter.current.open()} />
      <Spacer isSmall />
      <TextInputs.Search placeholder="Search messsges" inputContainerStyle={styles.inputstyle} iconNameRight="search" iconTypeRight="feather"/>
      <Spacer isSmall />
      <Wrapper isMain alignItemsCenter style={styles.products}>
        <RecommendedProductsList onPress={() => navigation.navigate(routes.productdetail)} />
      </Wrapper>
      {/* Sort By Bottom sheet */}
      <Wrapper style={styles.bottomsheet}>
        <RBSheet
          ref={refRBSheet} closeOnDragDown={true} closeOnPressMask={false} customStyles={{
            wrapper: {
              flex: 1,
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
          height={height(37)}
        >
          <Wrapper style={styles.sub} alignItemsCenter>
            <Text style={styles.txt}>{"Sort By"}</Text>
          </Wrapper>
          <SortyByBottomSheet />
        </RBSheet>
      </Wrapper>
      {/* Filter Bottom Sheet */}
      <Wrapper style={styles.bottomsheet}>
        <RBSheet
          ref={Filter} closeOnDragDown={true} closeOnPressMask={false} customStyles={{
            wrapper: {
              flex: 1,
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
          height={height(29)}
        >
          <Wrapper style={styles.sub} alignItemsCenter>
            <Text style={styles.txt}>{"Filter"}</Text>
          </Wrapper>
          <FilterBottomSheet />
        </RBSheet>
      </Wrapper>
    </Wrapper>
  )
}

export default SearchItem