import React, { Link } from 'react-router-dom';
import './home.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import chefiasProcessos from '../../assets/fluxograma-online.jpg';
import graduacaoProcessos from '../../assets/process-accept-icon.png';
import mestradoProcessos from '../../assets/process-accept-icon.png';
import posGraduacao from '../../assets/process-accept-icon.png';
import doutorado from '../../assets/process-accept-icon.png';
// import notify from '../../pages/Notify';
// import {toast} from 'react-toastify';

import { FiInfo } from "react-icons/fi";

export default function Home(){

// const notifY = ()=> toast.info('Modulo ainda em contrução!!!');

    return(
        <div>
            <Header/>

            {/* <h1>Estes são os desenvolvedores:</h1>
            <h2>colocar a imagem de cada um redonda</h2>
            <h3>colocar nome, email, facebook e titwer</h3> */}
            <div className="content">
                <Title name="Categorias">                 
                   <FiInfo size={17} color='#000'/>                   
                </Title>

                <div className="container">

                    <div className="text-center">
                            <h2 className="text-uppercase">Categorias</h2>
                            <h3 className="text-muted"><i>Selecione uma das categorias</i></h3>
                    </div>

                    {/* agora clocar imagens nomes dos envolvidos no time e redes sociais */}

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="categorias">
                                {/* inserir a imagem */}
                                <img src={chefiasProcessos} alt="processos chefias"/>
                                {/* o nome do dev */}
                                <Link to="/processos">
                                <h4>Chefias departamentais</h4>
                                </Link>                                
                               
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="categorias" >
                                {/* inserir a imagem */}
                                <img src={graduacaoProcessos} alt="processos graduacao"/>
                                {/* o nome do dev */}
                                <Link to="/notify" >                                    
                                    <h4>Graduação</h4> 
                                </Link>
                                
                                                              
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="categorias">
                                {/* inserir a imagem */}
                                <img src={posGraduacao} alt="processos de pos graduação"/>
                                {/* o nome do dev */}
                                <Link to="/notify">
                                    <h4>Pós graduação</h4>
                                </Link>                               
                               
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="categorias">
                                {/* inserir a imagem */}
                                <img src={mestradoProcessos} alt="processos de mestrado"/>
                                {/* o nome do dev */}
                                <Link to="/notify">
                                <h4>Mestrado</h4>
                                </Link>
                                
                               
                            </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="categorias">
                                    {/* inserir a imagem */}
                                    <img src={doutorado} alt="processos de mestrado"/>
                                    {/* o nome do dev */}
                                    <Link to="/notify">
                                    <h4>Doutorado</h4>
                                    </Link>
                                    
                                   
                                </div>
                            
                            </div>
                        {/* <div className="rodape">
                            <h4><p>"Aquele que ama ou exerce ou deseja a dor, pode ocasionalmente adquirir algum prazer na labuta. Para dar um exemplo trivial, qual de nós se submete ao laborioso exercício físico, exceto para obter alguma vantagem com isso." </p></h4>
                        </div> */}

                    </div>                    

                </div>

            </div>

        </div>
    )
}