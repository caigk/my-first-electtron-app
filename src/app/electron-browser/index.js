//import 'bootstrap/dist/css/bootstrap.min.css';
console.log(`the current env is ${process.env.NODE_ENV}`);
console.log(`the current ENV is ${ENV}`); // prod,dev,local

//-------------------------
//import './App.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//import routes from './routers';
//import { gentouActions } from './redux/reducers';

const store = configureStore();

//处理history  createBrowserHistory   createHashHistory
import { createBrowserHistory, createHashHistory } from 'history'
import { Fragment } from 'react';
const hashHistory = createHashHistory()
//const history = syncHistoryWithStore(hashHistory, store);

import { Header, Footer } from './components/layout';

import {newDoc} from './redux/editorActions';


ReactDOM.render((
	<Provider store={store}>
		<Header></Header>
		<main className="container-fluid h-100 d-flex flex-column">
			<div className="row p-1">
				<div className="btn-toolbar">
					<div className="btn-group">
						<button className=" btn btn-secondary" onClick={()=>store.dispatch(newDoc())}>新建</button>
						<button className="btn btn-primary">打开</button>
						<button className="btn btn-primary">保存</button>
					</div>
					<div className="btn-group ms-2">
						<button className="btn btn-secondary">生成</button>
					</div>
					<div className="btn-group ms-2">
						<button className="btn btn-secondary" onClick={ ()=>alert('ok')}>关闭</button>
					</div>
				</div>
			</div>
			<div className="row flex-fill p-1">
				<textarea id="txtSource" className="col-md-6"></textarea>
				<textarea className="col-md-6"></textarea>
			</div>
		</main>
		<Footer></Footer>
	</Provider>
), document.getElementById('App'));