import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Genero(props){
    return(
        <Paper elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                    <TableCell>
                        Hombres
                    </TableCell>
                    <TableCell>
                        Mujeres
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell>{props.data['M']}</TableCell>
                    <TableCell>{props.data['F']}</TableCell>
                  </TableRow>     
              </TableBody>
            </Table>
        </Paper>
    )
}

export default Genero