import React from 'react'
import {Provider} from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
        <IcecreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
