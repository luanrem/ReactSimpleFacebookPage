import React from 'react';

import './Post.css'

import Comment from './Comment';

function Post({ post }) {

  return (

    <div className="post_session" >
      <div className="post_content" >
        <a><img src={post.author.avatar} /></a>
        <strong>
          <h1>{post.author.name}</h1>
          <p className="post_date">{post.date}</p>
        </strong>
      </div>

      <hr className="hr1" />

      {post.comments.map(comment => (
        <Comment
          key={comment.id}
          ble={comment}
        />
      ))}


    </div>
  );
}


export default Post;