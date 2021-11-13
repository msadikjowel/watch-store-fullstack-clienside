import React, { useEffect, useState } from 'react';
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
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';

const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />

const ManageProducts = () => {
    // all state
    const [allProducts, setAllProducts] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false)


    useEffect(() => {
        fetch(`https://radiant-brook-77884.herokuapp.com/allProducts`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
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
            fetch(`https://radiant-brook-77884.herokuapp.com/productDelete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = allProducts.filter(product => product._id !== id);
                        setAllProducts(remainingProduct);
                        setDeleteSuccess(true);
                    }
                })
        }
    }
    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '3rem 0', fontWeight: '600' }}>All Products: {allProducts.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'auto' }} aria-label="User purchased products table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Id</StyledTableCell>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allProducts.map((product) => (
                            <StyledTableRow key={product._id}>
                                <StyledTableCell component="th" scope="row">
                                    {product._id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{product?.name}</StyledTableCell>
                                <StyledTableCell align="center">$ {product?.price}</StyledTableCell>


                                <StyledTableCell align="center" >

                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>





                                        <Button
                                            title="Delete Product"
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

export default ManageProducts;