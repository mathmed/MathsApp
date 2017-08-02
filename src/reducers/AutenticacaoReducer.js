import {MODIFICA_EMAIL,MODIFICA_SENHA,MODIFICA_NOME,CADASTRO_USUARIO_SUCESSO,CADASTRO_USUARIO_ERRO,LOGIN_USUARIO_SUCESSO,LOGIN_USUARIO_ERRO,LOGIN_EM_ANDAMENTO,CADASTRO_EM_ANDAMENTO, TOKEN_VALIDATED, SET_USUARIO_FIREBASE} from '../actions/types'

const INITIAL_STATE ={
	nome:'',
	email: '',
	senha: '',
	erroCadastro: '',
	erroLogin : '',
	loadingLogin : false,
	loadingCadastro: false,
	valid_token: false,
	usuario_firebase: []
}
export default (state = INITIAL_STATE,action) => {
	switch(action.type){
		case MODIFICA_EMAIL:
			return{...state, email: action.payload}
		case MODIFICA_SENHA:
			return{...state, senha: action.payload}
		case MODIFICA_NOME :
			return{...state, nome: action.payload}
		case CADASTRO_USUARIO_ERRO :
			return{...state, erroCadastro: action.payload, cadastroLoading: false}
		case CADASTRO_USUARIO_SUCESSO:
			return{...state, nome: '', senha: '', loadingCadastro: false}
		case LOGIN_USUARIO_ERRO:
			return{...state, erroLogin: action.payload,loadingLogin: false}
		case LOGIN_USUARIO_SUCESSO :
			return{...state, loadingLogin: false, senha: '', loadingLogin: false}
		case LOGIN_EM_ANDAMENTO:
			return {...state, loadingLogin: true}
		case CADASTRO_EM_ANDAMENTO:
			return{...state, loadingCadastro : true}  
        case SET_USUARIO_FIREBASE:
            return { ...state, usuario_firebase: action.payload }
        case TOKEN_VALIDATED:
            if (action.payload) {
                return { ...state, valid_token: true }
            } else {
                return { ...state, valid_token: false, usuario_firebase: null}
            }
		default:
			return state;

	}
}

