import React from "react"
import Paper from '@mui/material/Paper';            
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'ciudad', headerName: 'Ciudad', width: 130 },
  { field: 'total', headerName: 'Total Casos', type: 'number', width: 200 },
];


export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Paper elevation={12}>
          <h1>Ciudades</h1>
      </Paper>
      <DataGrid
        rows={props.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sortModel= {[{ field: 'total', sort: "desc" }]}
      />
    </div>
  );
}