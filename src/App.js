import React, {Component} from 'react';
import {Provider} from 'react-redux' 
import {createStore, applyMiddleware} from 'redux'

import firebase from 'firebase';
import AuthOrApp from './AuthOrApp';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'

export default class App extends Component{
	componentWillMount() {
		var config = {
    		apiKey: "AIzaSyCOC1i_Dbe7EkQFWmiPs260L8JVj4UEVLo",
    		authDomain: "mathsapp-8667c.firebaseapp.com",
    		databaseURL: "https://mathsapp-8667c.firebaseio.com",
    		projectId: "mathsapp-8667c",
    		storageBucket: "mathsapp-8667c.appspot.com",
    		messagingSenderId: "447473692829"
  		};
  		firebase.initializeApp(config);
		}

	render(){
		return(
			<Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    			<AuthOrApp />
    		</Provider>



		)
	}
}

