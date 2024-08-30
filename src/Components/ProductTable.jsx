import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
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
    width: 80, // Reduced width for the Action column
    renderCell: (params) => (
      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton color="primary" onClick={() => handleEdit(params.row)} size="small">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton color="error" onClick={() => handleDelete(params.row)} size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  { id: 1, Productname: 'Rice', Productcategory: 'Mbeya', Sellingprice: '1000', Quantity: '10', Productimage: '', Productdescription: 'very nice rice' },
  { id: 1, Productname: 'Rice', Productcategory: 'Mbeya', Sellingprice: '1000', Quantity: '10', Productimage: '', Productdescription: 'very nice rice' },
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
    <div style={{ height: 400, width: '100%' }}>
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
