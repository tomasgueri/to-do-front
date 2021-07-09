import "./App.css";
import Folder from "./pages/Folder";
import ToDo from "./pages/ToDo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import NavReactB from "./components/NavReactB";
import { Route, Switch } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <NavReactB />
      <Switch>
        <Route path="/" exact>
          <Folder />
        </Route>
        <Route path="/ToDo/:id" exact>
          <ToDo />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/Register" exact>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
