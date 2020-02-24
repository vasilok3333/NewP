import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements =
    props.posts.map(el => (<Post message={el.message} likesCount={el.likesCount} />))

   
  let onAddPost = () => {  
    props.addPost();

  };
  let postElement = React.createRef();  
  
  let onPostChange = () => {
    let text = postElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder='Enter your post' onChange={onPostChange} ref={postElement} value={props.newPostText} />
        </div>
        <button onClick={onAddPost}>add post</button>

      </div>
      <div className={s.posts1}>
        {postsElements}

      </div>
    </div>

  )
}

export default MyPosts;