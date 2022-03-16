import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
// make the redux store available to all components of my application
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'


const store = ConfigureStore();
function App() {

  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
