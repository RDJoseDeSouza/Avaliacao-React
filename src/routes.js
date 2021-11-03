import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blocks from './pages/blocks/Blocks'
import Cards from './pages/cards/Cards'
import Forms from './pages/forms/Forms'
import Home from './pages/index/Home'
import Pricing from './pages/pricing/Princing'

export const Routes = () =>{
    return (
        <Switch>
            <Route path="/" component={ Home } exact/>
            <Route path="/blocks" component={Blocks} />
            <Route path="/cards" component={ Cards } />
            <Route path="/forms" component={Forms} />
            <Route path="/pricing" component={Pricing} />
            <Route component={Home}/>

        </Switch>
        )
    
}