
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import Crear from './Components/Crear';
import Actualizar from './Components/Actualizar';
import NotFound from './Components/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

function App() {
  return (
   
    <Router>
   
   
   <div className="App">
    
          <Switch>

          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/inicio" exact>
            <Home />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/crear" exact>
            <Crear />
          </Route>
          <Route path="/actualizar" exact>
            <Actualizar />
          </Route>
          <Route path="/registro" exact>
            <Register />
          </Route>

          <Route path="*">
                <NotFound />
          </Route>
        
        
        </Switch>
    
        </div>
   
  </Router>

  );
}

export default App;
