import React, { Component, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Wrapper, Spacer, Buttons } from '../../../components';
import { appImages, colors, routes } from '../../../services';
import { Text } from '../../../components';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
const Welcome = ({ }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  const goToSignUp = () => {
    navigation.navigate(routes.signup);
    closeModal();
  };
  const goToSignIn = () => {
    navigation.navigate(routes.signin);
    closeModal();
  };
  return (
    <Modal visible={isModalVisible} style={styles.model} >
      <Wrapper isImageBackground source={appImages.backgroundimg} style={styles.welcome}>
        <Spacer isSmall />
        <Wrapper alignItemsFlexEnd style={styles.icon}>
          <TouchableOpacity onPress={closeModal}>
            <Icon name='close' type='antdesign' color={"white"} />
          </TouchableOpacity>
        </Wrapper>
        <Wrapper alignItemsCenter>
          <Image style={styles.logo} resizeMode='contain' source={appImages.splash} />
        </Wrapper>
        <Wrapper style={styles.bottomwrapper}>
          <Buttons.Colored text="Sign Up" textStyle={styles.button} buttonStyle={styles.btn} onPress={() => navigation.navigate(routes.signup, { showPhoneInput: true })} />
          <Spacer isDoubleBase />
          <Text style={styles.text} alignTextCenter>{"Already have an acount?"}</Text>
          <Spacer isBasic />
          <TouchableOpacity onPress={() => navigation.navigate(routes.signin)} >
            <Text style={styles.txt} alignTextCenter >{"Lskkkkkkkkkkkkkkkkog In"}</Text>
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
}

export default Welcome;
