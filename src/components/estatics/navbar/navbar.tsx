import React from 'react';
import { AppBar, Toolbar, Box, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static" >
            <Toolbar variant="dense" className='Nav'>

                <Box display="flex">
                    <Link to='/home' className='text-decorator-none' >
                        <Box>
                            <Avatar alt="Logo: livro" src='https://i.imgur.com/5lzLeX5.png' />
                        </Box>
                    </Link>

                    <Box mx={1} display="flex">
                        <Link to="/posts" className="text-decorator-none">
                            <Button className="botaonav" variant="outlined">Postagens</Button>
                        </Link>
                    </Box>

                    <Box mx={1} display="flex">
                        <Link to="/temas" className="text-decorator-none">
                            <Button className="botaonav" variant="outlined">Temas</Button>
                        </Link>
                    </Box>

                    <Box mx={1} display="flex">
                        <Link to="/formularioTemas" className="text-decorator-none">
                            <Button className="botaonav" variant="outlined">Cadastrar Tema</Button>
                        </Link>
                    </Box>

                    <Box mx={1} className="botaonav" onClick={goLogout}>
                        <Button className="botaonav" variant="outlined"> Logout </Button>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;