const localState=JSON.parse(localStorage.getItem('state')) || [];

const todoApp = (state=localState, action) => {
  if(action.type==="ADD_TODO"){
    const newState = [
      ...state,
      {
        id: action.id,
        text: action.text,
        isCompleted: false
      }
    ];
    localStorage.setItem('state', JSON.stringify(newState));
    return newState;
  }else if(action.type==="DELETE_TODOS"){
    localStorage.setItem('state', null);
    return []
  }
}

export default todoApp