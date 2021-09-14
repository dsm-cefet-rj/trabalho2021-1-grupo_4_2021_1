import React from 'react';
import './container.css';

const UIContainer = ({ children }) => (
  <div
    className="ui-container"
  >
    {children}
  </div>
);

export default UIContainer;