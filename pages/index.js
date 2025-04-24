import {useState} from 'react';
import Link from 'next/link';

function Home(){
    return <div>
                <h2>Home teste</h2>
                <Contador />

                <a href="/sobre">Acesse a Página 'Sobre'</a>
                <a href="/contato">Acesse a Página 'Contato'</a>
            </div>
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador +1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Home