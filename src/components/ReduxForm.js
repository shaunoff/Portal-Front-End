import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {Grid, Row, Col,Button,ButtonToolbar,Panel} from 'react-bootstrap'
import {addFormData} from '../actions/index.js'


class ReduxForm extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-error" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help" style={{color: "red"}}>
          {touched ? this.props.errorMessage : ""}
        </div>
      </div>
    );
  }
  renderFormData(){
    return (
      this.props.formData.map((form)=>{
        return (
          <Panel header={form.title} bsStyle="primary">
            <p>{form.field2}</p>
            <p>{form.field3}</p>
          </Panel>)
      })
    )
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  onSubmit(values){
    this.props.addFormData(values)
    this.props.reset()
  }
  render() {
    console.log(this.props.formData)
    const {handleSubmit} = this.props
    return (
      <Grid>
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col lg={6}>
            <Panel header="Redux Form">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name='title'
                  label="Title"
                  component={this.renderField}
                />
                <Field
                  name='field2'
                  label="Field 2"
                  component={this.renderField}
                />
                <Field
                  name='field3'
                  label="Field 3"
                  component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Panel>
          </Col>
          <Col lg={6}>
            <Panel header="Output">
              {this.renderFormData()}
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function validate(values){
  const error = {};
  if (!values.title){
    error.title = "Enter a Title"
  }
  if (!values.field2){
    error.field2 = "Enter value into field 2"
  }
  if (!values.field3){
    error.field3 = "Enter value into field 3"
  }
  return error
}
function mapStateToProps(state){
  return {
    formData: state.formData,
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  form: 'ReduxExample',
  validate: validate
})(connect(mapStateToProps, { addFormData })(ReduxForm))
