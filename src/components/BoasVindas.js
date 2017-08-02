import React from 'react'
import { Actions } from 'react-native-router-flux';

import {View, Text, Button, Image} from 'react-native'

export default props =>(
	<Image style = {{flex:1, width: null}} source = {require('../imgs/bg2.png')}>
		<View style = {{flex:1,padding:10}}>
			<View style = {{flex:2, justifyContent: 'center'}}>
				<Text style = {{fontSize: 20, color : 'white'}}>
					Conta criada com sucesso! Seja bem vindo ao MathsApp.
				</Text>
			</View>

			<View style = {{flex:1}}>
				<Button title = 'Tela de Login' color = "#115E54" onPress = {() => Actions.formLogin()} />
			</View>
		</View>
	</Image>


	)