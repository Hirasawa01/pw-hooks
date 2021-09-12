import './UseState.css'
import React, { useState, useContext } from 'react'
import { AppContexto } from '../../data/Store'

const UseState = props => {
    const { contextoNome, setContextoNome } = useContext(AppContexto)

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [mensagem, setMensagem] = useState('')

    return (
        <div>
            <div className="titulo">
                <h1>useState</h1>
                <h3>Manipula Estados em componentes funcionais</h3>
            </div>

            <div className="conteudo">
                <input 
                    className="campo"
                    type="text" value={nome}
                    placeholder="Digite seu nome"
                    onChange={e => setNome(e.target.value)}
                />
                <input
                    className="campo"
                    type="text"
                    value={sobrenome}
                    placeholder="Digite seu sobrenome"
                    onChange={e => setSobrenome(e.target.value)}
                />
                <button
                    className="botao"
                    onClick={() => {
                        if (nome === '' || sobrenome === '') {
                            alert('Preencha todos os campos!')
                        } else {
                           setMensagem(`Olá ${nome} ${sobrenome}, seja bem-vindo!`)
                        }
                        }
                    }
                >OK</button>

                <p className="campo">{mensagem}</p>

                <button
                    className="botao"
                    onClick={() => setContextoNome(nome)}
                >
                    Altera contexto (Store)
                </button>
            </div>
        </div>
    )
}

export default UseState