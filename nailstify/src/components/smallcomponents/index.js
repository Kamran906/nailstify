import { Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import Wrapper from '../wrapper'
import { styles } from './style'
import { appImages, colors} from '../../services'
import Spacer from '../spacer'
import { Buttons, Text } from '..'
import { Icon } from 'react-native-elements'
import RBSheet from 'react-native-raw-bottom-sheet'
import Quantity from '../quantity'
import PhoneInput from 'react-native-phone-number-input'
import { RadioButton } from 'react-native-paper';
import { height, totalSize, width } from 'react-native-dimension'
import { FinishBottomsheet, ShapBottomSheet } from '../generalcomponents'

export const CartDetailCart = ({ isCartScreen, deletcicon, shape, like, rate, handleDecrement, handleIncrement, count, name }) => {
  return (
    <Wrapper style={styles.ss}>
      <Wrapper style={styles.main} flexDirectionRow alignItemsCenter background1>
        <Wrapper >
          <Image source={appImages.product1} style={styles.img} />
        </Wrapper>
        <Wrapper flexDirectionRow >
          <Wrapper style={styles.detail}>
            <Text style={styles.names}>{name}</Text>
            <Spacer isSmall />
            <Text style={styles.shipptext}>Shapes:{shape}</Text>
            <Text style={styles.shipptext}>Finish:{like}</Text>
            <Spacer isSmall />
            <Text style={styles.rate}>Rs.{rate}</Text>
          </Wrapper>
          {isCartScreen && (
            <Wrapper style={styles.countwrapper} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
              {deletcicon ? (
                <TouchableOpacity style={styles.delete} onPress={handleDecrement}  >
                  <Icon name='delete' type='antdesign' color={"white"} size={18} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.chat} onPress={handleDecrement}  >
                  <Icon name='minus' type='antdesign' size={19} />
                </TouchableOpacity>
              )}
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity style={styles.chat} onPress={handleIncrement}>
                <Icon name='add' type='ionicon' size={19} />
              </TouchableOpacity>
            </Wrapper>)}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}
export const OrderSummary = ({ total, rate, condition, onPress, onPressBack }) => {
  return (
    <Wrapper style={styles.summerywrapper}  >
      <Wrapper style={styles.sub2} >
        <Spacer isBasic />
        <Text style={styles.txt}>{"Order Summary"}</Text>
        <Spacer isSmall />
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.totalrate}>
          <Text style={styles.totaltext}>{total}</Text>
          <Text style={styles.totaltext}>{rate}</Text>
        </Wrapper>
        <Wrapper style={styles.cond}>
          <Text>{condition}</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper style={styles.countbtn}>
        <ContinueButtons onPress={onPress} onPressBack={onPressBack} />
      </Wrapper>
    </Wrapper>)}

export const ContinueButtons = ({ onPress, onPressBack }) => {
  return (
    <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.buttons} >
      <TouchableOpacity style={styles.btnwrapper} onPress={onPressBack}>
        <Text style={styles.btntext}>{"Continue Shopping"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkoutbtnwrapper} onPress={onPress}>
        <Text style={styles.btntext}>{"Checkout"}</Text>
      </TouchableOpacity>
    </Wrapper>)}

export const StoryComponent = ({ name, image }) => {
  return (
    <Wrapper style={styles.storywrapper}>
      <Wrapper style={styles.imgback} background1 alignItemsCenter justifyContentCenter flexDirectionRow >
        <Image source={image} style={styles.imagestyle} />
      </Wrapper>
      <Spacer isTiny />
      <Text style={styles.namehere}>{name}</Text>
    </Wrapper>)}

export const AdOneComponent = ({ data, style }) => {
  return (
    <Wrapper style={styles.adstylewrapper} background1 flexDirectionRow >
      <Wrapper style={styles.subadwarpper}>
        <Text style={styles.title}>{data?.title}</Text>
        <Spacer isBasic />
        <Text style={styles.des}>{data?.description}</Text>
      </Wrapper>
      <Image source={data?.image} style={[styles.imggg, style]} />
    </Wrapper>)}

