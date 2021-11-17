import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

    const columnsTeen = [
      { field: 'age', headerName: 'Edades 0-20', width: 160 },
      { field: 'total', headerName: 'Total Casos', type: 'number', width: 160 },
    ];

    const columnsYA = [
      { field: 'age', headerName: 'Edades 20-40', width: 160 },
      { field: 'total', headerName: 'Total Casos', type: 'number', width: 160 },
    ];

    const columnsAdult = [
      { field: 'age', headerName: 'Edades Mayores de 40', width: 160 },
      { field: 'total', headerName: 'Total Casos', type: 'number', width: 160 },
    ];

    
    
export default function Age(props){
    const agesOrdered= []
    const teen = []
    const youngAdult = []
    const adult = []
    let count = 0

    for (var a in props.data) {
      agesOrdered.push({id:count, age:a, total:props.data[a]});
      count = count+1;
      if ( a < 20){
        teen.push({id:count, age:a, total:props.data[a]});
      }
      if (a >= 20 && a < 40){
        youngAdult.push({id:count, age:a, total:props.data[a]});
      }
      if(a >= 40){
        adult.push({id:count, age:a, total:props.data[a]});
      }
    }

    const totalTeen = teen.map(d => d['total']).reduce((a, v)=> a + v, 0)
    const totalYA = youngAdult.map(d => d['total']).reduce((a, v)=> a + v, 0)
    const totalAdult = adult.map(d => d['total']).reduce((a, v)=> a + v, 0)
  return(
<>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>Edades</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={teen}
                    columns={columnsTeen}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sortModel= {[{ field: 'age', sort: "asc" }]}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={youngAdult}
                    columns={columnsYA}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sortModel= {[{ field: 'age', sort: "asc" }]}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={adult}
                    columns={columnsAdult}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sortModel= {[{ field: 'age', sort: "asc" }]}
                    />
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h4" align="center" gutterBottom>Total Rangos De Edades</Typography>
                 <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell>
                        Total 0-20
                        </TableCell>
                        <TableCell>
                        Total 20-40
                        </TableCell>
                        <TableCell>
                        Total > 40
                        </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell>{totalTeen}</TableCell>
                        <TableCell>{totalYA}</TableCell>
                        <TableCell>{totalAdult}</TableCell>
                      </TableRow>     
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Container>
    </>
  )
}