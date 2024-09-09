import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 80, editable: true },
  { field: 'Buyer_name', headerName: 'Buyer Name', width: 140, editable: true },
  { field: 'Product_name', headerName: 'Product Name', width: 140, editable: true },
  { field: 'Selling_price', headerName: 'Selling Price', width: 140, editable: true },
  { field: 'Quantity', headerName: 'Quantity', width: 100, editable: true },
  { field: 'Total_amounts', headerName: 'Total Amounts', width: 140, editable: true },
  { field: 'Payment_status', headerName: 'Payment Status', width: 150, editable: true },
  { field: 'Payment_method', headerName: 'Payment Method', width: 160, editable: true },
  { field: 'Order_status', headerName: 'Order Status', width: 150, editable: true },
  { field: 'Order_date', headerName: 'Order Date', width: 120, editable: true },
];

const rows = [
  { id: 1, Buyer_name: 'Juma Ilomo', Product_name: 'Maharage', Selling_price: '2000/kg', Quantity: '5kg', Total_amounts: '10000', Payment_status: 'pending', Payment_method: 'Mpesa', Order_status: 'Shipping', Order_date: '30-08-2024' },
];

export default function CurrentOrdersTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
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
            whiteSpace: 'normal', // Allow text to wrap in headers
            lineHeight: '1.2', // Adjust line height for better readability
            padding: '0 10px', // Add padding for spacing
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'center', 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
          },
          '& .MuiDataGrid-root': {
            border: 'none',
            overflow: 'hidden',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none', 
          },
        }}
      />
    </div>
  );
}
