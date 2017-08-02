import {MODIFICA_EMAIL_CONTATO,ADICIONA_CONTATO_ERRO,ADICIONAR_EM_ANDAMENTO,ADICIONA_CONTATO_SUCESSO,LISTA_CONTATO_USUARIO,MODIFICA_MENSAGEM, LIMPAR_MENSAGEM, LISTAS} from '../actions/types'



const INITIAL_STATE = {
	adiciona_contato_email: '',
	mensagem_erro_contato: '',
	loadingAdd: false,
	mensagem: ''
};


export default (state = INITIAL_STATE,action) => {
	switch (action.type){
		case MODIFICA_EMAIL_CONTATO:
			return {...state, adiciona_contato_email: action.payload}
		case ADICIONA_CONTATO_ERRO:
			return {...state, mensagem_erro_contato: action.payload, loadingAdd : false}
		case ADICIONAR_EM_ANDAMENTO:
			return{...state, loadingAdd: true, adiciona_contato_email: ''}
		case ADICIONA_CONTATO_SUCESSO:
			return{...state, loadingAdd: false}
		case LISTA_CONTATO_USUARIO:
			return{...state}
		case MODIFICA_MENSAGEM:
			return{...state, mensagem: action.payload}
		case LIMPAR_MENSAGEM:
			return {...state, mensagem: ''}
		default:
			return state;
	}

}