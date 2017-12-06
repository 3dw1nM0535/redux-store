//PhotoGrid component
import React from 'react';
import createClass from 'create-react-class';
import Photo from './Photo';

const PhotoGrid = createClass({
  render () {
    return (
      <div className="photo-grid">
      {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    );
  }
});

export default PhotoGrid;
