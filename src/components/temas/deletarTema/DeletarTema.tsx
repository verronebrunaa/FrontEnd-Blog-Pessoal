import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useHistory, useParams } from 'react-router-dom';
import { addToken } from '../../store/tokens/actions';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useDispatch } from 'react-redux';


function DeletarTema() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const [token, setToken] = useState(' ');
    const [tema, setTema] = useState<Tema>()

    useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token))
                    history.push('/home')
                }
            }, [token])
    
    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history.push('/temas')
            deleteId(`/temas/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Tema deletado com sucesso');
          }
        
          function nao() {
            history.push('/temas')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" size='large'className='sim'>
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' className='nao'>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;