import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";


let store = {
    _state: {
        messagesPage: {
            messages: [
                { text: "Hi", id: '1' },
                { text: "How are you", id: '2' },
                { text: "my name is Vasyl", id: '3' },
            ],
            dialogs: [
                { name: "Andrey", id: '1' },
                { name: "Oleh", id: '2' },
                { name: "Ihor", id: '3' },
                { name: "Vasia", id: '4' },
                { name: "Vita", id: "5" },
            ],

            newMessageText: '',
        },
        profilePage: {
            posts: [
                { id: '1', message: 'Hi, it is my first post', likesCount: '12' },
                { id: '2', message: "How are you?", likesCount: "122" }
            ],
            newPostText: "",
        },
        sidebar: {

        }

    },
    _callSubcriber() {
        console.log('Hello')
    },
  
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },

    dispatch(action) {
       
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar);
            this._callSubcriber(this._state);
        }

    }



export default store;
window.store = store;