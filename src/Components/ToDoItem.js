import { Box, Button } from "@mui/material"
import { connect } from "react-redux"
import { makeActiveAgain, makeComplete } from "../redux/todos/actions"

const ToDoItem = ({task,...props}) => {
    const {dispatch} = props
    const style = task.completed ? {textDecoration:"line-through"} : null
    return <div>
        <Box sx={{padding:1, margin:2, background:'#f3e0fb', width:400}}>
            <h3 style={style}>{task.text}</h3>
            {
                task.completed
                ?
                    <Button onClick={() => dispatch(makeActiveAgain(task.id))} variant="outlined">Undone</Button>
                :
                    <Button onClick={() => dispatch(makeComplete(task.id))} variant="outlined">Done</Button>
            }
        </Box>
    </div>
}

export default connect()(ToDoItem)