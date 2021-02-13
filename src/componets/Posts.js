import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fectPost } from '../actions/postAction';

class Posts extends Component {
  componentWillMount() {
    this.props.fectPost();
  }

  render() {
    //console.log(this.props);
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fectPost })(Posts);
