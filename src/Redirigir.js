import React from "react";

//import {  logoutUser } from './actions/authActions';
import { useHistory } from "react-router-dom";
import  { useSelector } from 'react-redux'


const Redirigir = () =>{
  
  let  history = useHistory();
  const loggedInUser = useSelector (store => store.auth.isAuthenticated) 
  
  let dashbo=""
  
  if (loggedInUser){
     dashbo= (
          <div>
           {history.push("/prod")}
          </div>

     )

  }
  else{
    dashbo= (
      <div>
          {history.push("/inicio")}


     </div>  
    )     

  }

    return (
        <div>
          {dashbo}
        </div>        

      
   ) 
  }
  export default Redirigir

//{history.push("/login")}
