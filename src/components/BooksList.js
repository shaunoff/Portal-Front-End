import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addBook,removeBook,activateBook} from '../actions/index.js'
import {bindActionCreators} from 'redux'
import {Grid, Row, Col,Button,ButtonToolbar,Panel} from 'react-bootstrap'

class BooksList extends Component {
  renderBooksList(){
    return (
      this.props.books.map((book,index)=>{
        const active = book.title == this.props.activeBook.title
        return <p style={{backgroundColor: active ? "green": "white"}} onClick={()=>{this.props.activateBook(book.title)}} key={index}>{book.title}</p>
      })
    )
  }
  render() {
    return (
      <Grid>
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col xs={12}>
            <ButtonToolbar>
              <Button onClick={()=>{this.props.addBook()}} bsStyle="success">Add</Button>
              <Button onClick={()=>{this.props.removeBook()}} bsStyle="danger">Remove</Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <Panel header="BooksList">
              {this.renderBooksList()}
            </Panel>
          </Col>
        </Row>
      </Grid>

    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books,
    activeBook: state.activeBook
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addBook,removeBook,activateBook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList)
