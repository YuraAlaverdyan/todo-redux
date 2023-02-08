import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../redux/Filter/actions"

const Filter = () => {

    const dispatch = useDispatch()

    const handleChange = event => {
        dispatch(changeFilter(event.target.value))
    }
    return <div>
        <FormControl>
            <FormLabel>Filter By:</FormLabel>
            <RadioGroup defaultValue='All' row onChange={handleChange}>
                <FormControlLabel value="All" control={<Radio />} label='all' />
                <FormControlLabel value="Completed" control={<Radio />} label='done' />
                <FormControlLabel value="Active" control={<Radio />} label='active' />
            </RadioGroup>
        </FormControl>
    </div>
}

export default Filter