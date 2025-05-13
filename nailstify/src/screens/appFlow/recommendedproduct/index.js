import {Text,ScrollView,} from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { styles } from './style'
import { routes } from '../../../services'
import { ProductDetailHaeder } from '../../../components/headers'
import Spacer from '../../../components/spacer'
import { RecommendedProductsList } from '../../../components/generalcomponents'

const RecommendedProduct = ({ navigation }) => {
    return (
            <Wrapper alignItemsCenter>
                <ProductDetailHaeder onPressCart={() => navigation.navigate(routes.shop)} caption="For You"/>
                <Wrapper style={styles.subwrapper} >
                    <Wrapper alignItemsFlexStart>
                        <Text style={styles.rtext}>{"Recommended for you"}</Text>
                    </Wrapper>
                      <RecommendedProductsList onPress={()=>navigation.navigate(routes.productdetail)}/> 
                </Wrapper>
                <Spacer isDoubleBase/>
            </Wrapper>
    )
}

export default RecommendedProduct