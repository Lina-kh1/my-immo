
import Navbar from "./Components/NavBar/NavBar"
import Fournisseur from './pages/fournisseur/Fournisseur';
import Acceuil from './pages/acceuil/Acceuil';
import Header from "./Components/header/Header";
import Login from "./pages/login/Login";
import Agences from "./pages/agences/Agences";
import {Route, Switch} from "react-router";
import { BrowserRouter, Redirect } from "react-router-dom";
import Register from "./pages/register/Register";
import { render } from "@testing-library/react";
function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar /> 
    
     <Switch> 

     <Route path="/" exact component={Acceuil}/>
       <Route path="/Fournisseur" exact component={Fournisseur}/>
       <Route path="/Login" exact component={Login}/>
       <Route path="/Register" exact component={Register}/>
       <Route path="/Agences" exact component={Agences}/>
       <Redirect to="/" />
     </Switch>
    </BrowserRouter>
  </>
  );
}


export default App;
