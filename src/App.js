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
    posts.push({content : current})
    this.setState({
      posts : posts,
      current : ''
    })
  }
  render(){
    const {posts}= this.state;
    const postList = posts.map((post, index) =>{
      return <PostList post={post} key={index} />
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
