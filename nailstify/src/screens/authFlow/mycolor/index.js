import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers } from '../../../components'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { Colors} from '../../../services/constants/dummyData'
import { routes } from '../../../services'
import { NailsShapesList } from '../../../components/generalcomponents'
import { HeaderAuth } from '../../../components/headers'
import { TitleText } from '../../../components/smallcomponents'
const MyColors = ({navigation,route}) => {
  console.log(route?.params?.screen)
  return (
    <Wrapper isMain>
      <HeaderAuth Title="My Colors"/>
       <TitleText/>
        <Spacer isBase/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <NailsShapesList data={Colors} />
        </ScrollView>
        <Wrapper style={styles.btnwrapper} alignItemsCenter>
        <Buttons.Colored text="NEXT"  textStyle={styles.button} buttonStyle={styles.btn} onPress={()=>navigation.navigate(routes.likestyle)}/>
        </Wrapper>
    </Wrapper>
  )
}

export default MyColors