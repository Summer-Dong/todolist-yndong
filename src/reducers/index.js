const localState = JSON.parse(localStorage.getItem('state')) || [];
let newStateAfterAddOne = [];
let newStateAfterCompleteOne =[];

const todoApp = (state = localState, action) => {
  switch (action.type) {

    case "ADD_TODO":
      newStateAfterAddOne = [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: false
        }
      ];
      localStorage.setItem('state', JSON.stringify(newStateAfterAddOne));
      return newStateAfterAddOne;

    case "DELETE_TODOS":
      localStorage.setItem('state', null);
      return [];

    case "COMPLETE_TODO":
      newStateAfterCompleteOne = state.map(todo =>
        (todo.id === action.todo.id)
          ? {...todo, isCompleted: true}
          : todo
      );
      localStorage.setItem('state', JSON.stringify(newStateAfterCompleteOne));
      return newStateAfterCompleteOne;
    default:
      return state;
  }
}

export default todoApp