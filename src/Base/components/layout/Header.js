import React, {Component} from 'react';
import MenuPane from "./menu/MenuPane.js";
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
              <Navbar className="navbar-site" role="navigation" collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand className="logo logo-title">
                    <IndexLinkContainer to={{
                      pathname: '/'
                    }}>
                      <Button bsStyle="link">
                        <span className="logo-icon">
                          <i className="icon icon-search-1"></i>
                        </span>
                        Hobby<span>Hub
                        </span>
                      </Button>
                    </IndexLinkContainer>
                  </Navbar.Brand>
                  <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullLeft>
                    <LinkContainer active={false} to={{
                      pathname: '/events'
                    }}>
                      <NavItem eventKey={1} role="button">Vyhledat akci</NavItem>
                    </LinkContainer>
                  </Nav>
                  <MenuPane openModalFc={this.props.openModalFc} />
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
};
