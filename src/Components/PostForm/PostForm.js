import React from 'react';
import "./PostForm.css";


const PostForm = (props) =>{
    return(
            <form className="postForm" onSubmit={props.addPost}>
                <input className="postInput" required value={props.current} onChange={props.updatePost} type="text" placeholder="What's on your mind ?" />
                <button className="postBtn" type="submit">Post</button>
            </form>
    )
}

export default PostForm;