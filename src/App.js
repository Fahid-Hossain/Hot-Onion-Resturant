import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Breakfast from './components/Meals/Breakfast/Breakfast';
import Lunch from './components/Meals/Lunch/Lunch';
import Dinner from './components/Meals/Dinner/Dinner';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
            {/* <Home></Home> */}
            <Breakfast></Breakfast>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>

        <Route path="/breakfast">
          <Breakfast></Breakfast>
        </Route>
        <Route path="/lunch">
          <Lunch></Lunch>
        </Route>
        <Route path="/dinner">
          <Dinner></Dinner>
        </Route>


      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
