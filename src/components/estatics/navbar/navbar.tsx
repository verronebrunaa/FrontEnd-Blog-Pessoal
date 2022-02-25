import React from 'react';
import { AppBar, Toolbar, Box, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" className='Nav'>

                    <Box className="text-decorator-none" display="flex">
                        <Link to='/home' className='text-decorator-none' >
                            <Box>
                                <Avatar alt="Logo: livro" src='https://cdn-icons.flaticon.com/png/512/4212/premium/4212480.png?token=exp=1645718162~hmac=8a9961bd9ff34a9249ef4be8658130c2' />
                            </Box>
                        </Link>

                        <Box mx={1} display="flex">
                            <Link to="/posts" className="text-decorator-none">
                                <Button variant="outlined">Postagens</Button>
                            </Link>
                        </Box>

                        <Box mx={1} display="flex">
                            <Link to="/temas" className="text-decorator-none">
                                <Button variant="outlined">Temas</Button>
                            </Link>
                        </Box>

                        <Box mx={1} display="flex">
                            <Link to="/cadastrotemas" className="text-decorator-none">
                                <Button variant="outlined">Cadastrar Tema</Button>
                            </Link>
                        </Box>

                        <Box mx={1} display="flex">
                            <Link to="/login" className="text-decorator-none">
                                <Button variant="outlined">Logout</Button>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;