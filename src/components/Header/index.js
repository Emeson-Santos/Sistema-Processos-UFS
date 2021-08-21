import React from 'react';
import logoUfs from '../../assets/ufs_logo.png';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import './header.css';

export default function Header(){
    return(
        <div className="sidebar"> 
        <div>          
           <img src={logoUfs} alt="Logo do sistema"/>
        </div>
        <div>
            <Link to="/processos">
                <FiHome color='#FFF' size={24}/>
                Processos
            </Link>
            <Link to="/categoria">
            <FiUser color='#FFF' size={24}/>
                Categoria
            </Link>
            <Link to="desenvolvedores">
            <FiSettings color='#FFF' size={24}/>
                Desenvolvedores
            </Link>
            <Link to="sobre">
            <FiSettings color='#FFF' size={24}/>
                Sobre
            </Link>
            <Link to="contatos">
            <FiSettings color='#FFF' size={24}/>
                Contatos
            </Link>
        </div>

        </div>
    )
}