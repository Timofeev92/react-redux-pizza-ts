import React from 'react'
import { Header, } from './components/index'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home, Cart } from './pages/index'
import { FC } from 'react'


const App: FC = React.memo(() => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path={'/'} component={Home} exact />
          <Route path={'/cart'} component={Cart} />
          <Redirect to={'/'} />
        </Switch>

      </div>
    </div>
  )
})

export default App
