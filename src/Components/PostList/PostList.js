import React,{ Component,Fragment } from 'react';

class PostList extends Component {
    render(){
        return(
            <Fragment>
                <div>
                   <span>
                      {this.props.post.content}
                   </span>
                   <button>Edit course</button>
                   <button onClick={() =>this.props.deletePost(this.props.index)}>Delete</button>
                </div>
            </Fragment>
        )
    }
}

export default PostList;