import { connect } from 'react-redux'

function ToDoList(props){
    const {dispatch, todos, filter} = props
    return(
        <div>
            <h2>To Do List</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                if(formData.get("title").length > 0){
                    const todosCopy = todos.slice()
                    const lasttodo = todosCopy.slice(-1).pop()
                    const lasttodoID = lasttodo ? lasttodo.id : 1
                    const payload = {
                        id: lasttodoID + 1,
                        title: formData.get("title"),
                        state: "ACTIVE"
                    }
                    dispatch({
                        type: "ADD_TODO",
                        payload
                    })
                    e.target.reset();
                }
                
            }
          }>
          <div className="input-group">
          <input type="text" name="title" className="form-control" placeholder="Add a todo item" />
          <button type="submit" className="btn-outline-secondary">Add</button>
          </div>
          
            </form>
            {todos.length > 0 && 
                <ul className="list-group pt-3">
                {todos.map((todo)=>{
                    if(filter && filter !== todo.state){
                    return undefined
                    }
                    return <li 
                    className="list-group-item todo"
                    key={todo.title}
                    onClick={()=>{
                        console.log("Clicked",todo.id)
                        if(todo.state === "ACTIVE"){
                        dispatch({
                            type : "FINISH",
                            payload: {
                            id: todo.id
                            }
                        })
                        }
                        else if(todo.state === "FINISHED"){
                        dispatch({
                            type : "ACTIVATE",
                            payload: {
                            id: todo.id
                            }
                        })
                        }
                    }}
                >
                    {todo.state === "FINISHED" ? <del>{todo.title}</del> : todo.title}
                </li>
                })}
                </ul>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return { todos: state.todos, filter: state.filter}
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ToDoList)