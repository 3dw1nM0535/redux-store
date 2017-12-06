//Main Reduxstagram app component
import React from 'react';
import createClass from 'create-react-class';
import { Link } from 'react-router';

const Main = createClass({
  render () {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;

