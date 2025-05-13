import React from 'react';
import { appImages} from '../../../services';
import { Image } from 'react-native';
import Wrapper from '../../../components/wrapper';
import { styles } from './style';

function Splash() {
  return (
    <Wrapper isMain isCenter style={styles.bg}>
     <Image source={appImages.splash1}/>
    </Wrapper>
  );
}

export default Splash;
