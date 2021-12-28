import React from 'react'
import { connect } from 'react-redux'
import { Delete } from '../redux/actions'

const TodoList = (props) => {
  console.log(props)
  return (
    <div className='list'>
      <h2>Items</h2>
      {
        props.todos.length ?
          props.todos.map((todo, index) => {
            return (
              <div key={index} className='todos'>
                <h4>{todo.todo} <button onClick={() => props.deleteTodo(todo.id)}>Delete</button> </h4>
              </div>
            )
          })
          : 'No items to show'
      }
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    todos: state.todoData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) => dispatch(Delete(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
