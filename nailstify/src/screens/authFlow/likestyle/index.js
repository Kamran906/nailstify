import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers } from '../../../components'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { Likes } from '../../../services/constants/dummyData'
import { routes } from '../../../services'
import { NailsShapesList } from '../../../components/generalcomponents'
import { HeaderAuth } from '../../../components/headers'
import { TitleText } from '../../../components/smallcomponents'
const LikeStyle = ({navigation,route}) => {
  console.log(route?.params?.screen)
  return (
    <Wrapper isMain>
     <HeaderAuth Title="Styles I Like"/>
        <TitleText/>
        <Spacer isBasic/>
        <NailsShapesList data={Likes}/>
        <Spacer isDoubleBase/>
        <Wrapper style={styles.btnwrapper} alignItemsCenter>
          <Spacer isDoubleBase/>
        <Buttons.Colored text="See My Recommendations"  textStyle={styles.button} buttonStyle={styles.btn} onPress={()=>navigation.navigate(routes.app,{screen:routes.recommendedproduct})} />
        </Wrapper>
    </Wrapper>
  )
}

export default LikeStyle