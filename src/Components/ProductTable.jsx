import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

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
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <div >
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
          color="error" // MUI provides a built-in 'error' color variant which is red
          size="small"
          sx={{ backgroundColor: 'red', color: 'white', marginRight: 8  }}
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
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
