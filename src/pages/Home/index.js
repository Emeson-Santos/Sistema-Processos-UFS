import React, { Link } from 'react-router-dom';
import './home.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import chefiasProcessos from '../../assets/fluxograma-online.jpg';
import graduacaoProcessos from '../../assets/process-accept-icon.png';
import mestradoProcessos from '../../assets/process-accept-icon.png';


import { FiSettings } from "react-icons/fi";

export default function Home(){
    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Minhas categorias">
                <FiSettings size={25} />
                </Title>

                <div className="container">
                    <div className="container-center">
                        <article key="id">
                            {/* <strong>Categoria Chefias</strong> */}
                                <img src={chefiasProcessos} alt="Processos para a categoria de chefias departamentais" />
                                <Link to="/processos" >Chefias</Link>                            
                        </article> 
                        <article key="id">
                            {/* <strong>Categoria Chefias</strong> */}
                            <img src={graduacaoProcessos} alt="Processos para a categoria de graduação" />
                                <Link to="#" >Gaduação</Link>                             
                        </article> 
                        <article key="id">
                            {/* <strong>Categoria Chefias</strong> */}
                            <img src={mestradoProcessos} alt="Processos para a categoria de mestrado" />
                                <Link to="/#">Mestrado</Link>
                                                             
                        </article>                              
                    </div>
                        
                   </div>
                </div>

            </div>
        
    )
}