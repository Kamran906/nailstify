import React from 'react'
import { appImages, colors } from '../../services'
import Wrapper from '../wrapper';
import Text from '../text'
import { styles } from './style';
import { Icon } from 'react-native-elements';
import { Image, TouchableOpacity } from 'react-native';
import { CartTitle, CartTitleContainer } from '../generalcomponents';
import { CartheaderData } from '../../services/constants/dummyData';
import { goBack } from '../../navigation/rootNavigation';
import { useRoute } from '@react-navigation/native';
import Spacer from '../spacer';
import { Round } from '../images';

export const HomeHeader = ({ onPressCart }) => {
  return (
    <Wrapper alignItemsCenter style={styles.main}>
      <Wrapper flexDirectionRow justifyContentSpaceBetween alignItemsCenter style={styles.head}>
        <Image style={styles.img} source={appImages.splash} />
        <TouchableOpacity onPress={onPressCart}>
          <Icon name="shopping-cart" type="feather" color={colors.appTextColor3} />
        </TouchableOpacity>
      </Wrapper>
    </Wrapper>)
}

const CartHeader = ({ onPressback, setStep, step }) => {
  const route = useRoute()

  return (
    <Wrapper style={styles.container} background1 >
      <Wrapper style={styles.sub} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
        <Image style={styles.img} source={appImages.splash} />
        <Icon name='close' type='antdesign' onPress={onPressback} color={colors.appTextColor3} />
      </Wrapper>
      <Wrapper style={styles.cartcontainer}>
        <CartTitleContainer data={CartheaderData} setStep={setStep} step={step} />
      </Wrapper>
    </Wrapper>)
}
export default CartHeader

export const ProductDetailHaeder = ({ onBackPress, caption, onPressCart, Iconname, IconeType }) => {
  return (
    <Wrapper alignItemsCenter style={styles.main}>
      <Wrapper flexDirectionRow justifyContentSpaceBetween alignItemsCenter style={styles.head}>
        <Wrapper flexDirectionRow alignItemsCenter>
          <TouchableOpacity onPress={onBackPress ? onBackPress : goBack}>
            <Icon name="keyboard-arrow-left" type="materialIcon" size={27} color={colors.appTextColor3} />
          </TouchableOpacity>
          <Text style={styles.htext}>{caption}</Text>
        </Wrapper>
        <Wrapper flexDirectionRow justifyContentFlexend alignItemsCenter style={styles.righticons}>
          <TouchableOpacity style={styles.uploadicon}>
            <Icon
              name={Iconname} type={IconeType} size={18} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressCart}>
            <Icon name="shopping-cart" type="feather" color={colors.appTextColor3} />
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const HeaderAuth = ({ onBackPress, Title, image, name }) => {
  return (
    <Wrapper style={styles.mainhead} alignItemsCenter justifyContentCenter>
      <Wrapper style={styles.authhead} flexDirectionRow alignItemsCenter>
        <TouchableOpacity onPress={onBackPress ? onBackPress : goBack}>
          <Icon name="keyboard-arrow-left" type="materialIcon" size={30} color={colors.appTextColor3} />
        </TouchableOpacity>
        <Wrapper style={styles.Textwrapper}>
          <Text style={styles.Titilestyle}>{Title}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const SearchProductsHeader = ({ onPressCart, onPress, onPressFilter }) => {
  return (
    <Wrapper alignItemsCenter style={styles.main}>
      <Wrapper flexDirectionRow justifyContentSpaceBetween alignItemsCenter style={styles.head}>
        <Wrapper flexDirectionRow alignItemsCenter>
          <Image style={styles.img} source={appImages.splash} />
        </Wrapper>
        <Wrapper flexDirectionRow justifyContentSpaceBetween alignItemsCenter style={styles.icons}>
          <TouchableOpacity onPress={onPress} >
            <Icon
              name='sort-ascending' type="material-community" size={21} color={colors.appTextColor3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressFilter}>
            <Icon
              name='sound-mix' type="entypo" size={21} color={colors.appTextColor3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressCart} >
            <Icon name="shopping-cart" type="feather" size={21} color={colors.appTextColor3} />
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const ChatHeader = ({ onBackPress, Title, image, name }) => {
  return (
    <Wrapper style={styles.chatthead} alignItemsCenter justifyContentCenter>
      <Wrapper style={styles.authhead} flexDirectionRow alignItemsCenter>
        <TouchableOpacity onPress={onBackPress ? onBackPress : goBack}>
          <Icon name="keyboard-arrow-left" type="materialIcon" size={30} color={colors.appTextColor3} />
        </TouchableOpacity>
        <Wrapper style={styles.Textwrapper}>
          <Wrapper justifyContentCenter style={styles.userimage} >
            <Round source={image} size={32} />
            <Text alignTextCenter isTextColor2 >{name}</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}