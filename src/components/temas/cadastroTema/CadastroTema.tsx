import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useHistory, useParams } from 'react-router-dom'
import './CadastroTema.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';


function CadastroTema() {
    let history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useState(' ');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

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

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema " + JSON.stringify(tema))
    
            if (id !== undefined) {
                console.log(tema)
                put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');
            } else {
                post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso');
            }
            back()
    
        }
    
        function back() {
            history.push('/temas')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" className="textform" component="h1" align="center" >Cadastro de tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='finalizar'>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;