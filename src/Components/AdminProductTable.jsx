import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'Productname',
    headerName: 'Product Name',
    width: 120,
    editable: true,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'Productcategory',
    headerName: 'Category',
    width: 120,
    editable: true,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </div>
    ),
  },
  {
    field: 'Sellingprice',
    headerName: 'Price',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'Quantity',
    headerName: 'Qty',
    type: 'number',
    width: 80,
    editable: true,
  },
  {
    field: 'Productimage',
    headerName: 'Image',
    type: 'file',
    width: 100,
    editable: true,
  },
  {
    field: 'Productdescription',
    headerName: 'Description',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
        {params.value}
      </div>
    ),
  },
  // {
  //   field: 'actions',
  //   headerName: 'Actions',
  //   width: 80, // Keeping the width slightly larger for the button
  //   sortable: false,
  //   renderCell: (params) => (
  //     <div style={{ padding: '0' }}> {/* Remove padding around the container */}
  //       <Button
  //         variant="contained"
  //         color="error"
  //         size="small"
  //         sx={{ 
  //           backgroundColor: 'red', 
  //           color: 'white', 
  //           padding: '2px 6px',  // Reduced padding
  //           fontSize: '0.75rem', 
  //           minWidth: '40px',
  //           marginRight: 0, // No margin to the right
  //           '&:hover': { backgroundColor: 'darkred' } 
  //         }}
  //         onClick={() => handlePrint(params.row.id)}
  //       >
  //         Print
  //       </Button>
  //     </div>
  //   ),
  // },
];

const rows = [
  { id: 1, Productname: 'Rice', Productcategory: 'Mbeya', Sellingprice: '1000', Quantity: '10', Productimage: '', Productdescription: 'Very nice rice' },
];

// const handlePrint = (id) => {
//   console.log('Print row with ID:', id);
// };

export default function AdminProductTable() {
  return (
    <div style={{ height: 400, width: '90%' }}>
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
          backgroundColor: 'white',
          '& .MuiDataGrid-columnHeaders': { 
            backgroundColor: '#f5f5f5',
            whiteSpace: 'nowrap',
          },
          '& .MuiDataGrid-cell': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '& .MuiDataGrid-root': {
            overflow: 'hidden',
            border: 'none',
          },
          '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
            border: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            overflow: 'hidden',
          },
        }}
      />
    </div>
  );
}
