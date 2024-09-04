import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 100, editable: true },
  { field: 'Status', headerName: 'Status', width: 120, editable: true },
  { field: 'Paymentmethod', headerName: 'Payment Method', width: 160, editable: true },
  { field: 'Customername', headerName: 'Customer Name', width: 200, editable: true },
  { field: 'Phonenumber', headerName: 'Phone Number', width: 160, editable: true },
  { field: 'Date', headerName: 'Date', width: 140, editable: true },
];

const rows = [
  { id: 1, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'John Ilomo', Phonenumber: '0714529620', Date: '30-08-2024' },
  { id: 2, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'Jane Doe', Phonenumber: '0714529621', Date: '30-08-2024' },
  { id: 3, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'Alice Smith', Phonenumber: '0714529622', Date: '30-08-2024' },
  { id: 4, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'Bob Johnson', Phonenumber: '0714529623', Date: '30-08-2024' },
];

export default function ProductTable() {
  return (
    <div style={{ height: 400, width: '100%', margin: '0 auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ 
          '& .MuiDataGrid-columnHeaders': {
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
          },
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            justifyContent: 'center', 
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            textAlign: 'center', 
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'center', 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
          },
          '& .MuiDataGrid-cellContent': {
            overflow: 'visible', 
          },
          '& .MuiDataGrid-root': {
            border: 'none', 
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none', 
          },
        }}
      />
    </div>
  );
}
