import React, {Component} from 'react'
import {View,Text,StatusBar,Image, TouchableHighlight} from 'react-native'
import {TabBar} from 'react-native-tab-view'
import {connect }from 'react-redux'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import { signOut } from '../actions/AutenticacaoActions';
const img = require('../imgs/adicionar-contato.png')

class TabBarMenu extends Component{
	render(){
		return(

			<View style = {{backgroundColor:'#800040', elevation: 4,marginBottom: 6}}>
				<StatusBar backgroundColor = '#660033'/>

				<View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
					<View style = {{height: 50, justifyContent: 'center'}}>
						<Text style = {{fontSize: 20, color : 'white', marginLeft:20}}> MathsApp </Text>
					</View>

					<View style = {{flexDirection: 'row',marginRight: 20}}>
						<View style ={{width: 50}}>
							<TouchableHighlight onPress = {() => Actions.adicionarContato()} underlayColor = '#800040'>
								<Image source = {img} />
							</TouchableHighlight>
						</View>


						<View>
							<TouchableHighlight underlayColor = 'transparent' onPress={() => this.props.signOut()}>
								<Text style = {{fontSize: 20, color: 'white'}}> Sair </Text>
							</TouchableHighlight>
						</View>

					</View>
				</View>


				<TabBar {...this.props} style = {{backgroundColor:'#800040', elevation: 0}} />
			</View>
		)
	}
}

const mapStateToProps = state => ({
	usuario_firebase: state.AutenticacaoReducer.usuario_firebase
})
export default connect (mapStateToProps, { signOut })(TabBarMenu);

