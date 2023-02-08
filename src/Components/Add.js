import { Box, TextField } from "@mui/material"
import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { addToDo } from "../redux/todos/actions"

const Add = (props) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            dispatch(addToDo(text))
            setText('')
        }
    }

    return <Box sx={{width:500}}>
        <TextField
            fullWidth
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyPress}
        />
    </Box>
}

export default Add