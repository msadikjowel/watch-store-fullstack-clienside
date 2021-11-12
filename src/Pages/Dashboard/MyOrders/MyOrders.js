import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Alert, Button } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
const dollerIcon = <FontAwesomeIcon icon={faHandHoldingUsd} />

const MyOrders = () => {
    // all state
    const { user } = useAuth();
    const [purchased, setPurchased] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/purchased?email=${user.email}`)
            .then(res => res.json())
            .then(data => setPurchased(data))
    }, []);

    // table
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    // delete product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if (proceed) {
            fetch(`http://localhost:5000/purchaseDelete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = purchased.filter(product => product._id !== id);
                        setPurchased(remainingProduct);
                        setDeleteSuccess(true);
                    }
                })
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '3rem 0', fontWeight: '600' }}>My All Orders: {purchased.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'auto' }} aria-label="User purchased products table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">User Phone</StyledTableCell>
                            <StyledTableCell align="center">Shipping Addess</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchased.map((product) => (
                            <StyledTableRow key={product._id}>
                                <StyledTableCell component="th" scope="row">
                                    {product.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">${product?.price}</StyledTableCell>
                                <StyledTableCell align="center">{product?.phone}</StyledTableCell>
                                <StyledTableCell align="center">{product?.address}</StyledTableCell>
                                <StyledTableCell align="center">{product?.status}</StyledTableCell>

                                <StyledTableCell align="center" >

                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                        <NavLink to='/dashboard/payment'>
                                            <Button title="Pay to confirm" sx={{ color: 'green', fontSize: '1rem' }}>{dollerIcon}</Button>
                                        </NavLink>

                                        <Button
                                            title="Delete product"
                                            sx={{ color: 'red' }}
                                            onClick={() => handleDeleteProduct(product._id)}
                                        >{deleteIcon}

                                        </Button>

                                    </Box>

                                </StyledTableCell>

                            </StyledTableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            {deleteSuccess && <Alert severity="success">Product deleted successfully !</Alert>}
        </div>
    );
};

export default MyOrders;