import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const apiUrl = 'http://127.0.0.1:8000/api/products'; 
    const token = localStorage.getItem('token'); 

    if (!token) {
      console.error('No token found. Please log in.');
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } else {
        console.error('Failed to fetch products:', response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error while fetching products:', error);
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit row with ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete row with ID:', id);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'product_name',
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
      field: 'category_name',
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
      field: 'selling_price',
      headerName: 'Price',
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Qty',
      type: 'number',
      width: 80,
      editable: true,
    },
    {
      field: 'product_image',
      headerName: 'Image',
      width: 100,
      editable: false,
      renderCell: (params) => (
        <img src={params.value} alt={params.row.product_name} style={{ width: '100%', height: 'auto' }} />
      ),
    },
    {
      field: 'product_description',
      headerName: 'Description',
      width: 180,
      editable: true,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
          {params.value}
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: 'green',
              color: 'white',
              marginRight: 1,
              padding: '2px 8px',
              fontSize: '0.75rem',
              minWidth: '50px',
              '&:hover': { backgroundColor: 'darkgreen' },
            }}
            onClick={() => handleEdit(params.row.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{
              backgroundColor: 'red',
              color: 'white',
              padding: '2px 8px',
              fontSize: '0.75rem',
              minWidth: '50px',
              marginRight: 0,
              '&:hover': { backgroundColor: 'darkred' },
            }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    product_name: product.product_name,
    category_name: product.category_name,
    selling_price: product.selling_price,
    quantity: product.quantity,
    product_image: product.product_image,
    product_description: product.product_description,
  }));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
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
          '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f5f5f5', whiteSpace: 'nowrap' },
          '& .MuiDataGrid-cell': { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
          '& .MuiDataGrid-root': { overflow: 'hidden', border: 'none' },
          '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': { border: 'none' },
          '& .MuiDataGrid-virtualScroller': { overflow: 'hidden' },
        }}
      />
    </div>
  );
};

export default ProductTable;
