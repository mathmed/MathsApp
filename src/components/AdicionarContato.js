import React, {Component} from 'react'
import {View,TextInput,StatusBar,Button,Text,ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import {modificaEmailContato, adicionaContato} from '../actions/AppAction'

class AdicionarContato extends Component {

    renderBtnAdicionar(){
        if(this.props.loadingAdd){
            return(
                <ActivityIndicator size = 'large' />
            )
        }
        return(
            <Button title = 'Adicionar Contato' color ='#115e54' onPress = {() => this.props.adicionaContato(this.props.adiciona_contato_email)}>  </Button>
            )
    }


	render(){
		return(
			<View style ={{justifyContent: 'center', flex: 1, padding: 20}}>
				<View style = {{flex : 1, justifyContent: 'center'}}>
					<TextInput
					 	style = {{fontSize: 20, height: 45 }} 
					 	placeholder="E-Mail" 
					 	onChangeText = {texto => this.props.modificaEmailContato(texto)}
					 	value = {this.props.adiciona_contato_email}
					/>
					<Text style = {{fontSize: 20, color : 'red',marginTop: 20}}> {this.props.mensagem_erro_contato} </Text>
				</View>

				<View style = {{flex : 1, justifyContent: 'center'}}>
					{this.renderBtnAdicionar()}
				</View>
			</View>
		)
	}
}



	

const mapStateToProps = state =>({
	adiciona_contato_email: state.AppReducer.adiciona_contato_email,
	mensagem_erro_contato : state.AppReducer.mensagem_erro_contato,
	loadingAdd : state.AppReducer.loadingAdd



})

export default connect(mapStateToProps, {modificaEmailContato,adicionaContato})(AdicionarContato)