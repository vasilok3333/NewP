const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-TEXT";

let initialState = {
  posts: [
    { id: "1", message: "Hi, it is my first post", likesCount: "12" },
    { id: "2", message: "How are you?", likesCount: "122" }
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(post);
      state.newPostText = "";
      return state;

    case UPDATE_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const updateTextActionCreate = text => ({
  type: UPDATE_TEXT,
  newText: text
});

export const addPostActionCreate = () => ({ type: ADD_POST });

export default profileReducer;
