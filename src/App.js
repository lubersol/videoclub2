//React router dom
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Importacion de containers & componentes
import Home from './containers/Home/Home';
import RentMovie from './containers/RentMovie/RentMovie';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/rentmovie' component={RentMovie} exact />
        <Route path='/moviedetail' component={MovieDetails} exact />
        {/* <Route path='/register' component={Register} exact /> */}
        {/* <Route path='/login' component={Login} exact></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