export const AdSecondComponent = ({ data, onPress }) => {
  return (
    <Wrapper style={styles.adstylewrapper} background1 flexDirectionRow alignItemsCenter>
      <Wrapper >
        <Image source={data?.image} style={styles.imgg} />
      </Wrapper>
      <Wrapper style={styles.subadwarpper}>
        <Spacer isBasic />
        <Wrapper style={styles.butnwrapper}  >
          <Text style={styles.des} alignTextCenter>{data?.description}</Text>
          <Spacer isSmall />
          <TouchableOpacity onPress={onPress} style={styles.getRecommendbtn}>
            <Text style={styles.btntxt}>{"Get Recommendations"}</Text>
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Wrapper>)}

export const CartHeadercomp = ({ title, onPress, isSelected }) => {
  console.log(isSelected)
  return (
    <Wrapper style={styles.titlewrapper} flexDirectionRow alignItemsCenter>
      <TouchableOpacity onPress={onPress} style={styles.cartbtn}>
        <Text style={[styles.headertitletext, { color: isSelected ? colors.black : colors.appTextColor4 }]}>{title}</Text>
        {
          title == "Payment" ? null :
            <Icon name='arrow-right' type='feather' size={16} />
        }
      </TouchableOpacity>
    </Wrapper>)}

const Input = ({ label, inputstyle, lablestyle,value,onChangeText, placeholder, iconname, icontype }) => {
  return (
    <Wrapper alignItemsCenter>
      <Wrapper style={{ width: width(88), marginLeft: width(1.66) }} alignItemsFlexStart>
        <Text style={[styles.labletext, lablestyle]}>{label}</Text>
        <TextInput value={value} onChangeText={onChangeText} placeholderTextColor={'#222222'} placeholder={placeholder} style={[styles.inputfield, inputstyle]} />
      </Wrapper>
    </Wrapper>)}
export default Input

export const ProdDescription = ({ onPress }) => {
  return (
    <Wrapper>
      <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
        <Text style={styles.sub}>{"French Tip Reverse Ombre"}</Text>
        <TouchableOpacity style={styles.chat} onPress={onPress}>
          <Icon name='chatbubble-outline' type='ionicon' size={19} />
        </TouchableOpacity>
      </Wrapper>
      <Text style={styles.colortext}>{"Red & Golden"}</Text>
    </Wrapper>)}

