import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editOpen, setEditOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [editData, setEditData] = useState({
        id: '',
        category_name: '',
        category_description: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
        // Cleanup function
        return () => setLoading(false);
    }, [navigate]);

    const fetchCategories = async () => {
        const apiUrl = 'http://127.0.0.1:8000/api/categories';
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('No token found. Redirecting to login.');
            navigate('/login');
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
                setCategories(data);
            } else {
                console.error('Failed to fetch categories:', response.statusText);
            }
        } catch (error) {
            console.error('Error while fetching categories:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle Delete Category
    const handleDelete = async (id) => {
        const apiUrl = `http://127.0.0.1:8000/api/categories/${id}`;
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('No token found. Please log in.');
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                console.log('Category deleted successfully.');
                fetchCategories();
            } else {
                console.error('Failed to delete category:', response.statusText);
            }
        } catch (error) {
            console.error('Error while deleting category:', error);
        } finally {
            setConfirmOpen(false);
        }
    };

   
    const handleEdit = (id) => {
        const category = categories.find(cat => cat.id === id);
        if (category) {
            setEditData(category);
            setEditOpen(true);
        }
    };

    // Handle Save Changes (Update Category)
    const handleSaveChanges = async () => {
        const apiUrl = `http://127.0.0.1:8000/api/categories/${editData.id}`;
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('No token found. Please log in.');
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    category_name: editData.category_name,
                    category_description: editData.category_description,
                }),
            });

            if (response.ok) {
                const updatedCategory = await response.json();
                console.log('Category updated successfully.');
                // Refresh categories after update
                fetchCategories();
                setEditOpen(false);
            } else {
                console.error('Failed to update category:', response.statusText);
            }
        } catch (error) {
            console.error('Error while updating category:', error);
        }
    };

    const handleCloseEdit = () => {
        setEditOpen(false);
    };

    const handleOpenConfirmDialog = (id) => {
        setSelectedCategoryId(id);
        setConfirmOpen(true);
    };

    const handleCloseConfirm = () => {
        setConfirmOpen(false);
    };

    const handleConfirmDelete = () => {
        handleDelete(selectedCategoryId);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const columns = [
        { field: 'id', headerName: 'Category ID', width: 120 },
        { field: 'category_name', headerName: 'Category Name', width: 200 },
        { field: 'category_description', headerName: 'Category Description', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            sortable: false,
            renderCell: (params) => (
                <div>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: 'green', color: 'white', marginRight: 1, '&:hover': { backgroundColor: 'darkgreen' } }}
                        onClick={() => handleEdit(params.row.id)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleOpenConfirmDialog(params.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    const rows = categories.map((category) => ({
        id: category.id,
        category_name: category.category_name,
        category_description: category.category_description,
    }));

    return (
        <div style={{ height: 400, width: '70%', margin: '20px auto' }}>
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

            {/* Edit Modal */}
            <Dialog open={editOpen} onClose={handleCloseEdit}>
                <DialogTitle>Edit Category</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Category Name"
                        type="text"
                        fullWidth
                        value={editData.category_name}
                        onChange={(e) => setEditData({ ...editData, category_name: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Category Description"
                        type="text"
                        fullWidth
                        value={editData.category_description}
                        onChange={(e) => setEditData({ ...editData, category_description: e.target.value })} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit}>Cancel</Button>
                    <Button onClick={handleSaveChanges} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={confirmOpen}
                onClose={handleCloseConfirm}
            >
                <DialogTitle>Delete Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this category?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CategoryTable;
