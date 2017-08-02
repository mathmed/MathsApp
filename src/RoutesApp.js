import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import Principal from './components/Principal';
import Conversa from './components/Conversa';
import AdicionarContato from './components/AdicionarContato';
import BoasVindas from './components/BoasVindas';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

class RoutesApp extends Component {

    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#fff' }} titleStyle={{ color: '#ff5400' }}>
                <Scene key='root'>
                    <Scene key='principal' component={Principal} hideNavBar initial />
                    <Scene key = 'conversa' component = {Conversa} title = '' hideNavBar = {false} navigationBarStyle = {{backgroundColor: '#800040'}} titleStyle= {{color: 'white', fontWeight: 'bold', fontSize: 20, alignItems: 'center'}}/>
                    <Scene key = 'adicionarContato' component = {AdicionarContato} title = 'Adicionar Contato' hideNavBar = {false} navigationBarStyle = {{backgroundColor: '#800040'}} titleStyle= {{color: 'white', fontWeight: 'bold', fontSize: 18, alignItems: 'center'}}/>
                    <Scene key = 'boasVindas' component = {BoasVindas} title = 'Bem-Vindo!' hideNavBar = {true}/>
                    <Scene key= 'formLogin' component={FormLogin} title="Login" hideNavBar = {true}/>
                    <Scene key= 'formCadastro' component={FormCadastro} title="Cadastro" hideNavBar = {false} navigationBarStyle={{backgroundColor: 'transparent'}}/>
                </Scene>
            </Router>
        )
    }

}

export default RoutesApp