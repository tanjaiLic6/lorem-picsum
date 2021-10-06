
import { Route, Router, Switch } from 'react-router';
import './App.css';
import { FavoritePage } from './components/FavoritePage/FavoritePage';
import { Header } from './components/Header/Header';
import {MainPage} from './components/MainPage/MainPage'
import {RandomPage} from './components/RandomPage/RandomPage'


function App() {
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route exact path='/' component={MainPage}/>
       <Route       path='/random' component={RandomPage}/>
       <Route exact path='/favorite' component={FavoritePage}/>
     </Switch>
     
    </div>
  );
}

export default App;
