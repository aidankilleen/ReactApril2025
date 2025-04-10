import { useEffect, useState } from 'react';
import {DataGrid} from '@mui/x-data-grid';
import './App.css'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Snackbar } from '@mui/material';
import { Delete } from '@mui/icons-material';
import ConfirmDialog from './ConfirmDialog';

const BASE_URL = 'https://api.acodingtutor.com/users';

function App() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const onDelete = async (id) => {

    // show the dialog
    setSelectedRowId(id);
    setOpenDialog(true);
  }

  const handleDelete = async() => {
    await fetch(`${BASE_URL}/${selectedRowId}`, {
      method: 'DELETE'
    });
    setUsers(prev => prev.filter(row => row.id !== selectedRowId));
    setOpenDialog(false);
    setOpenSnackbar(true);
  }

  const columns = [
    {field: 'id', headerName: 'ID', width: 90}, 
    {field: 'name', headerName: 'Name', flex:3}, 
    {field: 'email', headerName: 'Email', flex:2}, 
    {field: 'active', headerName: 'Active', flex:1}, 
    {field: 'actions', headerName: 'Actions', width: 100, 
      renderCell: params => (
        <IconButton onClick={() => onDelete(params.row.id)}><Delete/></IconButton>
      )
    }
  ];

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}?_page=${page + 1}&_limit=${pageSize}`);
      const data = await response.json();

      const rowCount = parseInt(response.headers.get('x-total-count'), 10);
      setRowCount(rowCount);
      setUsers([...data]);
    }
    fetchData();
  }, [page, pageSize]);

  const onPageEvent = ({page, pageSize}) => {
    console.log(`${page} ${pageSize}`)
    setPage(page);
    setPageSize(pageSize);
  }
  return (
    <>
      <h1>DataGrid Investigation</h1>

      <DataGrid 
        columns={columns} 
        rows={users}
        pagination
        paginationMode="server"
        paginationModel={{
          page,
          pageSize, 
        }}
        pageSizeOptions={[10, 20, 50]}
        rowCount={rowCount}
        onPaginationModelChange={onPageEvent}
      />
      <ConfirmDialog 
        open={openDialog}
        setOpen={setOpenDialog}
        title="Delete User"
        message={`Delete User ${selectedRowId} are you sure?`}
        onConfirm={handleDelete}
      />
      <Snackbar 
        open={openSnackbar} 
        message="User Deleted"
        onClose={()=>setOpenSnackbar(false)}
        autoHideDuration={3000}
      />
      
    </>
  )
}

export default App
