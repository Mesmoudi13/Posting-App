import React,{ Component } from 'react';
import postForm from './Components/postForm/postForm';
import postList from './Components/postList/postList';

class App extends Component{
  render(){
    return(
      <div className="App">
           <h2>Posting App</h2>
           <div>
             <postForm />
             <postForm />
           </div>
      </div>
    )
  }
}

export default App;
