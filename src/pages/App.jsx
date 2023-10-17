import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css'

export default function Home() {
    const [personagemList, setPersonagemList] = useState([]);

    useEffect(() => { 
        const fetchPersonagemList = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setPersonagemList(response.data.results);
            } catch (error) {
                console.error('Erro ao buscar a lista:', error);
            }
        }
        fetchPersonagemList();
    }, []);

    return (
        <div className='container'>
            {personagemList.map((personagem, index) => (
                <Link to={`/personagem/${personagem.id}`}>
                    <div key={index} className='personagem-card'>
                        <img
                          className="img"  
                          src={personagem.image}
                          alt={`Imagem de ${personagem.name}`}
                        />
                        <h2>{personagem.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

        
     

    


