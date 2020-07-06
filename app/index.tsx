import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './components/mainContainer/mainContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/mainContainer/reducer';

const store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
      <Container/>
   </Provider>,
   document.getElementById('root')
)