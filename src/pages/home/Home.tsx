import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagens from '../../components/postagens/tabpostagens/TabPostagens';
import ModalPostagens from '../../components/postagens/modalPostagens/ModalPostagens'
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado!' , {
            position: 'top-right',
            autoClose: 2000, 
            hideProgressBar: false, 
            closeOnClick: true,
            pauseOnHover: false, 
            draggable: false, 
            theme: 'colored', 
            progress: undefined
        });  
          history.push("/login")
  
      }
  }, [token])
  
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='text'>Esta  é uma rede social é para amantes de livros!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagens />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'> Ver postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4584/4584340.png" alt="" width="280px" height="280px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagens />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;