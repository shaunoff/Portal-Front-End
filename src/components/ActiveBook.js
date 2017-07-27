import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Grid,Row,Col,Panel} from 'react-bootstrap'

class ActiveBook extends Component{
  render(){
    const {activeBook={}} = this.props
    return(
      <Grid>
        <Row>
          <Col xs={12}>
          <Panel header="Active Book Title">
            <p>{activeBook.title}</p>
          </Panel>
        </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(ActiveBook);