export const ProductSelection = () => {
  const refRBSheet = useRef();
  const rfRBSheet = useRef();
  const count = useRef();
  return (
    <Wrapper>
      <Wrapper style={styles.table}>
        <Wrapper style={styles.sizewrapp} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={styles.name}>{"Size"}</Text>
          <Wrapper style={styles.icon} flexDirectionRow justifyContentCenter alignItemsCenter>
            <Text style={styles.selecttext}>{"Select"}</Text>
            <Icon style={styles.icon} name='chevron-small-right' type='entypo' />
          </Wrapper>
        </Wrapper>
        <Wrapper style={styles.sizewrapp} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={styles.name}>{"Shape"}</Text>
          <Wrapper style={styles.icon} flexDirectionRow justifyContentCenter alignItemsCenter>
            <Text style={styles.selecttext}>{"Medium Coffin"}</Text>
            <TouchableOpacity onPress={() => rfRBSheet.current.open()}>
              <Icon style={styles.icon} name='chevron-small-right' type='entypo' />
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
        <Wrapper style={styles.sizewrapp} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={styles.name}>{"Finish"}</Text>
          <Wrapper style={styles.icon} flexDirectionRow justifyContentCenter alignItemsCenter>
            <Text style={styles.selecttext}>{"Select"}</Text>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Icon style={styles.icon} name='chevron-small-right' type='entypo' />
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
        <Wrapper style={styles.sizewrapp} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={styles.name}>{"Quantity"}</Text>
          <Wrapper style={styles.icon} flexDirectionRow justifyContentCenter alignItemsCenter>
            <Text style={styles.selecttext}>{"1"}</Text>
            <TouchableOpacity onPress={() => count.current.open()}>
              <Icon style={styles.icon} name='chevron-small-right' type='entypo' />
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      {/* Quantity Count Bottom sheet */}
      <Wrapper
        style={styles.bottomsheet}>
        <RBSheet
          ref={count} closeOnDragDown={true} closeOnPressMask={false} customStyles={{
            wrapper: {
              flex: 1,
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
          height={height(25)}
        >
          <Quantity />
        </RBSheet>
      </Wrapper>
      {/* Shape Bottom Sheet */}
      <Wrapper
        style={styles.bottomsheet}>
        <RBSheet
          ref={rfRBSheet} closeOnDragDown={true} closeOnPressMask={false} customStyles={{
            wrapper: {
              flex: 1,
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
          height={height(64)}
        >
          <Wrapper style={styles.sub} alignItemsCenter>
            <Text style={styles.txt}>Shape</Text>
          </Wrapper>
          <ShapBottomSheet />
        </RBSheet>
      </Wrapper>
      {/* FinishBottom sheet */}
      <Wrapper
        style={styles.bottomsheet}>
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
          height={height(27)}
        >
          <Wrapper style={styles.sub} alignItemsCenter>
            <Text style={styles.txt}>Finish</Text>
          </Wrapper>
          <FinishBottomsheet />
        </RBSheet>
      </Wrapper>
      <Spacer isBasic />
    </Wrapper>)}

export const SortyByBottomsheetComponent = ({ sort, style }) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Wrapper style={[styles.ordercomp, style]}>
      <Wrapper style={styles.Sheet} justifyContentSpaceBetween flexDirectionRow alignItemsCenter >
        <Text>{sort}</Text>
        <RadioButton
          value="first"
          color='#000000'
          // status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')} />
      </Wrapper>
    </Wrapper>)}

export const FilterBottomsheetComponent = ({ filter }) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Wrapper style={styles.ordercomp}>
      <Wrapper style={styles.Sheet} justifyContentSpaceBetween flexDirectionRow alignItemsCenter >
        <Text>{filter}</Text>
        <Icon name='chevron-small-right' type='entypo' color={"black"} />
      </Wrapper>
    </Wrapper>)}

export const PhoneInputComp = ({ title,value,onChangeText }) => {
  const phoneInput = useRef(null);
  return (
    <Wrapper style={styles.maininputwrapper}>
      <Text style={styles.titletext} >{title}</Text>
      <Spacer isTiny />
      <PhoneInput value={value} onChangeText={onChangeText} textContainerStyle={{ backgroundColor: '#F5F5F5', borderRadius: totalSize(1.5) }} flagButtonStyle={{ backgroundColor: '#F5F5F5', borderBottomStartRadius: totalSize(4), borderTopStartRadius: totalSize(4) }} ref={phoneInput} textInputStyle={{ height: height(6.66), borderRadius: totalSize(4), backgroundColor: '#F5F5F5' }} containerStyle={styles.inputstyle}  defaultCode="DM" layout="first"
        />
    </Wrapper>)}

export const InformationCart = () => {
  return (
    <Wrapper style={styles.contactinformationsub}>
      <Spacer isBasic />
      <Spacer isTiny />
      <Text style={styles.inftitle}>{"Contact Information"}</Text>
      <Wrapper flexDirectionRow alignItemsCenter>
        <Text style={styles.acounttext}>{"Already have an acount?"}</Text>
        <Text style={styles.logtext}>{"Log In"}</Text>
      </Wrapper>
    </Wrapper>)}

export const ShippingAdressCart = () => {
  return (
    <Wrapper style={styles.contactinformationsub}>
      <Spacer isBasic />
      <Spacer isTiny />
      <Text style={styles.inftitle}>{"Shipping Address"}</Text>
    </Wrapper>)}

export const ReturnToCart = ({ navigation, onPress }) => {
  return (
    <Wrapper>
      <Spacer isDoubleBase />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.returntext} alignTextCenter>{"Return to Cart"}</Text>
      </TouchableOpacity>
      <Spacer isBasic />
      <Spacer isSmall />
      <Wrapper style={styles.bottmtext} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
        <Text style={styles.btmtext} >{"Privacy Policy"}</Text>
        <Text style={styles.btmtext} >{"Term of Service"}</Text>
      </Wrapper>
    </Wrapper>)}

export const ShippingContact = ({ email, isshippetid, ispayment, country, address, city, style,onPressBack }) => {
  return (
    <Wrapper background1 style={[styles.shipp, style]}>
      <Spacer isBasic />
      <Spacer isTiny />
      <Wrapper style={styles.contactshippingsub} flexDirectionRow justifyContentSpaceBetween>
        <Text style={styles.conttitle} >{"Contact"}</Text>
        
        {ispayment && ( <TouchableOpacity onPress={onPressBack}>
           <Icon name='edit' type='feather' size={15} />
        </TouchableOpacity>
        )}
      </Wrapper>
      <Wrapper style={styles.emailwrapper}>
        <Text style={styles.emailtext}>{email}</Text>
      </Wrapper>
      <Spacer isTiny />
      <Spacer isBasic />
      <Wrapper style={styles.contactshippingsub} flexDirectionRow justifyContentSpaceBetween>
        <Text style={styles.conttitle} >{"Ship to"}</Text>
        {isshippetid && (
          <TouchableOpacity onPress={onPressBack}> 
          <Icon name='edit' type='feather' size={15} />
          </TouchableOpacity>
        )}
      </Wrapper>
      <Spacer isSmall />
      <Wrapper style={styles.contactdetail}>
        <Text style={styles.emailtext}>{address}</Text>
        <Spacer isSmall />
        <Text style={styles.emailtext}>{city}</Text>
        <Spacer isSmall />
        <Text style={styles.emailtext}>{country}</Text>
      </Wrapper>
    </Wrapper>
  )
}

export const ShippingMethod = ({ onPress }) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Wrapper background1 style={styles.shippingmethodmain}>
      <Spacer isBasic />
      <Spacer isTiny />
      <Wrapper style={styles.contactshippingsub}>
        <Text style={styles.conttitle} >{"Shipping Mehtod"}</Text>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper style={styles.Shippingmethod} justifyContentCenter>
        <Wrapper style={styles.shippingsub} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={styles.methodtext}>{"Method 1"}</Text>
          <Wrapper flexDirectionRow alignItemsCenter>
            <Text style={styles.methodtext}>{"Rs. 100"}</Text>
            <RadioButton
              value="first"
              color='#000000'
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper style={styles.Shippingmethod} justifyContentCenter>
        <Wrapper style={styles.shippingsub} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={styles.methodtext}>{"Method 1"}</Text>
          <Wrapper flexDirectionRow alignItemsCenter>
            <Text style={styles.methodtext}>{"Rs. 200"}</Text>
            <RadioButton
              value="first"
              color='#000000'
              // status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Spacer isDoubleBase />
      <Spacer isBasic />
      <Wrapper style={styles.btn} alignItemsCenter>
        <Buttons.Colored onPress={onPress} text="Continue to Shipping" textStyle={{ fontWeight: 'bold', fontsize: 20 }} />
      </Wrapper>
      <Spacer isDoubleBase />
    </Wrapper>
  )
}

