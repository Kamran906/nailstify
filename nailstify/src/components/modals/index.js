import React, { useState } from 'react'
import { Image, TouchableOpacity, } from 'react-native'
import { Icon } from '@rneui/base';
import { width } from 'react-native-dimension';
import { colors, sizes, appStyles, appImages, routes } from '../../services';
import Modal from 'react-native-modal'
import { styles } from './styles';
import * as Lines from '../lines';
import Wrapper from '../wrapper';
import Text from '../text';
import { useNavigation } from '@react-navigation/native';
import { Buttons } from '..';
import Spacer from '../spacer';

export const Swipable = ({ children, title, isVisible, toggleModal, footerFlex, headerFlex }) => {
    return (
        <Modal
            isVisible={isVisible}
            swipeDirection="down"
            onSwipeComplete={toggleModal}
            style={{ margin: 0 }}
            // backdropOpacity={0}
            onBackdropPress={toggleModal}
        >
            <Wrapper flex={1}>
                <Wrapper flex={headerFlex ? headerFlex : 1.5} />
                <Wrapper flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
                    {children}
                    <Wrapper style={[styles.barContainer]}>
                        <Wrapper style={[appStyles.center]}>
                            <TouchableOpacity onPress={toggleModal}>
                                <Lines.Horizontal
                                    height={4}
                                    width={width(15)}
                                    style={{ borderRadius: 5 }}
                                    color={colors.appBgColor3}
                                />
                            </TouchableOpacity>
                            <Spacer isBasic />
                            <Text isTinyTitle>{title}</Text>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper isAbsolute style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
                        <Icon
                            name="close"
                        />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Modal>
    );
}

export const WelcomeModel = ({ isModalVisible, navigation, closeModal, onPresSignUp, onPressSignIn }) => {
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
                    <Buttons.Colored text="Sign Up" textStyle={styles.button} buttonStyle={styles.btn} onPress={onPresSignUp} />
                    <Spacer isDoubleBase />
                    <Text style={styles.text} alignTextCenter>{"Already have an acount?"}</Text>
                    <Spacer isSmall />
                    <TouchableOpacity onPress={onPressSignIn} >
                        <Text style={styles.txt} alignTextCenter >{"Log In"}</Text>
                    </TouchableOpacity>
                </Wrapper>
            </Wrapper>
        </Modal>
    );
}

