import React, { Component } from 'react';
import Textbox from './components/Textbox';
import Post from './components/Post';
import Postbox from './components/Postbox';
import './styles/style.css';
import data from './newdata';

class App extends Component {
  state = {
    messages: []
  };

  postToDatabase(post) {
    fetch('/api/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
  }

  newPost = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value;

    if (title && body) {
      let messages = [...this.state.messages];
      let data = {};
      data.title = title;
      data.body = body;
      data.author = 'Me';
      data.posted = Date.now();
      data.votes = 1;

      this.postToDatabase(data);

      messages.push(data);

      this.setState({ messages });

      e.target.reset();
    }

    console.log(title);
  };

  upVote = (key) => {
    let messages = [...this.state.messages];
    messages[key].votes++;
    this.setState({ messages });
  };

  downVote = (key) => {
    let messages = [...this.state.messages];
    messages[key].votes--;
    this.setState({ messages });
  };

  componentDidUpdate() {
    fetch('./api/all')
      .then((res) => res.json())
      .then((messages) => {
        this.setState({ messages });
      });
  }

  componentDidMount() {
    fetch('./api/all')
      .then((res) => res.json())
      .then((messages) => {
        this.setState({ messages });
      });
  }

  render() {
    return (
      <div className="app">
        <div className="header">Header</div>
        <div className="container">
          <div className="posts">
            {this.state.messages.map((post, index) => (
              <Post
                key={index}
                index={index}
                post={post}
                upVote={this.upVote}
                downVote={this.downVote}
              />
            ))}
          </div>
          <div className="user">
            <Postbox newPost={this.newPost} />
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
