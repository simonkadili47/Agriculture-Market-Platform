import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PrintIcon from '@mui/icons-material/Print';
import { IconButton, Tooltip } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 60 },
  { field: 'Buyer_name', headerName: 'Buyer Name', width: 150 },
  { field: 'Product_name', headerName: 'Product Name', width: 150 },
  { field: 'Quantity', headerName: 'Quantity', width: 80 },
  { field: 'Total_amounts', headerName: 'Total Amounts', width: 100 },
  { field: 'Payment_status', headerName: 'Payment Status', width: 120 },
  { field: 'Payment_method', headerName: 'Payment Method', width: 130 },
  { field: 'Order_status', headerName: 'Order Status', width: 120 },
  { field: 'Order_date', headerName: 'Order Date', width: 100 },
  
];

// Sample row data
const rows = [
  { id: 1, Buyer_name: 'John Ilomo', Product_name: 'Maharage', Quantity: '5kg', Total_amounts: '100000', Payment_status: 'paid', Payment_method: 'Mpesa', Order_status: 'Shipping', Order_date: '30-08-2024' },
];



export default function AdminOrdersTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          '& .MuiDataGrid-root': {
            width: '100%',
            overflowX: 'auto',
          },
          '& .MuiDataGrid-columnHeaders': {
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
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        }}
      />
    </div>
  );
}
