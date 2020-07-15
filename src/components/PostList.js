import React, { Component } from 'react';
import './PostList.css'

import Post from './Post';

class PostList extends Component {
 state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vanessa Romero',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '11 Abr 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Luan Martins',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '12 Abr 2019',
            content:
              'Este é um treinamento que estou realizando para colocar em prática minhas habilidades com o React. Logo é uma página simples, porém demonstra o progresso do meu treinamento com esta tecnologia.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Neil Cook',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '04 Mar 2020',
        content:
          'Fala galera, beleza! Estou aqui para deixar meus agradecimentos em relação a todo apoio que tive até hoje para realizar isso.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '06 Mar 2020',
            content:
              'Estou também montando uma API em NodeJS para me tornar um developer full stack e aprender na prática como é desenvolver!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '06 Mar 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever em um curso de desenvolvedor full stack, o que acha?'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '04 Jun 2020',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,',
        comments: [
          {
            id: 6,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=28'
            },
            date: '04 Jun 2020',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
          },
          {
            id: 7,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '07 Jun 2019',
            content:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
          <div className="post_space" >
            { this.state.posts.map(post => (
              <Post 
                key={post.id}
                post={post}
              />
            )) }
          </div>
      </>
    );
  }

}

export default PostList;