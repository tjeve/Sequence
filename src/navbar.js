import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class SequenceNavbar extends React.Component {
    state = {  }

    render() { 
        return ( 
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Sequence</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="https://www.jaxgames.com/sequence-game-rules/">Directions</Nav.Link>
                        <Nav.Link href="https://www.youtube.com/watch?v=RK8defbdNEA">Tutorial</Nav.Link>
                        <Nav.Link href="https://en.wikipedia.org/wiki/Sequence_(game)">About</Nav.Link>
                        <Nav.Link href="https://www.amazon.com/Jax-8002-Sequence-Game/dp/B00000IVAK">Buy</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

         );
    }
}
 


export default SequenceNavbar