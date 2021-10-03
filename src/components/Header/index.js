import React from 'react';
import logoUfs from '../../assets/ufs_logo.png';
import { Link } from 'react-router-dom';
import { FiUser, FiGrid, FiInfo, FiMail } from "react-icons/fi";
import { FaTable } from "react-icons/fa";
// import MobileNavbar from '../Header/mobile-navbar';

import './header.css';

export default function Header() {


    // const [active, setMode] = useState(false);

    // const TogleMode = () => {
    //     setMode(!active);
    // };


    return (
        <div className="sidebar">

            {/* <div className={active ? "icon iconActive" : "icon"} onclick={TogleMode}>
                <div className='hamburguer hamburguerIcon'></div>
            </div> */}

            {/* <div className={active ? "menu menuOpen" : "menu menuClose"}> */}
            <div>
                {/* <div className="list"> */}
                {/* <ul className="listItens"> */}
                <nav>
                    <div>
                        <img src={logoUfs} alt="Logo do sistema" />
                    </div>
                    <div className="mobile-menu"> {/*onClick={MobileNavbar}*/}
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div> 
                    </div>
                    <ul className="nav-list">
                        <li>
                            <Link to="/categoria">
                                <FiGrid color='#FFF' size={24} />
                                Categoria
                            </Link>
                        </li>
                        <li>
                            <Link to="/processos">
                                <FaTable color='#FFF' size={24} />
                                Processos
                            </Link>
                        </li>
                        <li>
                            <Link to="desenvolvedores">
                                <FiUser color='#FFF' size={24} />
                                Desenvolvedores
                            </Link>
                        </li>
                        <li>
                            <Link to="sobre">
                                <FiInfo color='#FFF' size={24} />
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="contatos">
                                <FiMail color='#FFF' size={24} />
                                Contatos
                            </Link>
                        </li>

                    </ul>









                </nav>

                {/* </ul> */}
                {/* </div> */}
            </div>

        </div>
    )
}