import { connect, useSelector } from "react-redux"
import ToDoItem from "./ToDoItem"
import Add from "./Add"
import Filter from "./Filter"
const ToDoList = (props) => {
    const current = useSelector(state => state.filter.currentFilter)
    const tasks = useSelector(state => {
        switch (current) {
            case "All":
                return state.todolist.todos
        
            case "Active":
                return state.todolist.todos.filter(elm => !elm.completed)  
                
            case 'Completed':
                return state.todolist.todos.filter(elm => elm.completed)

            default:
                return state.todolist.todos
        }
    })
    return <div>
        <h3>ToDoList</h3>
        <Add />
        <Filter />
        {
            tasks.map(elm => <ToDoItem key={elm.id} task = {elm} />)
        }
    </div>
}


const mapStateToProps = state => {
    return {
        tasks:state.todos
    }
}



export default ToDoList