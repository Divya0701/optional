import React from 'react'
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'

export default function Header() {
    return (
        <div>
            <Navbar color="dark" expand="md" dark >
                <NavbarBrand href="/">
                    PC Task 1
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
