import { getStateFromLocalStorage } from '../apis/todos';

const localState = getStateFromLocalStorage();
let newStateAfterAddOne = [];
let newStateAfterCompleteOne = [];

const todoApp = (state = localState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      newStateAfterAddOne = [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: false,
        },
      ];
      return newStateAfterAddOne;

    case 'DELETE_TODOS':
      return [];

    case 'COMPLETE_TODO':
      newStateAfterCompleteOne = state.map(todo =>
        ((todo.id === action.todo.id)
          ? { ...todo, isCompleted: true }
          : todo));
      return newStateAfterCompleteOne;
    default:
      return state;
  }
};

export default todoApp;