export const ShapeBottomSheetComponent = ({ shapesquare }) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Wrapper style={styles.ordercomp}>
      <Wrapper style={styles.Sheet} justifyContentSpaceBetween flexDirectionRow alignItemsCenter >
        <Text>{shapesquare}</Text>
        <RadioButton
          value="first"
          color='#000000'
          // status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')} />
      </Wrapper>
    </Wrapper>
  )
}

export const FinishBottomsheetComponent = ({ shapesquare, finish }) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Wrapper style={styles.ordercomp}>
      <Wrapper style={styles.Sheet} justifyContentSpaceBetween flexDirectionRow alignItemsCenter >
        <Text>{finish}</Text>
        <RadioButton
          value="first"
          color='#000000'
          // status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')} />
      </Wrapper>
    </Wrapper>
  )
}
export const Cart = ({ like, rate, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper style={styles.Cardwrapper} >
        <Wrapper style={styles.main} background1 flexDirectionRow alignItemsCenter>
          <Wrapper >
            <Image source={appImages.product1} style={styles.img} />
          </Wrapper>
          <Wrapper flexDirectionRow >
            <Wrapper style={styles.details}>
              <Spacer isTiny/>
              <Text style={styles.names}>{name}</Text>
              <Spacer isSmall/>
              <Text style={styles.liketext} >{like}</Text>
              <Spacer isSmall/>
              <Wrapper style={styles.iconwrapper} flexDirectionRow alignItemsFlexStart justifyContentSpaceBetween >
            <Text style={styles.prodrate}>Rs.{rate}</Text>
              <Icon name='hearto' type='antdesign' size={16}  />
            </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  )
}

