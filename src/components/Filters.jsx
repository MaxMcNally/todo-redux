import { connect } from 'react-redux'

function Filters(props){
    const {dispatch} = props
    return(
        <div>
        <p className="pt-3">Filter By: </p>
          <div className="btn-group ">
              <button
                className="btn btn-primary"
                onClick={()=>{
                  dispatch({
                    type : "FILTER_BY_ALL"
                  })
                }}
              >All</button> 
              <button
                className="btn btn-primary"
                onClick={()=>{
                  dispatch({
                    type : "FILTER_BY_ACTIVE"
                  })
                }}
              >Active</button> 
              <button 
                className="btn btn-primary"
                onClick={()=>{
                  dispatch({
                    type : "FILTER_BY_FINISHED"
                  })
                }}
              >Finished</button>
        </div>
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
  )(Filters)
