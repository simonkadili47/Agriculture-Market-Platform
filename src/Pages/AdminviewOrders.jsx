import * as React from 'react';
import Header from '../Components/Header';
import AdminSidebar from '../Components/AdminSidebar';
import { DataGrid } from '@mui/x-data-grid';
import PrintIcon from '@mui/icons-material/Print';
import { Button } from '@mui/material';
import '../styles/print.css';

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

const rows = [
  { id: 1, Buyer_name: 'John Ilomo', Product_name: 'Maharage', Quantity: '5kg', Total_amounts: '100000', Payment_status: 'paid', Payment_method: 'Mpesa', Order_status: 'Shipping', Order_date: '30-08-2024' },
];

const AdminOrdersTable = () => {
  return (
    <div className="relative">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f5f5f5',
            },
            '& .MuiDataGrid-cell': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnSeparator': {
              display: 'none',
            },
          }}
        />
      </div>
    </div>
  );
};

const AdminviewOrders = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col mt-20 min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-4 overflow-x-hidden">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold ml-3">All Orders</h1>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<PrintIcon />}
                onClick={handlePrint}
                className="mr-3"
              >
                Print
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <AdminOrdersTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminviewOrders;
