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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DataTable({ type }) {
  const { logout } = useAuth();
  const [data, setData] = useState({});
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/api/v1/coffees');
      if (response.data.status.code === 200) {
        const coffees = response.data.coffees
        setData(coffees)

        console.log(coffees)
        if (coffees.length > 0) {
          console.log(Object.keys(coffees[0]))
          setHeaders(Object.keys(coffees[0]))
        }

        // check session expired
        if (response.data.status.message === 'session expired') {
          logout()
        }
      }
    }
    fetchData()
  }, []);

  const getHeaders = () => {
    if (data.length > 0) {
      console.log(data)
      // setHeaders()
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item, index) => (
              <TableCell key={index}>{ item }</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}