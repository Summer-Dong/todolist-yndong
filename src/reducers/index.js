let newStateAfterAddOne = [];

const todoApp = (state = [], action) => {
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

    case 'DELETE_ALL_TODOS':
      return [];

    case 'COMPLETE_TODO':
      return state.map(todo =>
        (todo.id === action.todoId
          ? { ...todo, isCompleted: true }
          : todo));
    case 'DELETE_TODO':
      return state.filter(({ id }) =>
        id !== action.todo.id);
    case 'SET_INITIAL_STATE':
      return action.initialState;
    default:
      return state;
  }
};

export default todoApp;
