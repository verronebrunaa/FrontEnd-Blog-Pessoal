import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { addToken } from '../../store/tokens/actions';
import Postagens from '../../../models/Postagens';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {
        let history = useHistory();
        const { id } = useParams<{ id: string }>();
        const [temas, setTemas] = useState<Tema[]>([])
        const dispatch = useDispatch();
        const [token, setToken] = useState(' ');
    
        useEffect(() => {
            if (token == "") {
                alert("Você precisa estar logado!")
                dispatch(addToken(token))
                history.push("/login")
    
            }
        }, [token])
    
        const [tema, setTema] = useState<Tema>(
            {
                id: 0,
                descricao: ''
            })
        const [postagem, setPostagem] = useState<Postagens>({
            id: 0,
            titulo: '',
            texto: '',
            tema: null
        })
    
        useEffect(() => { 
            setPostagem({
                ...postagem,
                tema: tema
            })
        }, [tema])
    
        useEffect(() => {
            getTemas()
             if (id !== undefined) {
                findByIdPostagem(id)
            }
        }, [id])
    
        async function getTemas() {
            await busca(`/temas`, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
        }
    
        async function findByIdPostagem(id: string) {
            await buscaId(`postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        }
    
        function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    
            setPostagem({
                ...postagem,
                [e.target.name]: e.target.value,
                tema: tema
            })
    
        }
    
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
    
            if (id !== undefined) {
                put(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Postagem atualizada com sucesso!');
            } else {
                post(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Postagem cadastrada com sucesso!');
            }
            back()
    
        }
    
        function back() {
            history.push('/posts')
        }

    return (
        <Container maxWidth="sm" className="topo">
            <form  onSubmit={onSubmit}>
                <Typography variant="h3" className="formulario"component="h1" align="center" >Cadastro de postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel className="temas" id="demo-simple-select-helper-label">Temas </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" className="finalizar">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;