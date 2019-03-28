import React from 'react'
import { Text, View } from 'react-native'

import Padrao from '../estilo/Padrao'

export default props => 
    <View>
        {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>É par !</Text>
            : <Text style={Padrao.ex}>É ímpar !</Text>
        }
    </View>
