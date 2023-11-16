// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div className="todo-item">
      <p className="title"> {title} </p>
      <button className="delete-btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
