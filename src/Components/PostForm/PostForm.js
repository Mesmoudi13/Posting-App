import React from 'react';


const PostForm = (props) =>{
    return(
            <form onSubmit={props.addPost}>
                <input onChange={props.updatePost} type="text" placeholder="What's on your mind" />
                <button type="submit">Post</button>
            </form>
    )
}

export default PostForm;