import React from 'react'
import {Provider} from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import HooksCakeContainer from './components/HooksCakeContainer'


import store from './redux/store'
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
        <CakeContainer/>
        <IcecreamContainer/>
        <NewCakeContainer/> */}
        <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
