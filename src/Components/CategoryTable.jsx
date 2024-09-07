import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'Categoryname', headerName: 'Category Name', width: 200, editable: true },
  { field: 'Categorydescription', headerName: 'Category Description', width: 200, editable: true },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <div>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: 'green', color: 'white', marginRight: 1, '&:hover': { backgroundColor: 'darkgreen' } }}
          onClick={() => handleEdit(params.row.id)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error" 
          size="small"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
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

function handleEdit(id) {
  console.log(`Edit row with id: ${id}`);
  // Implement your edit logic here
}

function handleDelete(id) {
  console.log(`Delete row with id: ${id}`);
  // Implement your delete logic here
}

export default function ProductTable() {
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
