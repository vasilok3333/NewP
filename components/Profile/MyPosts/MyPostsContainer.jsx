import {
  addPostActionCreate,
  updateTextActionCreate
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";




let mapStateToProps = state => {
  return {
    posts: state.posts,
    newPostText: state.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      dispatch(updateTextActionCreate(text));
    },
    addPost: () => {
      dispatch(addPostActionCreate());
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
