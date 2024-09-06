import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Transaction ID', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'buyer_name', headerName: 'Buyer Name', width: 160, headerAlign: 'center', align: 'center' },
  { field: 'product_name', headerName: 'Product Name', width: 160, headerAlign: 'center', align: 'center' },
  { field: 'quantity', headerName: 'Quantity', width: 100, headerAlign: 'center', align: 'center' },
  { field: 'amount_paid', headerName: 'Amount Paid', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'payment_method', headerName: 'Payment Method', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'payment_date', headerName: 'Payment Date', width: 100, headerAlign: 'center', align: 'center' },
];

const rows = [
  { id: 1, buyer_name: 'James John', product_name: 'Maharage', quantity: 5, amount_paid: 10000, payment_method: 'Mpesa', payment_date: '30-08-2024' },
];

export default function TodaysPaymentsTable() {
  return (
    <div style={{ height: 400, width: '100%', margin: '0 auto' }}>
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
            textAlign: 'center',
            // Ensure headers don't overflow and are fully visible
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        }}
      />
    </div>
  );
}