export const ExpandableText = ({ LeftText, RightText, onPress }) => {
  return (
    <Wrapper alignItemsCenter>
      <Spacer isTiny />
      <Wrapper style={styles.textall} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
        <Text style={styles.title}>{LeftText}</Text>
        <TouchableOpacity onPress={onPress}>
          <Wrapper style={styles.iconstyle} flexDirectionRow alignItemsCenter>
            <Text style={styles.seeall}>{RightText}</Text>
            <Icon name='chevron-small-right' type='entypo' color={"black"} />
          </Wrapper>
        </TouchableOpacity>
      </Wrapper>
    </Wrapper>
  )
}

export const PaymentRecordList = ({ email, country, address, city ,onPressBack}) => {
  return (
    <Wrapper background1 >
      <Spacer isBasic />
      <Spacer isTiny />
      <Wrapper style={styles.contactshippingsub} flexDirectionRow justifyContentSpaceBetween>
        <Text style={styles.conttitle} >{"Contact"}</Text>
        <TouchableOpacity onPress={onPressBack}>
        <Icon name='edit' type='feather' size={15} />
        </TouchableOpacity>
      </Wrapper>
      <Wrapper style={styles.emailwrapper}>
        <Text style={styles.emailtext}>{email}</Text>
      </Wrapper>
      <Spacer isTiny />
      <Spacer isBasic />
      <Wrapper style={styles.contactshippingsub} flexDirectionRow justifyContentSpaceBetween>
        <Text style={styles.conttitle} >{"Ship to"}</Text>
        <TouchableOpacity onPress={onPressBack}>
        <Icon name='edit' type='feather' size={15} />
        </TouchableOpacity>
      </Wrapper>
      <Spacer isSmall />
      <Wrapper style={styles.contactdetail}>
        <Text style={styles.emailtext}>{address}</Text>
        <Spacer isSmall />
        <Text style={styles.emailtext}>{city}</Text>
        <Spacer isSmall />
        <Text style={styles.emailtext}>{country}</Text>
      </Wrapper>
      <Wrapper style={styles.contactshippingsub} flexDirectionRow justifyContentSpaceBetween>
        <Text style={styles.conttitle} >{"Method"}</Text>
        <TouchableOpacity onPress={onPressBack}>
        <Icon name='edit' type='feather' size={15} />
        </TouchableOpacity>
      </Wrapper>
      <Spacer isSmall />
      <Wrapper style={styles.contactshippingsub}>
        <Text style={styles.emailtext}>{"Method 1"}</Text>
        <Spacer isSmall />
        <Text style={styles.emailtext}>{"Rs. 100"}</Text>
      </Wrapper>
      <Spacer isBasic />
    </Wrapper>
  )
}

