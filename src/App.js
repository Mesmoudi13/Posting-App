import React,{ Component } from 'react';
import PostForm from './Components/PostForm/PostForm';
import PostList from './Components/PostList/PostList';

class App extends Component{
  state = {
    posts : [
      {content : 'Good morning everybody'},
      {content : 'wassup guys how do you feel today'},
      {content : 'Good night folks'}
    ],
    current : ''
  }


  updatePost = (e) =>{
    this.setState({
      current : e.target.value
    })
  }


  addPost = (e) =>{
    e.preventDefault()
    let current = this.state.current
    let posts = this.state.posts
    posts.unshift({content : current})
    this.setState({
      posts : posts,
      current : ''
    })
  }

  deletePost = (index) =>{
     let posts = this.state.posts;
     posts.splice(index,1);
     this.setState({
     posts : posts
     })
  }


  editPost = (index, value) =>{
    let posts = this.state.posts;
    let post = posts[index];
    post ['content'] = value;
    this.setState({
      posts
    })

  }
  render(){
    const {posts}= this.state;
    const postList = posts.map((post, index) =>{
      return <PostList post={post} key={index} index={index} deletePost={this.deletePost} editPost={this.editPost}/>
    })
    return(
      <div className="App">
           <h2>Posting App</h2>
           <div>
             <PostForm updatePost={this.updatePost} addPost={this.addPost} current={this.state.current}/>
             {postList}
           </div>
      </div>
    );
  }
}

export default App;
