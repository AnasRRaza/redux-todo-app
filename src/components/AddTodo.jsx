import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { Add, } from '../redux/actions';

const AddTodo = (props) => {

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const inputRef = useRef(null)
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    props.addTodo(todo)
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (data) => dispatch(Add(data))
  }
}


export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
