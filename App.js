import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Pnf from './components/Pnf'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import UserReducer from './reducer/reducer'
import { UserAPI } from './api/UserAPI'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    UserAPI.getAll().then(res => {
      this.setState({
        users: res.data
      })
    }).catch(err => console.log(err.message));
  }

  render() {
    return (
      <Provider store={createStore(UserReducer, this.state.users)}>
        <BrowserRouter>
          <Menu/>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/create" component={Create}></Route>
            <Route exact path="/update/:id" component={Update}></Route>
            <Route component={Pnf}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}