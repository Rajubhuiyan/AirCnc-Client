import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Shared/Navbar/Loader/Loader';

const ReservedDataMain = () => {


    const navigate = useNavigate();

    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    const [reservedData, setReservedData] = useState([]);

    useEffect(() => {
        fetch(`https://aircnc00.herokuapp.com/getReserved?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReservedData(data);
                setIsLoading(false)
            })
            .catch(err => console.error(err))

    }, [])

    if (user.email === undefined) {
        navigate('/login')
    }

    return (
        <Container sx={{ mt: 6 }}>

            {isLoading ? <Loader /> :
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Hotel Name</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="right">Total Night</TableCell>
                                <TableCell align="right">Total Price</TableCell>
                                <TableCell align="right">Check In</TableCell>
                                <TableCell align="right">Check Out</TableCell>
                                <TableCell align="right">Payment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reservedData.map((row) => (

                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.reservedInfo.hotelName}
                                    </TableCell>
                                    <TableCell sx={{ textTransform: 'uppercase' }} align="right">{row.reservedInfo.location}</TableCell>
                                    <TableCell align="right">{row.reservedInfo.totalNight} Days</TableCell>
                                    <TableCell align="center">$ {row.reservedInfo.totalPrice}</TableCell>
                                    <TableCell align="right">{row.reservedInfo.fromDate}</TableCell>
                                    <TableCell align="right">{row.reservedInfo.toDate}</TableCell>
                                    <TableCell align="right">{row.payment === 'Success' ? 'Success' : <Link style={{ textDecoration: "none" }} to={`/review/${row._id}`}><Button className="reserve-button">Payment</Button></Link>}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </Container>
    );
};

export default ReservedDataMain;