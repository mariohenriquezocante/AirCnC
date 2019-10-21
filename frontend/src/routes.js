import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

//Definindo qual rota será chamada de acordo com a digitada pelo usuário na URL.
// exact => chamar a rota exatamente igual a que esta sendo passada.
export default function Routes(){
    return (
        <BrowserRouter>
           <Switch>
               <Route path="/"  exact component={Login} /> 
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/new" component={New} />
           </Switch>
        
        </BrowserRouter>

    )
}