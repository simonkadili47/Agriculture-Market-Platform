import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'Productname',
    headerName: 'Product Name',
    width: 120,
    editable: true,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'Productcategory',
    headerName: 'Category',
    width: 120,
    editable: true,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'Sellingprice',
    headerName: 'Price',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'Quantity',
    headerName: 'Qty',
    type: 'number',
    width: 80,
    editable: true,
  },
  {
    field: 'Productimage',
    headerName: 'Image',
    type: 'file',
    width: 100,
    editable: true,
  },
  {
    field: 'Productdescription',
    headerName: 'Description',
    width: 180,
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
      <div>
        <Button
          variant="contained"
          size="small"
          sx={{ 
            backgroundColor: 'green', 
            color: 'white', 
            marginRight: 1, 
            padding: '2px 8px', 
            fontSize: '0.75rem', 
            minWidth: '50px', 
            '&:hover': { backgroundColor: 'darkgreen' } 
          }}
          onClick={() => handleEdit(params.row.id)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ 
            backgroundColor: 'red', 
            color: 'white', 
            padding: '2px 8px', 
            fontSize: '0.75rem', 
            minWidth: '50px', 
            marginRight: 0, 
            '&:hover': { backgroundColor: 'darkred' } 
          }}
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, Productname: 'Rice', Productcategory: 'Mbeya', Sellingprice: '1000', Quantity: '10', Productimage: '', Productdescription: 'Very nice rice' },
];

const handleEdit = (id) => {
  // Handle the edit action here
  console.log('Edit row with ID:', id);
};

const handleDelete = (id) => {
  // Handle the delete action here
  console.log('Delete row with ID:', id);
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
        sx={{ 
          '& .MuiDataGrid-columnHeaders': { 
            whiteSpace: 'nowrap',
          },
          '& .MuiDataGrid-cell': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '& .MuiDataGrid-root': {
            overflow: 'hidden',
          },
          '& .MuiDataGrid-virtualScroller': {
            overflow: 'hidden',
          },
        }}
      />
    </div>
  );
}
