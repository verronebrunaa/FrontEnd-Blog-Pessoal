import Tema from './Tema'

interface Postagens{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null
}

export default Postagens;