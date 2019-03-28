import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Padrao from '../estilo/Padrao';
 
export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 3 })
    }
    limpar = () => {
        this.setState({ numero: this.props.numeroInicial })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.ex}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}>
                    <Text style={Padrao.ex}>Clica ++</Text>
                </TouchableHighlight>
                <TouchableHighlight
                onPress={this.limpar}>
                    <Text style={Padrao.ex}>Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}