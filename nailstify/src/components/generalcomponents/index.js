import {Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import Wrapper from '../wrapper'
import { Cart, CartDetailCart, CartHeadercomp, ChatList, FilterBottomsheetComponent, FinishBottomsheetComponent, OrderListComponent, ShapeBottomSheetComponent, SortyBy, SortyByBottomsheetComponent, SortyByhBottomsheetComponent, Stories, StoryComponent, UserOrderComponenet } from '../smallcomponents'
import Spacer from '../spacer'
import { Icon } from 'react-native-elements'
import { FilterData, FinishData, ShapeList, SorTByData, recomendProd } from '../../services/constants/dummyData'
import { width } from 'react-native-dimension'
export const NailsShapesList = ({ data }) => {
  return (
    <Wrapper>
      <FlatList
        data={data}
        numColumns={2}
        style={styles.list}
        horizontal={false}
        renderItem={({ item }) => (
          <Wrapper style={styles.shaperwrapper} justifyContentCenter alignItemsCenter>
            <Text>{item.name}</Text>
          </Wrapper>
        )}
      />
    </Wrapper>
  )
}
export const CartList = ({ products, Increamet, Decrement, Sum, Cart, remove }) => {
  return (
    <FlatList
      data={products}
      horizontal={false}
      renderItem={({ item }) => {
        return (
          <CartDetailCart isCartScreen={Cart} name={item?.name} shape={item?.shapes} like={item?.finish} rate={item?.rate} handleDecrement={Decrement} handleIncrement={Increamet} count={Sum} deletcicon={remove} />
        )
      }} />
  )
}
export const RecommendedProductsList = ({ onPress}) => {
  return (

    <FlatList
      data={recomendProd}
      numColumns={2}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={onPress}>
          <Wrapper style={styles.shapewrapper} >
            <Image style={styles.img} source={item?.image} />
            <Spacer isTiny />
            <Wrapper style={{ marginHorizontal: width(2) }}>
              <Text style={styles.name}>{item?.name}</Text>
            </Wrapper>
            <Spacer isTiny />
            <Wrapper style={styles.rate} flexDirectionRow justifyContentSpaceBetween alignItemsCenter >
              <Text style={styles.productRate}>Rs.{item?.rate}</Text>
              <Icon name='hearto' type='antdesign' size={16} />
            </Wrapper>
            <Spacer isSmall />
          </Wrapper>
        </TouchableOpacity>
      )}
    />

  )

}
export const StoryList = ({ data }) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      horizontal={true}
      renderItem={({ item }) => {
        return (
          <StoryComponent name={item?.name} image={item?.image} />
        )
      }} />
  )
}
export const CartTitleContainer = ({ data, step, setStep}) => {
  console.log(step)
  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item, index }) => {
        return (
          <CartHeadercomp onPress={() => setStep(index)} title={item} isSelected={step == index ? true : false} />
        )
      }} />
  )
}
export const AllProductsList = ({ products, onPressNext }) => {
  return (
    <FlatList
      data={products}
      horizontal={false}
      renderItem={({ item }) => {
        return (
          <Cart onPress={onPressNext} name={item?.name} like={item?.description} rate={item?.rate} />
        )
      }} />
  )
}

export const ChatUserList = ({ products, onPress }) => {
  return (
    <FlatList
      data={products}
      horizontal={false}
      renderItem={({ item }) => {
        return (
          <ChatList name={item?.name} masg={item?.massg} image={item?.image} onPress={onPress} />
        )
      }} />
  )
}

export const UserOrderOption = ({ data, onPress }) => {
  return (
    <FlatList
      data={data}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <UserOrderComponenet title={item?.title} onPress={() => onPress(item)} style={{ borderTopWidth: index == 0 ? 1 : 0 }} />
        )
      }} />
  )
}

export const UserSecondOptionList = ({ data, onPress }) => {
  return (
    <FlatList
      data={data}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <UserOrderComponenet title={item?.title} onPress={() => onPress(item)} style={{ borderTopWidth: index == 0 ? 1 : 0 }} />
        )
      }} />
  )
}

export const UserThirdOptionList = ({ data, onPress }) => {
  return (
    <FlatList
      data={data}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <UserOrderComponenet title={item?.title} onPress={() => onPress(item)} style={{ borderTopWidth: index == 0 ? 1 : 0 }} />
        )
      }} />
  )
}

export const OrdersList = ({ data, onPress }) => {
  return (
    <FlatList
      data={data}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <OrderListComponent onPress={onPress} title={item?.order} orderitem={item?.item} orderdate={item?.date} style={{ borderTopWidth: index == 0 ? 1 : 0 }} />
        )
      }} />
  )
}

export const ShapBottomSheet = ({ }) => {
  return (
    <FlatList
      style={styles.bottomflat}
      data={ShapeList}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <ShapeBottomSheetComponent shapesquare={item?.item} />
        )
      }} />
  )
}

export const FinishBottomsheet = ({  }) => {
  return (
    <FlatList
      style={styles.bottomflat}
      data={FinishData}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <FinishBottomsheetComponent finish={item?.item} />
        )
      }} />
  )
}

export const SortyByBottomSheet = ({ }) => {
  return (
    <FlatList
      style={styles.bottomflat}
      data={SorTByData}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <SortyByBottomsheetComponent sort={item?.item} orderdate={item?.date} style={{ borderTopWidth: index == 0 ? 1 : 1 }} />
        )
      }} />
  )
}

export const FilterBottomSheet = ({  }) => {
  return (
    <FlatList
      style={styles.bottomflat}
      data={FilterData}
      horizontal={false}
      renderItem={({ item, index }) => {
        return (
          <FilterBottomsheetComponent filter={item?.item} />
        )
      }} />
  )
}