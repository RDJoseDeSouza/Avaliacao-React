import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/index/Home'

export const Routes = () =>{
    return (
        <Switch>
            <Route path="/" component={ Home } exact/>
            <Route path="/blocks" component={() =><div>blocks aqui</div>} />
            <Route path="/cards" component={() =><div>cards aqui</div>} />
            <Route path="/forms" component={() =><div>forms aqui</div>} />
            <Route path="/pricing" component={() =><div>pricing aqui</div>} />
            <Route component={() =><div>Caminha não encontrado</div>}/>

        </Switch>
        )
    
}