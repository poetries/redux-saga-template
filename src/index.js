import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root'
import configureStore,{history} from './store/configureStore'

const store = configureStore()

ReactDOM.render(<Root store={store} history={history} />,document.getElementById('root'));

if(process.env.NODE_ENV === 'production'){

}else{
      // module.hot.accept();
      registerServiceWorker();
}
