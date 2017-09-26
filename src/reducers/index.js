const todoApp = (state=[], action) => {
  if(action.type==="ADD_TODO"){
    let newState=[
      ...state,
      {
        id: action.id,
        text: action.text,
        isCompleted: false
      }
    ]
    console.log(newState)
    return newState
  }else if(action.type==="DELETE_TODOS"){
    return []
  }
}

export default todoApp