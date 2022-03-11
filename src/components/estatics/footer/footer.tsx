import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './footer.css'

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== "") {
        footerComponent = <Grid container spacing={2} alignItems="center" justify-content="center" className='footer'>
            <Grid alignItems="center" item xs={3}>
                <Box paddingLeft={13} paddingTop={4}>
                    <img src={"https://i.imgur.com/5lzLeX5.png"} alt="20%" width="45%" height="auto" />
                </Box>
            </Grid>

            <Grid alignItems="center" item xs={3}>
                <Box className='textofooter' alignItems="center" justify-content="center" >
                    <Typography variant="subtitle2">Entre em contato conosco através do email:</Typography>
                    <a href="mailto:verronebruna@gmail.com" target="_blank">
                        <EmailIcon className='redes' />
                    </a>
                    <Typography variant="subtitle2"> Acesse nossas redes sociais:</Typography>
                    <a href="https://www.facebook.com/verronebru" target="_blank">
                        <FacebookIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com/verronebru" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/bruna-verrone/" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Box>
            </Grid>

            <Grid alignItems="center" item xs={3}>
                <Box className='textofooter'>
                    <Typography variant="subtitle2">Projeto realizado durante o</Typography>
                    <Typography variant="subtitle2">Bootcamp da Generation Brasil</Typography>
                </Box>
            </Grid>

            <Grid alignItems="center" item xs={3}>
                <Box className='textofooter'>
                    <Typography variant="subtitle2">© 2022 Copyright: BookGram |</Typography>
                    <Typography variant="subtitle2">GENERATION BRASIL</Typography>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;