import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux'
import {modificaEmail, modificaSenha, autenticarUsuario} from '../actions/AutenticacaoActions'

class formLogin extends Component {

    _autenticarUsuario(){
        const email = this.props.email
        const senha = this.props.senha
        this.props.autenticarUsuario ({email,senha})
    }

    renderBtnAcessar(){
        if(this.props.loadingLogin){
            return(
                <ActivityIndicator size = 'large' />
            )
        }
        return(
            <Button title="Acessar" color='#115E54' onPress={() => this._autenticarUsuario()} />
            )
    }
    render(){
        return(
            <Image style = {{flex:1, width: null}} source = {require('../imgs/bg2.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
                        <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>MathsApp</Text>
                    </View>
                    <View style={{ flex: 2, paddingTop: 30}}>
                        <TextInput value= {this.props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' placeholderTextColor = '#fff' onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput secureTextEntry = {true} value = {this.props.senha} style={{ fontSize: 20, height: 45 }} placeholderTextColor = '#fff' placeholder='Senha' onChangeText={texto => this.props.modificaSenha(texto)}/>
                        {this.renderBtnAcessar()}
                        <Text style = {{fontSize: 20, color : 'red'}}> {this.props.erroLogin}  </Text>
                    </View>
                    <View style={{ flex: 2, paddingTop: 30}}>
                        <TouchableHighlight onPress={() => Actions.formCadastro() }>
                            <Text style={{ fontSize: 19, color: '#fff', fontWeight: 'bold',marginTop: 80 }}>Ainda não tem cadastro? Cadastre-se!</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Image>
        )

    }
};
const mapStateToProps = state =>(
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loadingLogin: state.AutenticacaoReducer.loadingLogin

    }
)


export default connect (mapStateToProps, {modificaEmail,modificaSenha, autenticarUsuario})(formLogin);