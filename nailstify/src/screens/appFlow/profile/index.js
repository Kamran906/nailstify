import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper'
import { HomeHeader } from '../../../components/headers'
import { UserProfile } from '../../../components/smallcomponents'
import { MyOrder, UserOptions, UserPrivacyoptions, UserProfileRecord } from '../../../services/constants/dummyData'
import Spacer from '../../../components/spacer'
import { styles } from './style'
import { UserOrderOption, UserSecondOptionList, UserThirdOptionList } from '../../../components/generalcomponents'
import { routes } from '../../../services'
import { WelcomeModel } from '../../../components/modals'
import { StackActions, useNavigation } from '@react-navigation/native'
const Profile = ({ route}) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  //model close Function
  const closeModal = () => {
    setModalVisible(false);
  };
 
  return (
    <Wrapper style={styles.main}>
      <HomeHeader  onPressCart={() => navigation.navigate(routes.shop)}/>
      <Spacer isBasic/>
      <UserProfile onPress={()=>navigation.navigate(routes.signup, { screen: 'editProfile' })} image={UserProfileRecord?.image} name={UserProfileRecord?.name} email={UserProfileRecord?.email}/>
     <Spacer  isBasic/>
      <UserOrderOption  data={MyOrder} onPress={(item)=> navigation.navigate(item?.screen)}/>
      <Spacer isSmall/>
      <UserSecondOptionList data={UserOptions} onPress={(item)=> navigation.navigate(item?.screen)}/>
      <Spacer isSmall/>
      <UserThirdOptionList data={UserPrivacyoptions} onPress={(item)=> item?.title == 'Logout' ? navigation.dispatch(StackActions.replace(item?.screen)): navigation.navigate(item?.screen)} />
      <WelcomeModel isModalVisible={isModalVisible} closeModal={closeModal} onPresSignUp={() => { navigation.navigate(routes.auth, { screen: routes.signup }), setModalVisible(false) }} onPressSignIn={() => { navigation.navigate(routes.auth, { screen: routes.signin }), setModalVisible(false) }}/>
    </Wrapper>
  )
}

export default Profile