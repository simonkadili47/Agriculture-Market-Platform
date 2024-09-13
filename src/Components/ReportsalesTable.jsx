import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Report ID', flex: 0.7, editable: true },
  { field: 'farmer_name', headerName: 'Farmer Name', flex: 1.2, editable: true },
  { field: 'product_name', headerName: 'Product Name', flex: 1.5, editable: true },
  { field: 'quantity', headerName: 'Quantity', flex: 1, minWidth: 100, editable: true }, // Increased flex and added minWidth
  { field: 'selling_price', headerName: 'Selling Price', flex: 1, editable: true },
  { field: 'total_amount', headerName: 'Total Amount', flex: 1, editable: true },
  { field: 'payment_status', headerName: 'Payment Status', flex: 1, editable: true },
  { field: 'buyer_name', headerName: 'Buyer Name', flex: 1, editable: true },
  // {
  //   field: 'actions',
  //   headerName: 'Actions',
  //   flex: 1.2, // Reduced flex to balance width for action buttons
  //   sortable: false,
  //   renderCell: (params) => (
  //     <div>
       
  //       {/* <Button
  //         variant="contained"
  //         color="error"
  //         size="small"
  //         onClick={() => handlePrint(params.row.id)}
  //       >
  //      Print
  //       </Button> */}
  //     </div>
  //   ),
  // },
];

const rows = [
  { id: 1, farmer_name: 'John Ilomo', product_name: 'Potatoes', quantity: '10kg', selling_price: '5000/kg', total_amount: '50000', payment_status: 'pending', buyer_name: 'John Juma' },
];





export default function ReportsalesTable() {
  return (
    <div style={{ height: 'auto', width: '100%', margin: '20px auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
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
          '& .MuiDataGrid-columnHeader': {
            whiteSpace: 'normal',
            wordWrap: 'break-word',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
          },
          '& .MuiDataGrid-root': {
            overflowX: 'hidden', // Ensure no horizontal scrolling
          },
        }}
      />
    </div>
  );
}