export const GiftCard = () => {
  return (
    <Wrapper background1 style={styles.paymentmain}>
      <Spacer isBasic />
      <Spacer isTiny />
      <Wrapper style={styles.contactshippingsub} >
        <Text style={styles.conttitle} >{"Gift Card/Discount Code"}</Text>
        <Wrapper flexDirectionRow alignItemsFlexEnd justifyContentSpaceBetween style={styles.codwrapper}>
          <Input placeholder="Enter Code Here" label="ENTER CODE" inputstyle={styles.codeinput} lablestyle={styles.labletextstyle} />
          <TouchableOpacity style={styles.codebtn} >
            <Icon name='arrowright' type='antdesign' size={26} />
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const PaymentSection = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Wrapper background1 style={styles.payment}>
      <Spacer isBasic />
      <Spacer isTiny />
      <Wrapper style={styles.contactshippingsub} >
        <Text style={styles.conttitle} >{"Payment"}</Text>
        <Text style={styles.transtext}>{"All Transaction are secure and encrypted"}</Text>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper style={styles.Shippingmethod} justifyContentCenter>
        <Wrapper style={styles.shippingsub} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Wrapper flexDirectionRow alignItemsCenter>
            <Image source={appImages.Cash} style={styles.image} />
            <Text style={styles.cashtext}>{"Cash on Delivery"}</Text>
          </Wrapper>
          <RadioButton
            value="first"
            color='#000000'
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')} />
        </Wrapper>
      </Wrapper>
      <Wrapper style={styles.Shippingmethod} justifyContentCenter>
        <Wrapper style={styles.shippingsub} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Wrapper flexDirectionRow alignItemsCenter>
            <Image source={appImages.Cash1} style={styles.image} />
            <Text style={styles.cashtext}>{"Credit/Debit Card"}</Text>
          </Wrapper>
          <RadioButton
            value="first"
            color='#000000'
            // status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')} />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const OrderSummarySection = ({ onPress }) => {
  return (
    <Wrapper background1 style={styles.ordermain}>
      <Wrapper style={styles.contactshippingsub} >
        <Spacer isBasic />
        <Text style={styles.conttitle} >{"Order Summary"}</Text>
        <Spacer isSmall />
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.totalrate}>
          <Text style={styles.totaltext}>{"Subtotal"}</Text>
          <Text style={styles.totaltext}>{"Rs. 1,600"}</Text>
        </Wrapper>
        <Spacer isSmall />
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.totalrate}>
          <Text style={styles.totaltext}>{"Discount"}</Text>
          <Text style={styles.totaltext}>{"-Rs. 1,600"}</Text>
        </Wrapper>
        <Spacer isSmall /><Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.totalrate}>
          <Text style={styles.total}>{"Total"}</Text>
          <Text style={styles.Rs}>{"Rs. 1,000"}</Text>
        </Wrapper>
      </Wrapper>
      <Spacer isDoubleBase />
      <Wrapper alignItemsCenter>
        <Buttons.Colored text="Complete Order" onPress={onPress} textStyle={{ fontWeight: 'bold', fontsize: 20 }} />
      </Wrapper>
      <Spacer isDoubleBase />
    </Wrapper>
  )
}

export const OrderCompleteComp = () => {
  return (
    <Wrapper alignItemsCenter>
      <Spacer isDoubleBase />
      <Spacer isDoubleBase />
      <Image source={appImages.splash} style={styles.logostyle} />
      <Spacer isDoubleBase />
      <Spacer isBasic />
      <Wrapper style={styles.centeritems} alignItemsCenter>
        <Image source={appImages.Complete} />
        <Spacer isBasic />
        <Spacer isSmall />
        <Text style={styles.comptext}>{"Order Complete"}</Text>
        <Spacer isDoubleBase />
        <Text style={styles.order}>{"Order # 1234567"}</Text>
        <Spacer isDoubleBase />
        <Text style={styles.tnx}>{"Thank you!!"}</Text>
      </Wrapper>
    </Wrapper>
  )
}
export const ChatList = ({ image, name, masg, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper style={styles.chatwrapper} justifyContentCenter>
        <Wrapper style={styles.chatsub} flexDirectionRow alignItemsCenter>
          <Image source={image} />
          <Wrapper justifyContentCenter style={styles.namewrapper}>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.msgs}>{masg}</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  )
}

