/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
//import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";



import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Radio from "./components/extra/Radio";



//import PrivateRoute from "./components/common/PrivateRoute.js";
//import { Provider } from 'react-redux';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { setCurrentUser, logoutUser } from './actions/authActions';

import store from './store';
import "./App.css";


// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

//import Categoriafile from "./views/Categorias/Categoriafile";
//import Tipofile from "./views/Tipos/Tipofile";
import Menu from "./views/Mantenimiento/Menu";







import Inicio from "./views/Inicio/Inicio"


import Blog from "./components/extra/Blog";

import Blog3 from "./components/extra/Blog3";

import BlogCat from "./components/extra/BlogCat";
import Shoping from "./components/Shoping";
import Categoria from "./components/categoria";
import DetBlog from "./components/extra/detblog/DetBlog";
import Dashboard1 from "./components/dashboard/Dashboard"
import Nosotros from "./components/extra/Nosotros";
import Contacto from "./components/extra/Contacto";
import Mision from "./components/extra/Mision";
import Historia from "./components/extra/Historia";
import Alcaldes from "./components/extra/Alcaldes";
import Simbolos from "./components/extra/Simbolos";
import Regidores from "./components/extra/Regidores";
import Alcalde from "./components/extra/Alcalde";
import Organigrama from "./components/extra/Organigrama";
import Personal from "./components/extra/Personal";
import Trabajaperu from "./components/extra/Trabajaperu";
import Seguridadciudadana from "./components/extra/Seguridadciudadana";
import Doctor from "./components/extra/Doctor";
import Construccion from "./components/extra/Contruccion"

import Privacidad from "./components/extra/Privacidad";

import Dashboard from "./views/Dashboard/Dashboard"

import Redidigir from "./Redirigir";


import Salir from "./Salir"








if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 100;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to Login
    window.location.href = '/login';
  }
}







const App = () => {


  



  return (

    <div>

      <Navbar />

      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Redidigir} />

        <Route path="/rtl" component={RTL} />

        <Route exact path='/login' component={Login} />


        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog3' component={Blog3} />


        <Route exact path='/detblog/:handle' component={DetBlog} />
        <Route exact path='/detblog1/:handle' component={BlogCat} />

        <Route exact path='/categoria' component={Categoria} />
        <Route exact path='/shoping' component={Shoping} />
        <Route exact path='/lolo' component={Dashboard1} />
        <Route exact path='/radio' component={Radio} />
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/contacto' component={Contacto} />
        <Route exact path='/privacidad' component={Privacidad} />

        <Route exact path='/mision' component={Mision} />
        <Route exact path='/historia' component={Historia} />
        <Route exact path='/alcaldes' component={Alcaldes} />
        <Route exact path='/simbolos' component={Simbolos} />
        <Route exact path='/regidores' component={Regidores} />
        <Route exact path='/alcalde' component={Alcalde} />
        <Route exact path='/organigrama' component={Organigrama} />
        <Route exact path='/personal' component={Personal} />
        <Route exact path='/trabajaperu' component={Trabajaperu} />
        <Route exact path='/seguridadciudadana' component={Seguridadciudadana} />
        <Route exact path='/doctor' component={Doctor} />
        <Route exact path='/construccion' component={Construccion} />


        <Route exact path='/inicio' component={Inicio} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/menua' component={Menu} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/salir" component={Salir} />

        






      

        <Route
          component={() => (
            <div style={{ padding: 20 }}>Page not found</div>
          )}
        />
      </Switch>





      <Footer />






    </div>











  )
}

export default App
