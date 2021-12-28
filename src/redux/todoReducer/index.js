import { addTodo, deleteTodo } from "../actions"

const initialState = {
  todoData: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo:
      return {
        ...state,
        todoData: [
          ...state.todoData,
          {
            todo: action.item,
            id: action.id
          }
        ]
      }
    case deleteTodo:
      const todos = state.todoData.filter((todo) => todo.id !== action.id)
      return {
        ...state,
        todoData: todos
      }
    default:
      return state;
  }
}

export default todoReducer;