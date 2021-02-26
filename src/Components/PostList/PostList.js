import React,{ Component,Fragment } from 'react';

class PostList extends Component {
    state = {
        isEdit: false
    }
    toggleState = () =>{
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })

    }

    updatePost = (e) =>{
        e.preventDefault();
        this.props.editPost(this.props.index,this.input.value)
        this.toggleState();
    }
    renderPost =() =>{
        return(
            <Fragment>
                <div>
                   <span>
                      {this.props.post.content}
                   </span>
                   <button onClick={() =>this.toggleState()}>Edit course</button>
                   <button onClick={() =>this.props.deletePost(this.props.index)}>Delete</button>
                </div>
            </Fragment>
        )
    }

    renderUpdateForm = () =>{
        return(
            <form onSubmit={this.updatePost}>
                <input type="text" defaultValue={this.props.post.content} ref={(v) => this.input = v}/>
                <button>Update post</button>
            </form>
        )
    }
    render () {
        let {isEdit} = this.state;
        return(
            <div>
                {isEdit ? this.renderUpdateForm() : this.renderPost()}
            </div>
        )
    }
}

export default PostList;