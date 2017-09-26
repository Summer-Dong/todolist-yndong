const todoApp = (state=[], action) => {
  if(action.type==="ADD_TODO"){
    return [
      ...state,
      {
        id: action.id,
        text: action.text
      }
    ]
  }else if(action.type==="DELETE_TODOS"){
    return []
  }
}

export default todoApp