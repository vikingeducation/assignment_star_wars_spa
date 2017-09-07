import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import configureStore from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const app = (
	<Provider store={configureStore()}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
