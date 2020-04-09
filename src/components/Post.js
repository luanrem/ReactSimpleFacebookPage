import React, { Component } from 'react';

import './Post.css'

import Foto from '../assets/Foto.jpg'

class Post extends Component {

  render() {
    return (
      <div className="post_session" >
        <div className="post_content" >
            <a><img src={Foto}/></a>
            <h1>Júlio Alcantara</h1>
            <h3 className="post_date">04 Jun 2019</h3>
          <div className="person_comment">
          </div>
        </div>

        <hr className="hr1" />

        <div className="post_comments" >
          <h1>Post comentários</h1>
          <h1>Post conteúdo</h1>
          <h1>Post conteúdo</h1>
          <h1>Post conteúdo</h1>
        </div>
      </div>
    );
  }
}

export default Post;