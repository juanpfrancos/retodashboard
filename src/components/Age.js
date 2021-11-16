import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Age(props) {
       const [teen, setTeen] = useState(props.teen)
       const [youngAdult, setyA] = useState(props.youngAdult)
       const [adult, setA] = useState(props.adult)
    return(
        <>
            <Paper elevation={12}>
                <h1>Edades</h1>
            </Paper>
            <Table>
              <TableHead>
                <TableRow>
                    <TableCell>
                        0-20
                    </TableCell>
                    <TableCell>
                        Total
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teen.map(row => (
                  <TableRow key={row.age}>
                    <TableCell component="th" scope="row">{row.age}</TableCell>
                    <TableCell>{row.total}</TableCell>
                  </TableRow>
                ))}     
              </TableBody>
            </Table>

            <Table>
              <TableHead>
                <TableRow>
                    <TableCell>
                        20-40
                    </TableCell>
                    <TableCell>
                        Total
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {youngAdult.map(row => (
                  <TableRow key={row.age}>
                    <TableCell component="th" scope="row">{row.age}</TableCell>
                    <TableCell>{row.total}</TableCell>
                  </TableRow>
                ))}     
              </TableBody>
            </Table>

            <Table>
              <TableHead>
                <TableRow>
                    <TableCell>
                        Mayores de 40
                    </TableCell>
                    <TableCell>
                        Total
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adult.map(row => (
                  <TableRow key={row.age}>
                    <TableCell component="th" scope="row">{row.age}</TableCell>
                    <TableCell>{row.total}</TableCell>
                  </TableRow>
                ))}     
              </TableBody>
            </Table>
        </>
    )
}

export default Age