import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Payment ID', width: 100 }, // Increased width to make sure it's fully visible
  { field: 'Paymentmethod', headerName: 'Payment Method', width: 160, editable: true },
  { field: 'Accountnumber', headerName: 'Account Number', width: 170, editable: true },
  { field: 'Accountname', headerName: 'Account Name', width: 160, editable: true },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150, // Slightly increased to accommodate both buttons
    sortable: false,
    renderCell: (params) => (
      <div>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: 'green',
            color: 'white',
            minWidth: '60px',
            padding: '4px 8px',
            marginRight: 1,
            fontSize: '0.75rem',
            '&:hover': { backgroundColor: 'darkgreen' },
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
            minWidth: '60px',
            padding: '4px 8px',
            fontSize: '0.75rem',
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
  { id: 1, Paymentmethod: 'Mpesa', Accountnumber: '252760', Accountname: 'Simon Kadili' },
  { id: 2, Paymentmethod: 'Tigopesa', Accountnumber: '252760', Accountname: 'Simon Kadili' },
  { id: 3, Paymentmethod: 'CRDB Bank', Accountnumber: '0152483265100', Accountname: 'Simon Kadili' },
];

function handleEdit(id) {
  console.log(`Edit row with id: ${id}`);
  // Implement your edit logic here
}

function handleDelete(id) {
  console.log(`Delete row with id: ${id}`);
  // Implement your delete logic here
}

export default function PaymentmethodTable() {
  return (
    <div style={{ height: 350, width: '90%', margin: '20px auto' }}>
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
          '& .MuiDataGrid-columnHeaderTitle': {
            whiteSpace: 'normal', // Allow the header text to wrap if it's too long
            lineHeight: '1.2', // Set line height for better readability
            textAlign: 'center', // Center the header text
          },
          '& .MuiDataGrid-columnHeaders': {
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
          },
        }}
      />
    </div>
  );
}
