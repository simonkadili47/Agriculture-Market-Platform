import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'id', width: 100, editable: true },
  { field: 'Productname', headerName: 'Product Name', width: 120, editable: true },
  { field: 'Sellingprice', headerName: 'Selling Price', width: 120, editable: true },
  { field: 'Region', headerName: 'Region', width: 150, editable: true },
  { field: 'Date', headerName: 'Date', width: 120, editable: true },
];

const rows = [
  { id: 1, Productname: 'Cassava',Sellingprice: '1000/kg', Region: 'Mbeya',  Date:'30-08-2024' },
  { id: 2, Productname: 'Potatoes',Sellingprice: '500@', Region: 'Tunduma',  Date:'30-08-2024' },
  { id: 3, Productname: 'Avoccado',Sellingprice: '400@', Region: 'Iringa',  Date:'30-08-2024' },
  { id: 4, Productname: 'Cassava',Sellingprice: '1000/kg', Region: 'Mbeya',  Date:'30-08-2024' },
  { id: 5, Productname: 'Cassava',Sellingprice: '1000/kg', Region: 'Mbeya',  Date:'30-08-2024' },
  
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
