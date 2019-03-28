import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter from './componentes/Multi'
import Contador from './componentes/Contador'
import Evento from './componentes/Evento'
import {Avo} from './componentes/ComunicacaoDireta'

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome= 'João' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    Contador: {
        screen: () => <Contador numeroInicial ={100} />
    },
    Simples: {
        screen: () => <Simples texto= 'Funciona !!' />,
    },
    ParImpar: {
        screen: () => <ParImpar numero ={390}/>,
        navigationOptions: { title: 'Par ou Impar'}
    },
    Inverter: {
        screen: () => <Inverter texto={'NICOLAS'} />
    }
}, {drawerWidth: 150})