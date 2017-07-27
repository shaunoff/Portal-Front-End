import React, { Component } from 'react';
import {Grid, Row, Col,Button,ButtonToolbar,Panel} from 'react-bootstrap'
import axios from 'axios'


export default class ApiTest extends Component {
  
  fetchTodos(){
    axios.get('http://localhost:3009/todos')
      .then((response)=> {
        this.setState({todos: response.data.todos});
      })
  }
  addTodo(){
    axios.post('http://localhost:3009/todos', {text: "extra"})
      .then((response)=> {
        const {todos} = this.state
        todos.push(response.data)
        this.setState({todos})
      })
  }
  renderTodos(){
    return (
      this.state.todos.map((todo)=>{
        return (
          <Panel header={todo.text} bsStyle="primary">
            <p>{todo.text}</p>
            <p>{todo.text}</p>
          </Panel>)
      })
    )
  }
  render() {
    return (
      <Grid>
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col lg={6}>
            <Panel header="Fetch Todos">
              <Button onClick={this.fetchTodos.bind(this)} bsStyle="success">Fetch Todos</Button>
            </Panel>
            <Panel header="Add Todo">
              <Button onClick={this.addTodo.bind(this)} bsStyle="success">Fetch Todos</Button>
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
