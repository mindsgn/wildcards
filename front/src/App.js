import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isConnected: false,
      List:[{},{},{}]
    }
  }

  componentWillMount(){
  }

  render(){
    const CardList=this.state.List.map(function(item, index){
      return(
        <Row Key={index}>
          <Col>
          <Card>
            <Card.Header>Home</Card.Header>
            <Card.Body>
            </Card.Body>
          </Card>
          </Col>
        </Row>)
    })


    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Wild Cards
          </Navbar.Brand>

        </Navbar>
        <Container>
          <Row>
            <Col>
              {CardList}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
