import React, { Component } from 'react';
import {Grid, Row, Col,Button,ButtonToolbar,Panel,Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getTodos,deleteTodo,addTodo} from '../../actions/index.js'
import {bindActionCreators} from 'redux'
import axios from 'axios'

class ReduxApi extends Component {
  componentDidMount(){
    this.props.getTodos()
  }
  fetchTodos(){
    this.props.getTodos()
  }
  deleteTodo(id){
    this.props.deleteTodo(id)
  }
  addTodo(){
    this.props.addTodo({text: Date.now()})
  }
  renderTodos(){
    return (
      this.props.todos.map((todo)=>{
        return (
          <div key={todo._id} className="panel panel-primary">
            <div className="panel-heading clearfix">
              <h2 className="panel-title pull-left" style={{paddingTop: '3px'}}>Panel header</h2>
              <div onClick={this.deleteTodo.bind(this,todo._id)}className="btn-group pull-right">
                <Glyphicon glyph="remove" />
              </div>
            </div>
            <p onClick={this.deleteTodo.bind(this,todo._id)}>{todo.text}</p>
            <p>{todo.text}</p>
          </div>)
      })
    )
  }
  render() {
    return (
      <Grid>
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col lg={6}>
            <Panel header={"Add Todo"}>
              <Button onClick={this.addTodo.bind(this)} bsStyle="success">Add Todo</Button>
            </Panel>
          </Col>
          <Col lg={6}>
            <Panel header="Output">
              {this.renderTodos()}
            </Panel>

          </Col>
        </Row>
      </Grid>
    );
  }
}
function mapStateToProps(state){
  return {
    todos: state.todos
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getTodos,deleteTodo,addTodo},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxApi)
