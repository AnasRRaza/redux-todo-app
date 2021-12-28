
export const addTodo = "ADD_TODO";
export const deleteTodo = "DELETE_TODO";

export const Add = (data) => {
  return {
    type: addTodo,
    item: data,
    id: Math.ceil(Math.random() * Date.now()),
  }
}

export const Delete = (id) => {
  return {
    type: deleteTodo,
    id,
  }
}