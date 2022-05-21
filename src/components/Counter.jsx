import { connect } from 'react-redux'

function Counter(props){
    const {todos} = props;
    const {finished,active} = todos.reduce((memo,todo)=>{
        if(todo.state === "ACTIVE"){
            memo["active"] = memo["active"] + 1
        }
        if(todo.state === "FINISHED"){
            memo["finished"] = memo["finished"] + 1
        }
        return memo
    },{
        "finished" : 0,
        "active" : 0
    })
    
    return (
        <div>
            <div>You have {todos.length} item{todos.length === 1 ? '' : 's'} on your ToDo list</div>
            {todos.length > 0 && 
                <div>
                    <div>{active} {active === 1 ? 'is' : 'are'} active</div>
                    <div>{finished} {finished === 1 ? 'is' : 'are'} finished</div>
                </div>
            }
            
        </div>
    )
    
}
const mapStateToProps = state =>{
    return {todos : state.todos}
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Counter)