import React,{ Component } from 'react';
import PostForm from './Components/PostForm/PostForm';
import PostList from './Components/PostList/PostList';

class App extends Component{
  state = {
    posts : [
      {content : 'Good morning everybody'},
      {content : 'wassup guys how do you feel today'},
      {content : 'Good night folks'}
    ]
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
             <PostForm />
             {postList}
           </div>
      </div>
    );
  }
}

export default App;
