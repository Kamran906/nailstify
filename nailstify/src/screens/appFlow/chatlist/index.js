import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { HomeHeader } from '../../../components/headers'
import Input from '../../../components/smallcomponents'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { ChatUserList } from '../../../components/generalcomponents'
import { UserList } from '../../../services/constants/dummyData'
import { KeyboardAvoiding } from '../../../components/scrollViews'
import { routes } from '../../../services'
import { TextInputs } from '../../../components'
import { totalSize } from 'react-native-dimension'

const ChatList = ({navigation}) => {
  return (
   <Wrapper>
    <HomeHeader onPressCart={() => navigation.navigate(routes.shop)}/>
<KeyboardAvoiding>
    <Spacer isBasic />
    <TextInputs.Search placeholder="Search messsges" inputContainerStyle={styles.inputstyle} iconNameRight="search" iconTypeRight="feather"/>
    <Spacer isBasic/>
    <ChatUserList products={UserList} onPress={()=>navigation.navigate(routes.chat)}/>
    </KeyboardAvoiding>
   </Wrapper>
  )
}

export default ChatList