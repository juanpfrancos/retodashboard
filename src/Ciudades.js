import React from "react"
import Paper from '@mui/material/Paper';

function Ciudades(props) {
    //console.log(props.sort(((a, b) => b.modelo - a.modelo))
    console.table(props.data)
    return(
        <>
            <Paper elevation={12}>
                <h1>Ciudades</h1>
            </Paper>
        </>
    )
}

export default Ciudades