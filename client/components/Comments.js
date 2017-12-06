//Comments component
import React from 'react';
import createClass from 'create-react-class';

const Comment = createClass({

  renderComments (comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>
            {comment.user}
          </strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  },

  render () {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComments)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="button" hidden />
        </form>
      </div>
    );
  }
});

export default Comment;
