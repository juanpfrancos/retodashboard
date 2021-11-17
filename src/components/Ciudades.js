import React from "react"        
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';

const columns = [
  { field: 'ciudad', headerName: 'Ciudad', width: 300 },
  { field: 'total', headerName: 'Total Casos', type: 'number', width: 300 },
];

export default function Ciudades(props) {
  return (
   <>
      <Container>
       <div style={{ height: 400, width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>Ranking Ciudades</Typography>
        <DataGrid
          rows={props.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sortModel= {[{ field: 'total', sort: "desc" }]}
          headerAlign="center"
        />
       </div>
      </Container>
    </>
  );
}