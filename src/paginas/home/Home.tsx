import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='text'>Esta rede social é para amantes de livros!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Posts</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4584/4584340.png" alt="" width="280px" height="280px" />
                </Grid>
                <Grid xs={12} className='postagem'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;