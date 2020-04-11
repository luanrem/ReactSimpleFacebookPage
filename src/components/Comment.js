import React, { Component } from 'react';

import './Comment.css'

import Foto from '../assets/Foto.jpg'

class Comment extends Component {
  render() {
    const { id, author, date, content } = this.props.ble;

    return (
      <div className="post_comments" >
        <div className="foto">
          <img src={author.avatar} />
        </div>
        <section className="write_content">
          <p className="comment_content"> {author.name} : {content} </p>
        </section>
      </div>
    );
  };
}

export default Comment;