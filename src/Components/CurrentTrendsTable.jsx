import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'id', width: 100, editable: true },
  { field: 'product_name', headerName: 'Product Name', width: 120, editable: true },
  { field: 'selling_price', headerName: 'Selling Price', width: 120, editable: true },
  { field: 'region', headerName: 'Region', width: 150, editable: true },
  { field: 'trends_date', headerName: 'Trends Date', width: 120, editable: true },
];

const rows = [
  { id: 1, product_name: 'Cassava',selling_price: '1000/kg', region: 'Mbeya',  trends_date:'30-08-2024' },
  { id: 2, product_name: 'Potatoes',selling_price: '500@', region: 'Tunduma',  trends_date:'30-08-2024' },
  { id: 3, product_name: 'Avoccado',selling_price: '400@', region: 'Iringa',  trends_date:'30-08-2024' },
  { id: 4, product_name: 'Cassava',Sellingprice: '1000/kg', region: 'Mbeya',  trends_date:'30-08-2024' },
  { id: 5, product_name: 'Cassava',selling_price: '1000/kg', region: 'Mbeya',  trends_date:'30-08-2024' },
  
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
