import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Container} from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
        <Container>
        <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='m-auto'>
            <Form inline>
                <FormControl type="text" placeholder="Search" classname="mr-sm-2"/>
            </Form>
            </Nav>
            <Nav >
                <Nav.Link href="#home">My pokemon</Nav.Link>
                <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Log Out
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
        
    </Navbar>
  )
}

export default Header