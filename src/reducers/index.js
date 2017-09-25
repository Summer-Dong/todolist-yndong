const todoApp = (state=[], action) => {
  if(action.type=="ADD_TODO"){
    return [
      ...state,
      {
        id: action.id,
        text: action.text
      }
    ]
  }
}

export default todoApp