export const TitleText = () => {
  return (
    <Wrapper>
      <Spacer isBasic />
      <Wrapper style={styles.wrapper} flexDirectionRow justifyContentSpaceBetween alignItemsCenter>
        <Text style={styles.titltext}>{"Select all that apply"}</Text>
        <Text style={styles.txt}>{"Select All"}</Text>
      </Wrapper>
    </Wrapper>
  )
}
export const UserProfile = ({ image, name, email, onPress }) => {
  return (
    <Wrapper style={styles.profmain} alignItemsCenter>
      <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.profilewrapper}>
        <Wrapper flexDirectionRow alignItemsCenter>
          <Image source={image} style={styles.userimage} />
          <Wrapper style={styles.nameemailwrapper} >
            <Text isTinyTitle isMediumTitle style={styles.username}>{name}</Text>
            <Text style={styles.useremail}>{email}</Text>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <TouchableOpacity onPress={onPress}>
            <Icon name='edit' type='feather' size={15} />
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const UserOrderComponenet = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper background1 style={[styles.ordercomp, style]} alignItemsCenter justifyContentCenter>
        <Wrapper style={styles.profilewrapper} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={styles.optiontext}>{title}</Text>
          <Icon name='chevron-small-right' type='entypo' />
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  )
}

export const NailsDescription = ({navigation}) => {
  return (
      <Wrapper>
          <TouchableOpacity >
              <Text style={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore "}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore"}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor incididunt ut labore"}</Text>
          </TouchableOpacity>
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />
      </Wrapper>
  )
}
export const OrderListComponent = ({ title, style, orderitem, orderdate, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Wrapper style={[styles.orderlist, style]} alignItemsCenter background1>
        <Wrapper style={styles.profilewrapper} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Wrapper>
            <Spacer isSmall />
            <Text style={styles.orderstyle}>{title}</Text>
            <Spacer isSmall />
            <Text style={styles.itemtext}>{orderitem}</Text>
            <Spacer isSmall />
            <Text style={styles.datetext}>{orderdate}</Text>
            <Spacer isSmall />
          </Wrapper>
          <Wrapper>
            <Icon name='chevron-small-right' type='entypo' size={18} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  )
}

export const Method = ({ }) => {
  return (
    <Wrapper>
      <Wrapper style={styles.contactshippingsub} >
        <Text style={styles.conttitle} >{"Method"}</Text>
        <Spacer isSmall />
        <Wrapper style={styles.contactshippingsub}>
          <Text style={styles.emailtext}>{"Method 1"}</Text>
          <Spacer isSmall />
          <Text style={styles.emailtext}>{"Rs. 100"}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const Payment = ({ }) => {
  return (
    <Wrapper>
      <Wrapper style={styles.contactshippingsub} >
        <Text style={styles.conttitle} >{"Payment"}</Text>
        <Spacer isSmall />
        <Wrapper style={styles.contactshippingsub}>
          <Text style={styles.emailtext}>{"Cash on  Delivery"}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const Summary = () => {
  return (
    <Wrapper>
      <Wrapper style={styles.contactshippingsub} >
        <Spacer isBasic />
        <Text style={styles.conttitle} >{"Order Summary"}</Text>
        <Spacer isSmall />
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.totalrate}>
          <Text style={styles.totaltext}>{"Subtotal"}</Text>
          <Text style={styles.totaltext}>{"Rs. 1,600"}</Text>
        </Wrapper>
        <Spacer isSmall />
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.totalrate}>
          <Text style={styles.totaltext}>{"Discount"}</Text>
          <Text style={styles.totaltext}>{"-Rs. 1,600"}</Text>
        </Wrapper>
        <Spacer isSmall /><Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween style={styles.totalrate}>
          <Text style={styles.total}>{"Total"}</Text>
          <Text style={styles.Rs}>{"Rs. 1,000"}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}