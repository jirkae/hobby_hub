import React from 'react';
import { IndexLink } from 'react-router';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className=" pull-left navbar-link footer-nav">
          <li>
            <IndexLink to="/">Domů</IndexLink>
            <a href="http://dev.backend.team03.vse.handson.pro/graphql" target="_blank">GraphQL API</a>
          </li>
        </ul>
        <ul className="pull-right navbar-link footer-nav">
          <li> © 2017 Tým 3 HobbyHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
