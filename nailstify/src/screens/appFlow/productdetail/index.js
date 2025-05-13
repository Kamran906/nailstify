import { Image, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import { appImages, routes } from '../../../services'
import { styles } from './style'
import{ CardButton }from '../../../components/cardbutton'
import Spacer from '../../../components/spacer'
import { ProductDetailHaeder } from '../../../components/headers'
import Wrapper from '../../../components/wrapper'
import { NailsDescription, ProdDescription, ProductSelection } from '../../../components/smallcomponents'
const ProductDetail = ({navigation}) => {
    const refRBSheet = useRef();
    return (
        <Wrapper background1 isMain>
            <ProductDetailHaeder onPressCart={() => navigation.navigate(routes.shop)} caption="Produt Details" IconeType="antdesign" Iconname="upload" />
       <ScrollView showsVerticalScrollIndicator={false}>
          <Wrapper> 
            <Image source={appImages.proddetail} style={styles.imag} /> 
            </Wrapper>
                <Wrapper style={styles.detalwrapper}>
                <ProdDescription onPress={()=>navigation.navigate(routes.chat)}/>
                <ProductSelection />
                <NailsDescription  />
                </Wrapper> 
            <Spacer isBasic />
            </ScrollView> 
            <CardButton />
        </Wrapper>
    )
}

export default ProductDetail