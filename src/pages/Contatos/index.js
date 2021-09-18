import React from 'react';
import './contato.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import imgEmeson from '../../assets/img-Desenvolvedores/Emeson.png';
import imgPauloVitor from '../../assets/img-Desenvolvedores/Paulo vitor.png';
import imgDosea from '../../assets/img-Desenvolvedores/prof Dosea.png';
import imgRaphael from '../../assets/img-Desenvolvedores/prof Raphael.png';



import { FiMail } from 'react-icons/fi';
import "./contato.css";

export default function Contato(){

  
    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Contatos">
                    <FiMail size={23} />
                </Title>
                    <div className="container">
                        <div>
                            <h2 className="text-uppercase">Olá! com quem deseja falar?</h2>
                            <h3 className="text-muted"><i>Podemos te ajudar em algo?</i></h3>
                        </div>
                        
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgEmeson} alt="dev Emeson"/>
                                {/* o nome do dev */}
                                <h4>Emeson Santos</h4>
                                <p className="text-muted">Front-End</p>
                                    <Link to="/email" >
                                        <span>
                                            <FiMail size={20} />
                                        </span>
                                    </Link>                                   
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgPauloVitor} alt="dev Paulo Vitor"/>
                                {/* o nome do dev */}
                                <h4>Paulo Vitor dos Santos</h4>
                                <p className="text-muted">Back-End</p>
                                    <Link to="/emailPauloVitor">
                                        <span>
                                            <FiMail size={20}/>
                                        </span>
                                    </Link>                                    
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgDosea} alt="orientador Dosea"/>
                                {/* o nome do dev */}
                                <h4>Prof. Dr. Marcos Dósea</h4>
                                <p className="text-muted">Oriêntador</p>
                                    <Link to="/emailDosea">
                                        <span>
                                            <FiMail size={20}/>
                                        </span>
                                    </Link>                                   
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgRaphael} alt="Orientador Raphael"/>
                                {/* o nome do dev */}
                                <h4>Prof. Dr. Raphael Pereira</h4>
                                <p className="text-muted">Orientador</p>
                                    <Link to="/emailRaphael">
                                        <span>
                                            <FiMail size={20}/>
                                        </span>
                                    </Link>                                  
                            </div>
                            
                        </div>

                        </div>
                    </div>
            </div>
        </div>
    )
}