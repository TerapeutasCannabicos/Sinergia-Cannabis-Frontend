import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Homepage from '../Pages/Homepage/homepage';

import LoginMade from '../Pages/LoginMade';
import Appointment from '../Pages/Professional/Appointment';

import Profile from '../Pages/Professional/Profile';
import ProfileData from '../Pages/Professional/ProfileData';
import Calendar from '../Pages/Professional/Calendar';

export default function MedRoutes(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={LoginMade}/>
      <Route exact path='/perfil' component={Profile}/>
      <Route exact path='/perfil/dados' component={ProfileData}/>
      <Route exact path='/perfil/calendario' component={Calendar}/>
      <Route exact path='/consultas' component={Appointment}/>
      
      
      </Switch>
    </BrowserRouter>
    </div>
  )
}