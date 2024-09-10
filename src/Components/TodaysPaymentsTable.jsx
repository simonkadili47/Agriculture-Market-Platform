import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Transaction ID', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'buyer_name', headerName: 'Buyer Name', width: 140, headerAlign: 'center', align: 'center' },
  { field: 'product_name', headerName: 'Product Name', width: 160, headerAlign: 'center', align: 'center' },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 100,
    headerAlign: 'center',
    align: 'center',
    editable: true, // Makes the field editable
    renderEditCell: (params) => (
      <TextField
        defaultValue={params.value}
        onChange={(e) => params.api.setEditCellValue({ id: params.id, field: 'quantity', value: e.target.value })}
        sx={{ width: '100%' }}
      />
    ),
  },
  { field: 'amount_paid', headerName: 'Amount Paid', width: 120, headerAlign: 'center', align: 'center' },
  { field: 'payment_method', headerName: 'Payment Method', width: 140, headerAlign: 'center', align: 'center' },
  { field: 'payment_date', headerName: 'Payment Date', width: 140, headerAlign: 'center', align: 'center' },
];

const rows = [
  { id: 1, buyer_name: 'James John', product_name: 'Maharage', quantity: '5 kg', amount_paid: 10000, payment_method: 'Mpesa', payment_date: '30-08-2024' },
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
            whiteSpace: 'normal',
            lineHeight: '1.2',
            wordWrap: 'break-word',
            overflow: 'visible',
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
