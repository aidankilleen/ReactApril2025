import { useEffect, useState } from 'react';
import {DataGrid} from '@mui/x-data-grid';
import './App.css'

function App() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);

  const columns = [
    {field: 'id', headerName: 'ID', width: 90}, 
    {field: 'name', headerName: 'Name', flex:3}, 
    {field: 'email', headerName: 'Email', flex:2}, 
    {field: 'active', headerName: 'Active', flex:1}, 
  ];

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(`https://api.acodingtutor.com/users?_page=${page + 1}&_limit=${pageSize}`);
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
    </>
  )
}

export default App
