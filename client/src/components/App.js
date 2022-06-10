import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Pokemons from '../pages/Pokemons'

const App = () => (
  <Fragment>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Pokemons} />
      </Switch>
    </div>
  </Fragment>
)

export default App
