import React,{ Component,Fragment } from 'react';
import "./PostList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

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
                <div className="content">
                   <span className="posts">
                      {this.props.post.content}
                   </span>
                   <div>
                        <button className="mainBtns" id="edit" onClick={() =>this.toggleState()}><FontAwesomeIcon icon={faEdit} size="xl" /></button>
                        <button className="mainBtns" id="delete" onClick={() =>this.props.deletePost(this.props.index)}><FontAwesomeIcon icon={faTimes} size="xl" /></button>
                    </div>
                </div>
            </Fragment>
        )
    }

    renderUpdateForm = () =>{
        return(
            <form className="updateForm" onSubmit={this.updatePost}>
                <input className="updateInput" type="text" defaultValue={this.props.post.content} ref={(v) => this.input = v}/>
                <button className="updateBtn">Update</button>
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