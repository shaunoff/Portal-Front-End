import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form'
import {Grid, Row, Col,Button,ButtonToolbar,Panel,Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {signInUser,signOutUser} from '../../actions/authentication.js'
import {loginTest} from '../../actions/index.js'
import {bindActionCreators} from 'redux'
import axios from 'axios'

class LoginTest extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-error" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
        <div className="text-help" style={{color: "red"}}>
          {touched ? error : ""}
        </div>
      </div>
    );
  }
  renderAlert(){
    if(this.props.auth.error){
      return (
        <div className="alert alert-danger">
          <strong>{this.props.auth.error}</strong>
        </div>
      )

    }
  }
  onSubmit(values){
    this.props.signInUser(values)

  }

  render() {
    const {handleSubmit} = this.props
    return (
      <Grid>
        {this.props.auth.waiting ? "...loading" :
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col lg={6}>
            {!this.props.auth.authenticated ?
            <Panel header="Login Form">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name='email'
                  label="Email"
                  component={this.renderField}
                />
                <Field
                  name='password'
                  label="Password"
                  type="password"
                  component={this.renderField}
                />
                {this.renderAlert()}
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              
            </Panel>
            :
            <Panel header="Output">
             <Button onClick={()=>{this.props.signOutUser()}} bsStyle="success">logout</Button>
            </Panel>
          }
          </Col>
        </Row>
        }
      </Grid>
    );
  }
}
function validate(values){
  const error = {};
  if (!values.email){
    error.email = "Enter a correct email"
  }
  if (!values.password){
    error.password = "Enter a password"
  }
  return error
}
function mapStateToProps(state){
  return {
    auth: state.auth,
    formData: state.formData
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({signInUser,signOutUser},dispatch)
}


export default reduxForm({
  form: 'LoginTest',
  validate: validate
})(connect(mapStateToProps,mapDispatchToProps)(LoginTest))
