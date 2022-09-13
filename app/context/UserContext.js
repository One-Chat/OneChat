import { createContext, useReducer } from 'react';
import { auth } from '../../firebase';

const currentUser = auth.currentUser;

export const UserContext = createContext();

export const UserContextProvider = ({ childern }) => {
  const INITAIL_STATE = {
    chatId: 'null',
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_USER':
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITAIL_STATE);

  return (
    <UserContext.Provider value={{ data: state, dispatch }}>
      {childern}
    </UserContext.Provider>
  );
};
