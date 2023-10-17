import { useParams } from "react-router-dom"
import React, { useState } from 'react';
import './Personagens.css';
import axios from "axios";

export default function Personagem() {
    const [requisicao, setRequisicao] = useState();
    const { idDoPersonagem } = useParams();
    const buscarPersonagem = async () => {
        const resultado = await axios.get(`https://rickandmortyapi.com/api/character/${idDoPersonagem}`)
        setRequisicao(resultado.data);
        console.log (requisicao)
    }
    buscarPersonagem()

    return (
        <div className='container-personagem'>
            <div className='title-card'>
                <a>{idDoPersonagem}</a>
                <img
                    src={requisicao?.image}
                    alt={`Imagem de ${idDoPersonagem}`}
                />
      
         
            </div>
        </div>
    )
}

