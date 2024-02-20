import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../api/api.js';
import { useAuth } from '../context/AuthContext';

export default function DataTable({ type }) {
  const { logout } = useAuth();
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response
      switch (type) {
        case 'coffees':
          response = await api.get('/api/v1/coffees');
          break;
        default:
          // response = await api.get('/api/v1/coffees');
      }

      if (response.data.status.code === 200) {
        const data = response.data.metadata
        setData(data)
        if (data.length > 0) {
          setHeaders(Object.keys(data[0]))
        }
      // check session expired
      } else if (response.data.status.code === 401) {
        logout()
      }
    }
    fetchData()
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item, index) => (
              index === 0 ?
                <TableCell key={index}>{ item.toUpperCase() }</TableCell>
              :
                <TableCell align="right" key={index}>{ item.toUpperCase() }</TableCell>
              
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.prcess}</TableCell>
              <TableCell align="right">{row.variety}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}