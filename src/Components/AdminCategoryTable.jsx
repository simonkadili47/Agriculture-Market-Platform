import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Category ID', width: 120, editable: true },
  { field: 'Categoryname', headerName: 'Category Name', width: 200, editable: true },
  { field: 'Categorydescription', headerName: 'Category Description', width: 200, editable: true },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 160,
    sortable: false,
    renderCell: (params) => (
      <div>
       
        <Button
          variant="contained"
          color="error" 
          size="small"
          onClick={() => handlePrint(params.row.id)}
        >
          Print
        </Button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, Categoryname: 'Potatoes', Categorydescription: 'Potatoes from Mbeya' },
  { id: 2, Categoryname: 'Tomatoes', Categorydescription: 'Tomatoes from Arusha' },
  { id: 3, Categoryname: 'Onions', Categorydescription: 'Onions from Dodoma' },
  { id: 4, Categoryname: 'Carrots', Categorydescription: 'Carrots from Kilimanjaro' },
  { id: 5, Categoryname: 'Cabbage', Categorydescription: 'Cabbage from Tanga' },
  { id: 6, Categoryname: 'Spinach', Categorydescription: 'Spinach from Iringa' },
];



function handlePrint(id) {
  console.log(`Delete row with id: ${id}`);
  // Implement your delete logic here
}

export default function AdminCategoryTable() {
  return (
    <div style={{ height: 400, width: '70%', margin: '20px auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
