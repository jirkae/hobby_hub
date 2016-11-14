import React, { Component } from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <p>© Company {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
