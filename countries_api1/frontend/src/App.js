import React from 'react'
import Countries from './component/Countries'
import Header from './component/Header'
import Filter from './component/Filter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Country from './component/Country'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/'>
        <Filter />
        <Countries />
      </Route>
      <Route path='/countries/:name' component={Country}></Route>
    </Router>
  )
}

export default App
