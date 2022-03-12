import Tema from './Tema'

interface Postagens{
    foto: unknown;
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null
}

export default Postagens;