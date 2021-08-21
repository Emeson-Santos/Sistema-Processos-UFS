// import React, { useState } from 'react';
import './processos.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiTwitch, FiSearch } from 'react-icons/fi';
// import { FiTwitch } from "react-icons/fi";

export default function Processos(){    
    return(
        <div>    
            <Header/>       
             <div className="content">
                 <Title name="Processos">
                    <FiTwitch size={17} color='#000'/>
                 </Title>
                 <div className="container dashboard">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">HTML</th>
                                <th scope="col">BPMN</th>
                                <th scope="col">Resolucao</th>
                                <th scope="col">Manual</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Nome">Processo A</td>
                                <td data-label="HTML">HTML A</td>
                                <td data-label="BPMN">BPMN A</td>
                                <td data-label="Resolucao">Resolução A</td>
                                <td data-label="Manual">
                                    <button className="action" style={{backgroundColor: '#3583f6'}} onClick={()=>{}}>
                                        <FiSearch color='#FFF' size={17}/>
                                        Manual
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             </div>   
        </div>
    )
}