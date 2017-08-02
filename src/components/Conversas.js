import React, {Component} from 'react'
import {View,Text, TouchableHighlight, ListView} from 'react-native'
import {connect} from 'react-redux'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux';
import {listaConversasUsuarioFetch} from '../actions/AppAction'

class Conversas extends Component{
	
	componentWillMount() {
		this.props.listaConversasUsuarioFetch();
		this.criaFonteDeDados(this.props.ultimas);
		
	}

	componentWillReceiveProps(nextProps) {
		this.criaFonteDeDados(nextProps.ultimas)
	}

	criaFonteDeDados(ultimas){
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!== r2});
		this.fonteDeDados1= ds.cloneWithRows(ultimas);


	}

	

	renderRow(ultimas, hora){
		return(
			<TouchableHighlight underlayColor= 'white' onPress = {() => Actions.conversa({title: ultimas.nome,contatoNome: ultimas.nome, contatoEmail: ultimas.email}) }>
				<View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#CCC" , flexDirection: 'row'}}>
					<Text style={{ fontSize: 25}}> {ultimas.nome} </Text>
				</View>
			</TouchableHighlight>
		)
	}
	render(){
		return(
			<ListView
				enableEmptySections
				dataSource = {this.fonteDeDados1}
				renderRow = {this.renderRow }
			/>
		)
	}
}

const mapStateToProps = state => {
	const ultimas= _.map(state.UltimasConversasReducer, (val,uid) => {
		return{...val,uid}
	})

	return{ultimas}

}


export default connect(mapStateToProps, {listaConversasUsuarioFetch})(Conversas)