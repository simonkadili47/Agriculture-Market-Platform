import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 80, editable: true },
  { field: 'Buyer_name', headerName: 'Buyer Name', width: 130, editable: true },
  { field: 'Product_name', headerName: 'Product Name', width: 130, editable: true },
  { field: 'Quantity', headerName: 'Quantity', width: 90, editable: true },
  { field: 'Total_amounts', headerName: 'Total Amounts', width: 120, editable: true },
  { field: 'Payment_status', headerName: 'Payment Status', width: 130, editable: true },
  { field: 'Payment_method', headerName: 'Payment Method', width: 140, editable: true },
  { field: 'Order_status', headerName: 'Order Status', width: 130, editable: true },
  { field: 'Order_date', headerName: 'Order Date', width: 120, editable: true },
];

const rows = [
  { id: 1, Buyer_name: 'John Ilomo', Product_name: 'Maharage', Quantity: '5kg', Total_amounts: '100000', Payment_status: 'paid', Payment_method: 'Mpesa', Order_status: 'Shipping', Order_date: '30-08-2024' },
  // You can add more rows as needed
];

export default function ProductTable() {
  return (
    <div style={{ height: '80vh', width: '100%', margin: '0 auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rows.length} // Adjust page size to display all rows
        checkboxSelection
        disableRowSelectionOnClick
        autoHeight={false} // Set to false to manage height manually
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
