import React from "react"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Ciudades(props) {
    //console.log(props.data)
    return(
        <>
            <Paper elevation={12}>
                <h1>Ciudades</h1>
            </Paper>
            <Table>
              <TableHead>
                <TableRow>
                    <TableCell>
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">{row.ciudad}</TableCell>
                    <TableCell>{row.total}</TableCell>
                  </TableRow>
                ))}     
              </TableBody>
            </Table>
        </>
    )
}

export default Ciudades