import React from 'react';
//React router dom
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Importación librería Bulma
import 'bulma/css/bulma.css';

//Importacion de containers & componentes
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';
import RentMovie from './containers/RentMovie/RentMovie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

//Importación hoja de estilos App
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/detail/:movieId' component={Detail} />
        <Route path='/rentmovie' component={RentMovie} exact />
        <Route path='/moviedetail' component={MovieDetails} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/login' component={Login} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
