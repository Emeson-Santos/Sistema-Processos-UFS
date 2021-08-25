import React from 'react';
import logoUfs from '../../assets/ufs_logo.png';
import { Link } from 'react-router-dom';
import { FiUser, FiGrid, FiInfo, FiMail } from "react-icons/fi";
import { FaTable } from "react-icons/fa"

import './header.css';

export default function Header(){
    return(
        <div className="sidebar"> 
        <div>          
           <img src={logoUfs} alt="Logo do sistema"/>
        </div>
        <div>
            <Link to="/categoria">
                <FiGrid color='#FFF' size={24}/>                
                Categoria
            </Link>
                <Link to="/processos">
                <FaTable color='#FFF' size={24}/>
                Processos
            </Link>            
            <Link to="desenvolvedores">
                <FiUser color='#FFF' size={24}/>
                Desenvolvedores
            </Link>
            <Link to="sobre">
                <FiInfo color='#FFF' size={24}/>
                Sobre
            </Link>
            <Link to="contatos">
                <FiMail color='#FFF' size={24}/>
                Contatos
            </Link>
        </div>

        </div>
    )
}