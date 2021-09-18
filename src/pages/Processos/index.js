// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import './processos.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiCoffee, FiChrome, FiList } from 'react-icons/fi';
import axios from 'axios';
import { FaDigitalOcean, FaFileDownload } from 'react-icons/fa';


export default function Processos() {

    const [processos, setProcessos] = useState([]);

    useEffect(() => {

        async function loadProcessos() {
            const response = await api.get('/processos/')
            // console.log(response.data);
            setProcessos(response.data);
        }
        loadProcessos();
    }, []);

    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Processos">
                    <FiList size={17} color='#000' />
                </Title>
                <div className="container dashboard">

                    <div className="lista-processos">
                            
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">HTML</th>
                                            <th scope="col">BPMN</th>
                                            <th scope="col">RESOLUÇÃO</th>
                                            <th scope="col">MANUAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {processos.map((processo) => {
                                            return(
                                                <tr>
                                            <td data-label="Nome">{processo.nome}</td>
                                            <td data-label="HTML">
                                                <a href={processo.html} target="_blank" rel="noreferrer" >
                                                    <button className="action" style={{ backgroundColor: '#3583f6' }} onClick={() => { }}>
                                                        <FiChrome color='#FFF' size={30} />
                                                    </button>
                                                </a>

                                            </td>
                                            <td data-label="BPMN">
                                                <a href={processo.bpmn} target="_blank" rel="noreferrer">
                                                    <button className="action" style={{ backgroundColor: 'orange' }} onClick={() => { }}>
                                                        <FaFileDownload color='#FFF' size={30} />
                                                    </button>
                                                </a>
                                            </td>
                                            <td data-label="Resolucao">
                                                <a href={processo.resolucao} target="_blank"  rel="noreferrer" download={processo.resolucao}>
                                                    <button className="action" style={{ backgroundColor: 'red' }} onClick={() => { }}>
                                                        <FiCoffee color='#FFF' size={30} />
                                                    </button>
                                                </a>
                                            </td>
                                            <td data-label="Manual">
                                                <a href={processo.manual} target="_blank" rel="noreferrer" download={processo.manual}>
                                                    <button className="action" style={{ backgroundColor: 'green' }} onClick={() => { }}>
                                                        <FaDigitalOcean color='#FFF' size={30} />
                                                        
                                                    </button>
                                                </a>
                                            </td>
                                        </tr>
                                            )
                                            
                                        })}
                                        
                                    </tbody>
                                </table>

                            )
                        
                    </div>
                </div>
            </div>
        </div>
    )
}