
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

class RoutesAuth extends Component {

    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#21409a' }} titleStyle={{ color: '#fff' }}>
                <Scene key='root'>

                    <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar />
                    <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} navigationBarStyle={{backgroundColor: 'transparent'}} />
                    <Scene key = 'boasVindas' component = {BoasVindas} title = 'Bem-Vindo!' hideNavBar = {true}/>
                </Scene>
            </Router>
        )
    }

}

export default RoutesAuth