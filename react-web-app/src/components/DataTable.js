import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import api from '../api/api.js';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export default function DataTable({ type }) {
  const navigate = useNavigate();
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

  const handleNewAction = () => {
    console.log('new')
    api.get('/api/v1/coffees');
    navigate('/coffees/new')
  }

  return (
    <TableContainer component={Paper}>
      {/* TODO: should be dynamic */}
      <Typography variant="h6" noWrap component="div">
        Coffee
      </Typography>
      <Button onClick={handleNewAction} className="new-button" variant="contained" color="primary">
        New
      </Button>

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
              {/* TODO: Need to do this more dinamically */}
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.prcess}</TableCell>
              <TableCell align="right">{row.variety}</TableCell>
              <TableCell align="right">{row.origin}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}