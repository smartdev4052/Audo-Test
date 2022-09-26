import useFetch from "../api/useFetch";
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

import { useNavigate } from "react-router-dom";

import { POKEMON_URL } from "../constants";
import './style.css';

const GalleryList = ({
    setPictures
}) => {
    const data = useFetch(POKEMON_URL);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    let navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    useEffect(() => {
        if(data) {
            setPictures(data.slice(page*rowsPerPage, (page + 1)*rowsPerPage));
        }
    }, [data]);
    if (!data) {
        return (
            <>
                Loading...
            </>
        )
    }

    const pictures = data.slice(page*rowsPerPage, (page + 1)*rowsPerPage);
    
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Picture</TableCell>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pictures.map((row) => (
                            <TableRow
                                key={row.id}
                                onClick={() => navigate(`/detail/${row.id}`)}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.picture}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default GalleryList;