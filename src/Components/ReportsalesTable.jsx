import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'Report ID', width: 80, editable: true },
  { field: 'farmer_name', headerName: 'Farmer Name', width: 160, editable: true },
  { field: 'product_name', headerName: 'Product Name', width: 160, editable: true },
  { field: 'product_category', headerName: 'Product Category', width: 160, editable: true },
  { field: 'quantity', headerName: 'Quantity', width: 160, editable: true },
  { field: 'selling_price', headerName: 'Selling Price', width: 160, editable: true },
  { field: 'total_amount', headerName: 'Total Amount', width: 160, editable: true },
  { field: 'payment_status', headerName: 'Payment Status', width: 160, editable: true },
  { field: 'payment_method', headerName: 'Payment Method', width: 160, editable: true },
  { field: 'buyer_name', headerName: 'Buyer Name', width: 160, editable: true },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 160,
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
  { id: 1, farmer_name: 'John Ilomo', product_name: 'Potatoes from Mbeya',product_category:'Mviringo', Quantity:'10kg', selling_price:'5000/kg', total_amount:'50000', payment_status:'pending', payment_method:'mpesa', buyer_name:'John Juma',  },
  
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
