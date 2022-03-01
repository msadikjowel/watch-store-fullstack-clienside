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
import { faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';
import useAuth from '../../../../hooks/useAuth';
import { Helmet } from 'react-helmet';

const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
const okIcon = <FontAwesomeIcon icon={faCheckCircle} />

const ManageAllOrders = () => {
    // all state
    const { user } = useAuth();
    const [allPurchased, setAllPurchased] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false)
    const [updateStatusSuccess, setUpdateStatusSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://radiant-brook-77884.herokuapp.com/allPurchased`)
            .then(res => res.json())
            .then(data => setAllPurchased(data))
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
            fetch(`https://radiant-brook-77884.herokuapp.com/purchaseDelete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = allPurchased.filter(product => product._id !== id);
                        setAllPurchased(remainingProduct);
                        setDeleteSuccess(true);
                    }
                })
        }
    }


    // update status
    const handleUpdateStatus = id => {
        const proceed = window.confirm('Are you sure to APPROVE this order?')
        if (proceed) {
            fetch(`https://radiant-brook-77884.herokuapp.com/updateStatus/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(allPurchased)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setUpdateStatusSuccess(true);
                        window.location.reload();
                    }
                })
        }
    }


    return (
        <div>
            {/* react helmet for dynamic tab name */}
            <Helmet>
                <title>All orders placed | Watch Station</title>
            </Helmet>

            <h2 style={{ textAlign: 'center', margin: '3rem 0', fontWeight: '600' }}>All Users Orders: {allPurchased.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'auto' }} aria-label="User purchased products table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">User Name</StyledTableCell>
                            <StyledTableCell align="center">User Email</StyledTableCell>
                            <StyledTableCell align="center">User Phone</StyledTableCell>
                            <StyledTableCell align="center">Shipping Address</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allPurchased.map((product) => (
                            <StyledTableRow key={product._id}>
                                <StyledTableCell component="th" scope="row">
                                    {product.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">${product?.price}</StyledTableCell>
                                <StyledTableCell align="center">{product?.userName}</StyledTableCell>
                                <StyledTableCell align="center">{product?.email}</StyledTableCell>
                                <StyledTableCell align="center">{product?.phone}</StyledTableCell>
                                <StyledTableCell align="center">{product?.address}</StyledTableCell>
                                <StyledTableCell align="center">{product?.status}</StyledTableCell>

                                <StyledTableCell align="center" >

                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                        <Button title="Approve Order" sx={{ color: 'green', fontSize: '1rem' }}
                                            onClick={() => handleUpdateStatus(product?._id)}
                                        >{okIcon}

                                        </Button>


                                        <Button
                                            title="Delete order"
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
            {deleteSuccess && <Alert severity="success">Product deleted successfully !</Alert>} <br />
            {updateStatusSuccess && <Alert severity="success">Product Approved Successfully !</Alert>}
        </div>
    );
};

export default ManageAllOrders;