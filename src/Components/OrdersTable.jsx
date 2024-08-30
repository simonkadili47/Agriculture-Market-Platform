import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 100, editable: true },
  { field: 'Status', headerName: 'Status', width: 120, editable: true },
  { field: 'Paymentmethod', headerName: 'Payment Method', width: 120, editable: true },
  { field: 'Customername', headerName: 'Customer Name', width: 150, editable: true },
  { field: 'Phonenumber', headerName: 'Phone Number', width: 120, editable: true }, 
  { field: 'Date', headerName: 'Date', width: 120, editable: true },
];

const rows = [
  { id: 1, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'John ilomo', Phonenumber: '0714529620', Date:'30-08-2024' },
  { id: 2, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'Jane Doe', Phonenumber: '0714529621',Date:'30-08-2024' },
  { id: 3, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'Alice Smith', Phonenumber: '0714529622',Date:'30-08-2024' },
  { id: 4, Status: 'Complete', Paymentmethod: 'Mpesa', Customername: 'Bob Johnson', Phonenumber: '0714529623',Date:'30-08-2024' },
];

export default function ProductTable() {
  return (
    <div style={{ height: 400, width: '80%', marginLeft: '20px' }}>
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
