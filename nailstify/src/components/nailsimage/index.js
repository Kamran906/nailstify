import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Wrapper from '../wrapper'
import { styles } from './style'
import Spacer from '../spacer'
import { routes } from '../../services'

export const NailsDescription = ({navigation}) => {
    return (
        <Wrapper>
            <TouchableOpacity onPress={()=>navigation.navigate(routes.nailmeasurement)}>
                <Text style={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore "}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor incididunt ut labore"}</Text>
            </TouchableOpacity>
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />
        </Wrapper>
    )
}

