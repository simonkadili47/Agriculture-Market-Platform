import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 60, editable: true },
  { field: 'Buyer_name', headerName: 'Buyer Name', width: 120, editable: true },
  { field: 'Product_name', headerName: 'Product Name', width: 120, editable: true },
  { field: 'Quantity', headerName: 'Quantity', width: 80, editable: true },
  { field: 'Total_amounts', headerName: 'Total Amounts', width: 100, editable: true },
  { field: 'Payment_status', headerName: 'Payment Status', width: 120, editable: true },
  { field: 'Payment_method', headerName: 'Payment Method', width: 130, editable: true },
  { field: 'Order_status', headerName: 'Order Status', width: 120, editable: true },
  { field: 'Order_date', headerName: 'Order Date', width: 100, editable: true },
];

const rows = [
  { id: 1, Buyer_name: 'John Ilomo', Product_name: 'Maharage', Quantity: '5kg', Total_amounts: '100000', Payment_status: 'paid', Payment_method: 'Mpesa', Order_status: 'Shipping', Order_date: '30-08-2024' },
  // Add more rows as needed
];

export default function OrdersTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5} // Adjust page size as needed
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
