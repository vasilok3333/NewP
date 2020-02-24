const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  messages: [
    { text: "Hi", id: "1" },
    { text: "How are you", id: "2" },
    { text: "my name is Vasyl", id: "3" }
  ],
  dialogs: [
    { name: "Andrey", id: "1" },
    { name: "Oleh", id: "2" },
    { name: "Ihor", id: "3" },
    { name: "Vasia", id: "4" },
    { name: "Vita", id: "5" }
  ],

  newMessageText: ""
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;

    case ADD_MESSAGE:
      let message = state.newMessageText;
      state.newMessageText = " ";
      state.messages.push({ id: 4, text: message });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextCreator = text => ({
  type: UPDATE_MESSAGE_TEXT,
  newMessageText: text
});

export default dialogsReducer;
