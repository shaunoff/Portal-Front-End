import React, { Component } from 'react';
import {Grid, Row, Col,Button,ButtonToolbar,Panel,Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitialBooksSocket,addBookSocket,addBook,connectSocket,socketError} from '../../actions/sockets.js'
import axios from 'axios'
import io from 'socket.io-client';

//let socket = io(`http://localhost:3009`)
// let auth = io(`http://localhost:3009/auth`,{query: `token=${localStorage.getItem('token')}`})
class Sockets extends Component {

  componentDidMount(){
    const socket = io(`https://hidden-escarpment-27993.herokuapp.com/auth`,{query: `token=${localStorage.getItem('token')}`})
    this.props.connectSocket(socket)
    this.props.getInitialBooksSocket(socket)
    socket.on('connect', (items)=>{
      socket.on('itemAdded', (item)=>{
        this.props.addBook(item)
      })
      socket.on('disconnect', function(){
        console.log("disconnected")
      })
    })
    socket.on('error', (err)=>{
      this.props.socketError(err)
    })

  }

  componentWillUnmount(){
    this.props.sockets.socket.disconnect()
  }
  addBook(){
    this.props.addBookSocket(this.props.sockets.socket)
  }
  renderBooks(){
    if (this.props.sockets.error){
      return(
        <div className="alert alert-danger">
          <strong>{this.props.sockets.error}</strong>
        </div>
      )
    }
    return this.props.sockets.items.map((book,index)=>{
      return <div key={index}>{book.title}</div>
    })
  }
  render() {
    console.log(this.props.sockets)
    return (
      <Grid>
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col lg={6}>
            <Panel header={"Add Todo"}>
              <Button  onClick={this.addBook.bind(this)} bsStyle="success">Add Book</Button>
            </Panel>
          </Col>
          <Col lg={6}>
            <Panel header="Output">
              {this.renderBooks()}
            </Panel>

          </Col>
        </Row>
      </Grid>
    );
  }
}
function mapStateToProps(state){
  return {
    sockets: state.sockets
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getInitialBooksSocket,addBookSocket,addBook,connectSocket,socketError},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Sockets)
