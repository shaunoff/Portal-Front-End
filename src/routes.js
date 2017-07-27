import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

//ROUTE COMPONENTS
import BooksList from "./components/BooksList"
import ActiveBook from "./components/ActiveBook"
import ReduxForm from "./components/ReduxForm"
import ReduxApi from "./components/pages/ReduxApi"
import LoginTest from "./components/pages/Logintest"
import Sockets from "./components/pages/Sockets"

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login-test', state: {from: props.location}}} />}
    />
  )
}


class Routes extends Component{
  render(){
    const {authenticated} = this.props.auth
    return(
      <div>
        <Route exact path="/" component={BooksList}/>
        <Route authed={authenticated} path="/login-test" component={LoginTest}/>
        <PrivateRoute authed={authenticated} path="/active" component={ActiveBook}/>
        <PrivateRoute authed={authenticated} path="/form" component={ReduxForm}/>
        <PrivateRoute authed={authenticated} path='/redux-api' component={ReduxApi} />
        <Route authed={authenticated} path='/sockets' component={Sockets} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(Routes)
