import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Transaction ID', minWidth: 150, headerAlign: 'center', align: 'center' },
  { field: 'Buyername', headerName: 'Buyer Name', minWidth: 180, headerAlign: 'center', align: 'center' },
  { field: 'Quantity', headerName: 'Quantity', minWidth: 120, headerAlign: 'center', align: 'center' },
  { field: 'Amountpaid', headerName: 'Amount Paid', minWidth: 150, headerAlign: 'center', align: 'center' },
  { field: 'Paymentmethod', headerName: 'Payment Method', minWidth: 150, headerAlign: 'center', align: 'center' },
  { field: 'Date', headerName: 'Date', minWidth: 120, headerAlign: 'center', align: 'center' },
];

const rows = [
  { id: 1, Buyername: 'James John', Quantity: 5, Amountpaid: 10000, Paymentmethod: 'Mpesa', Date: '30-08-2024' },
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
