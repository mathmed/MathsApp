import React, {Component} from 'react';
import { View, TextInput, Button,Image,Text,ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux'
import {modificaEmail, modificaSenha,modificaNome,cadastraUsuario} from '../actions/AutenticacaoActions'

class formCadastro extends Component{
    _cadastraUsuario(){
        const nome = this.props.nome
        const email = this.props.email
        const senha = this.props.senha
        this.props.cadastraUsuario({nome,email,senha});
    }
    renderBntCadastrar(){
        if(this.props.loadingCadastro){
            return( <ActivityIndicator size = 'large' /> )
        }

        return ( <Button title="Cadastrar" color="#115E54" onPress={() => this._cadastraUsuario()} /> )
    }
    render(){
        return(
            <Image style = {{flex:1, width: null}} source = {require('../imgs/bg2.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput value = {this.props.nome} placeholder="Nome" placeholderTextColor = '#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => this.props.modificaNome(texto)} />
                        <TextInput value = {this.props.email} placeholder="E-mail" placeholderTextColor = '#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput secureTextEntry = {true} value = {this.props.senha} placeholderTextColor = '#fff' placeholder="Senha" style={{ fontSize: 20, height: 45 }} onChangeText={texto => this.props.modificaSenha(texto)} />
                        <Text style = {{fontSize: 20, color : 'red'}}> {this.props.erroCadastro} </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBntCadastrar()}
                    </View>

                </View>
            </Image>




        )
    }
}
 


const mapStateToProps = state => ({
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    nome: state.AutenticacaoReducer.nome,
    erroCadastro : state.AutenticacaoReducer.erroCadastro,
    loadingCadastro: state.AutenticacaoReducer.loadingCadastro


});

export default connect(mapStateToProps, {modificaEmail,modificaSenha,modificaNome,cadastraUsuario})(formCadastro)