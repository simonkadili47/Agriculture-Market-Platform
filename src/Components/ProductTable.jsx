import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Productname',
    headerName: 'Product name',
    width: 150,
    editable: true,
  },
  {
    field: 'Productcategory',
    headerName: 'Product category',
    width: 150,
    editable: true,
  },
  {
    field: 'Sellingprice',
    headerName: 'Selling price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Productimage',
    headerName: 'Product image',
    type: 'file',
    width: 110,
    editable: true,
  },
  {
    field: 'Productdescription',
    headerName: 'Product description',
    width: 200,
    editable: true,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 180, // Adjust width as needed
    renderCell: (params) => (
      <Box sx={{ display: 'flex', gap: '8px' }}> {/* Reduced gap */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}> {/* Reduced gap */}
          <IconButton color="primary" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <Button variant="text" onClick={() => handleEdit(params.row)}>
            Edit
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}> {/* Reduced gap */}
          <IconButton color="error" onClick={() => handleDelete(params.row)}>
            <DeleteIcon />
          </IconButton>
          <Button variant="text" onClick={() => handleDelete(params.row)}>
            Delete
          </Button>
        </Box>
      </Box>
    ),
  },
];

const rows = [
  { id: 1, Productname: 'Rice', Productcategory: 'Mbeya', Sellingprice: '1000', Quantity: '10', Productimage: '', Productdescription: 'very nice rice' },
  // Add more rows as needed
];

const handleEdit = (row) => {
  // Handle the edit action here
  console.log('Edit row:', row);
};

const handleDelete = (row) => {
  // Handle the delete action here
  console.log('Delete row:', row);
};

export default function ProductTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
    </Box>
  );
}
