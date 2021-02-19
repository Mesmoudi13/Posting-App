import React,{ Component,Fragment } from 'react';

class PostList extends Component {
    render(){
        return(
            <Fragment>
                <p>
                    {this.props.post.content}
                </p>
            </Fragment>
        )
    }
}

export default PostList;