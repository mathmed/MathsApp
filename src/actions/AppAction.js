import {MODIFICA_EMAIL_CONTATO,ADICIONA_CONTATO_ERRO,ADICIONAR_EM_ANDAMENTO,ADICIONA_CONTATO_SUCESSO,LISTA_CONTATO_USUARIO,MODIFICA_MENSAGEM,LISTA_CONVERSA_USUARIO,LIMPAR_MENSAGEM, LISTAS} from '../actions/types'
import {Actions} from 'react-native-router-flux'
import b64 from 'base-64'
import firebase from 'firebase'
import _ from 'lodash'

export const modificaEmailContato = (texto) => {
	return {
		type: MODIFICA_EMAIL_CONTATO,
		payload:texto
	}
}

export const adicionaContato = email => {
	return dispatch => {
		dispatch({type: ADICIONAR_EM_ANDAMENTO})
		let emailB64 = b64.encode(email);
		firebase.database().ref('/contatos/'+emailB64)
			.once('value')
			.then(snapshot => {
				if(snapshot.val()){
					const dadosUsuario = _.first(_.values(snapshot.val()))
					const {currentUser} = firebase.auth();
					let emailUsuarioB64 = b64.encode(currentUser.email)
					firebase.database().ref('/usuario_contatos/' + emailUsuarioB64)
						.push({email, nome: dadosUsuario.nome})
						.then(adicionarSucesso(dispatch))
						.catch(erro=> alert(erro))
				}else{
					adicionarErro(dispatch)
				}
			})
	}
}


export const contatosUsuarioFetch = () => {
	const {currentUser} = firebase.auth()
	return (dispatch) => {
		let emailUsuarioB64 = b64.encode(currentUser.email)
		firebase.database().ref('/usuario_contatos/'+ emailUsuarioB64)
			.on('value',snapshot => {
				dispatch({type: LISTA_CONTATO_USUARIO, payload: snapshot.val()})
		})
	}
}

export const listaConversasUsuarioFetch = email => {
	const {currentUser} = firebase.auth();
	return (dispatch)=> {
		let emailUsuarioB64 = b64.encode(currentUser.email);
		firebase.database().ref('/usuario_conversas/' + emailUsuarioB64)
			.on('value', snapshot => {
				dispatch({type: LISTAS, payload: snapshot.val()})
			})
	}
}




const adicionarErro = (dispatch) => {
	dispatch({type:ADICIONA_CONTATO_ERRO, payload: 'E-mail digitado não corresponde a um usuário válido.' })
}
const adicionarSucesso = (dispatch) => {
	alert('Contato adicionado com sucesso!')
	dispatch({type: ADICIONA_CONTATO_SUCESSO})

}

export const modificaMensagem = texto => {
	return({
		type: MODIFICA_MENSAGEM,
		payload: texto
	})
}

export const enviaMensagem = (mensagem, contatoNome, contatoEmail) => {
		const {currentUser} = firebase.auth();
		const usuarioEmail = currentUser.email
		const usuarioEmailB64 = b64.encode(usuarioEmail)
		const contatoEmailB64 = b64.encode(contatoEmail)
		const x = new Date()
		const hora = x.getHours()
		const minuto = x.getMinutes()
		const date = hora.toString()+':'+minuto.toString()
	return dispatch => {
		firebase.database().ref('/mensagens/'+usuarioEmailB64+'/'+contatoEmailB64)
			.push({mensagem, tipo : 'e', date: date})
			.then(() => {
				firebase.database().ref('/mensagens/'+contatoEmailB64+'/'+usuarioEmailB64)
					.push({mensagem, tipo : 'r', date: date})
					.then(() => dispatch({type: LIMPAR_MENSAGEM}))

			})
			.then(() => {
				firebase.database().ref('/usuario_conversas/' +usuarioEmailB64 +'/' + contatoEmailB64)
					.set({nome: contatoNome, email: contatoEmail, data: date})


			})
			.then(() => {
				firebase.database().ref('/contatos/' + usuarioEmailB64)
					.once('value')
					.then(snapshot => {
						const dadosUsuario = _.first(_.values(snapshot.val()))
						firebase.database().ref('/usuario_conversas/' +contatoEmailB64 +'/' + usuarioEmailB64)
							.set({nome: dadosUsuario.nome , email: usuarioEmail, data: date })
					})
			})
	}
}


export const conversaUsuarioFetch= contatoEmail => {
	const {currentUser} = firebase.auth();
	const usuarioEmail = currentUser.email
	const usuarioEmailB64 = b64.encode(usuarioEmail)
	const contatoEmailB64 = b64.encode(contatoEmail)

	return dispatch => {
		firebase.database().ref('/mensagens/' + usuarioEmailB64 + '/' + contatoEmailB64 )
			.on('value', snapshot => {
				dispatch({type: LISTA_CONVERSA_USUARIO, payload: snapshot.val()})
			})
	}
}
