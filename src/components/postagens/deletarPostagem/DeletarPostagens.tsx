import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagens.css';
import Postagens from '../../../models/Postagens';
import { buscaId, deleteId } from '../../../services/Service';
import { useHistory, useParams } from 'react-router-dom';
import { addToken } from '../../store/tokens/actions';

function DeletarPostagens() {
  let history = useHistory();
  const { id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const [post, setPosts] = useState<Postagens>()

  useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history.push("/login")
  
      }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/postagens/${id}`, setPosts, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
          history.push('/posts')
          deleteId(`/postagens/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          alert('Postagem deletada com sucesso');
        }
      
        function nao() {
          history.push('/posts')
        }
return (
  <>
    <Box m={2}>
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography className="textSecondary" gutterBottom>
              Deseja deletar a Postagem:
            </Typography>
            <Typography className="textSecondary" >
            {post?.titulo}
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={sim} variant="contained" className="btsim" size='large'>
              Sim
            </Button>
            </Box>
            <Box>
            <Button  onClick={nao} variant="contained" size='large' className="btnao">
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
export default DeletarPostagens;