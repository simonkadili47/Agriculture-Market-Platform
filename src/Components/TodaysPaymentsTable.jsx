import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Transaction ID', minWidth: 150, headerAlign: 'center', align: 'center' },
  { field: 'Buyer_name', headerName: 'Buyer Name', minWidth: 180, headerAlign: 'center', align: 'center' },
  { field: 'Product_name', headerName: 'Product Name', minWidth: 180, headerAlign: 'center', align: 'center' },
  { field: 'Quantity', headerName: 'Quantity', minWidth: 120, headerAlign: 'center', align: 'center' },
  { field: 'Amount_paid', headerName: 'Amount Paid', minWidth: 150, headerAlign: 'center', align: 'center' },
  { field: 'Payment_method', headerName: 'Payment Method', minWidth: 150, headerAlign: 'center', align: 'center' },
  { field: 'Payment_date', headerName: 'Date', minWidth: 120, headerAlign: 'center', align: 'center' },
];

const rows = [
  { id: 1, Buyer_name: 'James John', Product_name: 'Maharage', Quantity: 5, Amount_paid: 10000, Payment_method: 'Mpesa', Payment_date: '30-08-2024' },
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
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'center',
          },
          '& .MuiDataGrid-cellContent': {
            overflow: 'visible',
          },
        }}
      />
    </div>
  );
}
