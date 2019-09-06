import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


// pages 
import SpeechTree from 'pages/SpeechTree'

// store
import reducer from 'store/combinedReducers';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider  store={store} >
      <div className="App">
        <SpeechTree />
      </div>
    </Provider>

  );
}

export default App;
