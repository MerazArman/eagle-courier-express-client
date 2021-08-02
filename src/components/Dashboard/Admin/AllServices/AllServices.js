import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});




const AllServices = () => {

    const classes = useStyles()
    const [allServices, setAllServices] = useState([]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {
        fetch(`https://calm-hollows-51020.herokuapp.com/showAllServices`)
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])


    const deleteServiceHandler = (serviceId) =>{
        console.log('key', serviceId);
        fetch(`https://calm-hollows-51020.herokuapp.com/deleteService/${serviceId}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert('are you sure you want to delete?')
        })
  }


    // console.log(allServices);
    return (
        <main>
            <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>

            <Paper className={`${classes.root} container`} style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)' }}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                         
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                        />
                                    </TableCell>
                                    <TableCell align="left">Service Name</TableCell>
                                    <TableCell align="left"> Service Type </TableCell>
                                    <TableCell align="left"> Service Category </TableCell>
                                    <TableCell align="center">Id</TableCell>
                                    <TableCell align="left">Update</TableCell>
                                    <TableCell align="left">Delete</TableCell>
                                </TableRow>
         
                        </TableHead>
                        <TableBody>
                            {allServices.map((service) => (
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                        />
                                    </TableCell>
                                    <TableCell align="left"> {service.title}</TableCell>
                                    <TableCell align="left">{service.type}</TableCell>
                                    <TableCell align="left">{service.category}</TableCell>
                                    <TableCell align="left">{service._id}</TableCell>
                                    <TableCell align="center"><AiFillEdit style={{ color: 'green' }}></AiFillEdit></TableCell>
                                    <TableCell align="center"   onClick={() => deleteServiceHandler(service._id)}><AiFillDelete style={{ color: 'red', cursor:'pointer' }}></AiFillDelete></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={allServices.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </main>
    );
};

export default AllServices;






{/* <div className="ml-auto col-lg-9 col-md-8 col-sm-7 col-6 ">
           <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Service Name</th>
                        <th> Service Type </th>
                        <th> Service Category </th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allServices.map(service => <tr>
                            <td>{service._id}</td>
                            <td> {service.title}</td>
                            <td>{service.type}</td>
                            <td>{service.category}</td>
                            <td><AiFillEdit style={{color:'green'}}></AiFillEdit></td>
                            <td><AiFillDelete style={{color:'red'}}></AiFillDelete></td>
                        </tr>)
                    }
                </tbody>
            </table>
           </div> */}











        //    <Paper className={`${classes.root} container  dashboard-container-size`}>
        //         <TableContainer className={classes.container}>
        //             <Table stickyHeader aria-label="sticky table">
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell padding="checkbox">
        //                             <Checkbox
        //                                 inputProps={{ 'aria-label': 'select all desserts' }}
        //                             />
        //                         </TableCell>
        //                         <TableCell align="left">Service Name</TableCell>
        //                         <TableCell align="left"> Service Type </TableCell>
        //                         <TableCell align="left"> Service Category </TableCell>
        //                         <TableCell align="center">Id</TableCell>
        //                         <TableCell align="left">Update</TableCell>
        //                         <TableCell align="left">Delete</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {allServices.map((service) => (
        //                         <TableRow key={service.name}>
        //                             <TableCell padding="checkbox">
        //                                 <Checkbox
        //                                     inputProps={{ 'aria-label': 'select all desserts' }}
        //                                 />
        //                             </TableCell>
        //                             <TableCell align="left"> {service.title}</TableCell>
        //                             <TableCell align="left">{service.type}</TableCell>
        //                             <TableCell align="left">{service.category}</TableCell>
        //                             <TableCell align="left">{service._id}</TableCell>
        //                             <TableCell align="center"><AiFillEdit style={{ color: 'green' }}></AiFillEdit></TableCell>
        //                             <TableCell align="center"><AiFillDelete style={{ color: 'red' }}></AiFillDelete></TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>

        //         </TableContainer>
        //         <TablePagination
        //             rowsPerPageOptions={[10, 25, 100]}
        //             component="div"
        //             count={allServices.length}
        //             rowsPerPage={rowsPerPage}
        //             page={page}
        //             onChangePage={handleChangePage}
        //             onChangeRowsPerPage={handleChangeRowsPerPage}
        //         />
        //     </Paper>
