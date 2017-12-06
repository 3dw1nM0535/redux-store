//Single photo component
import React from 'react';
import createClass from 'create-react-class';
import Photo from './Photo';
import Comment from './Comments';

const Single = createClass({
  render () {
    const postId = this.props.params.postId;
    const i = this.props.posts.findIndex((post) =>
      post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comment postComments={postComments} />
      </div>
    );
  }
});

export default Single;
