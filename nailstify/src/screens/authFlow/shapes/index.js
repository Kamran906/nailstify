import { Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers } from '../../../components'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { Shapes } from '../../../services/constants/dummyData'
import { routes } from '../../../services'
import { NailsShapesList } from '../../../components/generalcomponents'
import { HeaderAuth } from '../../../components/headers'
import { TitleText } from '../../../components/smallcomponents'
const MyShapes = ({ navigation, route }) => {
  console.log(route?.params?.screen)
  return (
    <Wrapper isMain>
      <HeaderAuth Title="My Shapes"  />
      <TitleText />
      <Wrapper style={styles.wrapper}>
        <Text style={styles.lowertxt}>{"At least one shape and size"}</Text>
      </Wrapper>
      <Spacer isDoubleBase />
      <NailsShapesList data={Shapes} />
      <Wrapper style={styles.btnwrapper} alignItemsCenter>
        <Buttons.Colored text="NEXT" textStyle={styles.button} buttonStyle={styles.btn} onPress={() => navigation.navigate(routes.mycolors)} />
      </Wrapper>
    </Wrapper>
  )
}
export default MyShapes