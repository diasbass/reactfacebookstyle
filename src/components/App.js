import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Rodrigo',
        avatar: 'https://www.adiumxtras.com/images/thumbs/anonymous_1_39536_8261_thumb.png',
        time: 'há 3 min',
        body: 'lorem ipsum...',
      },
      {
        id: 2,
        name: 'Erika',
        avatar: 'http://www.buddy-icons.info/img/icon/13012.gif',
        time: 'há 15 min',
        body: 'lorem ipsum...',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
