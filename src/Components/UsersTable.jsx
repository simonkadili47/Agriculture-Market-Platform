import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'full_name', headerName: 'Full Name', width: 120, editable: true },
  { field: 'email', headerName: 'Email', width: 150, editable: true },
  { field: 'role', headerName: 'Role', width: 100, editable: true },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 160,
    flex:0,
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
  { id: 1, full_name: 'Juma Hamza', email: 'juma@gmail.com', role: 'farmer' },
  { id: 2, full_name: 'Joshua Hamza', email: 'joshua@gmail.com', role: 'buyer' },
  { id: 3, full_name: 'Joshua Hamza', email: 'joshua@gmail.com', role: 'buyer' },
  { id: 4, full_name: 'Joshua Hamza', email: 'joshua@gmail.com', role: 'buyer' },
  { id: 5, full_name: 'Joshua Hamza', email: 'joshua@gmail.com', role: 'buyer' },
  { id: 6, full_name: 'Joshua Hamza', email: 'joshua@gmail.com', role: 'buyer' },
  { id: 7, full_name: 'Joshua Hamza', email: 'joshua@gmail.com', role: 'buyer' },
];

function handleEdit(id) {
  console.log(`Edit row with id: ${id}`);
  // Implement your edit logic here
}

function handleDelete(id) {
  console.log(`Delete row with id: ${id}`);
  // Implement your delete logic here
}

export default function UsersTable() {
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
        autoHeight
      />
    </div>
  );
}
