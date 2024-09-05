import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 100, editable: true },
  { field: 'Productname', headerName: 'Product Name', width: 120, editable: true },
  { field: 'Buyername', headerName: 'Buyer Name', width: 160, editable: true },
  { field: 'Quantity', headerName: 'Quantity', width: 200, editable: true },
  { field: 'Totalamounts', headerName: 'Total Amounts', width: 160, editable: true },
  { field: 'Orderdate', headerName: 'Order Date', width: 140, editable: true },
  { field: 'Paymentduedate', headerName: 'Payment Due Date', width: 140, editable: true },
];

const rows = [
  { id: 1, Productname: 'Maharage', Buyername: 'John James', Quantity: '5kg', Totalamounts: '100000', Orderdate: '30-08-2024',Paymentduedate:'30-0802024' },

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
