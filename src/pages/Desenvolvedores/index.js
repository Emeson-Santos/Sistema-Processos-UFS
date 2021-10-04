import React from 'react';
// import { Link } from 'react-router-dom';
import './dev.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiFacebook, FiInfo, FiLinkedin, FiTwitter } from "react-icons/fi";
import imgEmeson from '../../assets/img-Desenvolvedores/Emeson.png';
import imgPauloVitor from '../../assets/img-Desenvolvedores/Paulo vitor.png';
import imgDosea from '../../assets/img-Desenvolvedores/prof Dosea.png';
import imgRaphael from '../../assets/img-Desenvolvedores/prof Raphael.png';

export default function Desenvolvedores(){
//     const [devListaImagem, setDevListaImagem] = useState(['img 0', 'img 1', 'img 2', 'img 3']);

// function chamaLista(){
//     console.log(devListaImagem);
// }

    return(
        <div>
            <Header/>

            {/* <h1>Estes são os desenvolvedores:</h1>
            <h2>colocar a imagem de cada um redonda</h2>
            <h3>colocar nome, email, facebook e titwer</h3> */}
            <div className="content">
                <Title name="Desenvolvedores">
                 
                   <FiInfo size={17} color='#000'/>
                   
                </Title>

                <div className="container">

                    <div className="text-center">
                            <h2 className="text-uppercase">Este é o Meu Time</h2>
                            <h3 className="text-muted"><i>"Uma mente que se abre a uma nova ideia, jamais voltará ao seu tamanho original." Albert Einstein.</i></h3>
                            <h3><i></i></h3>
                    </div>

                    {/* agora clocar imagens nomes dos envolvidos no time e redes sociais */}

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgEmeson} alt="dev Emeson"/>
                                {/* o nome do dev */}
                                <h4>Emeson Santos de Oliveira</h4>
                                <p className="text-muted">Desenvolvedor</p>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Emesoneso">
                                        <span>
                                            <FiTwitter size={20}/>
                                        </span> 
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/emeson.santos.3">
                                        <span>
                                            <FiFacebook size={20}/>
                                        </span> 
                                    </a>                                     
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/emesonsantosti/">
                                        <span>
                                        <FiLinkedin size={20}/>
                                        </span> 
                                    </a>   
                                   
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgPauloVitor} alt="dev Paulo Vitor"/>
                                {/* o nome do dev */}
                                <h4>Paulo Vitor dos Santos</h4>
                                <p className="text-muted">Desenvolvedor</p>
                                
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/vitinho_ribas">
                                        <span>
                                            <FiTwitter size={20}/>
                                        </span> 
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pazhy">
                                        <span>
                                            <FiFacebook size={20}/>
                                        </span> 
                                    </a>                                     
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paulo-vitor-dos-santos-felipe-8298a8167/">
                                        <span>
                                        <FiLinkedin size={20}/>
                                        </span> 
                                    </a>   
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgDosea} alt="orientador Dosea"/>
                                {/* o nome do dev */}
                                <h4>Prof. Dr. Marcos Dósea</h4>
                                <p className="text-muted">Orientador</p>
                               
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/marcosdosea">
                                        <span>
                                            <FiTwitter size={20}/>
                                        </span> 
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/marcos.dosea">
                                        <span>
                                            <FiFacebook size={20}/>
                                        </span> 
                                    </a>                                     
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marcos-dosea-48485817/">
                                        <span>
                                        <FiLinkedin size={20}/>
                                        </span> 
                                    </a>   
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                {/* inserir a imagem */}
                                <img src={imgRaphael} alt="Orientador Raphael"/>
                                {/* o nome do dev */}
                                <h4>Prof. Dr. Raphael Pereira</h4>
                                <p className="text-muted">Orientador</p>
                                
                                    {/* <a target="_blank" rel="noreferrer" href="/#">
                                        <span>
                                            <FiTwitter size={20}/>
                                        </span> 
                                    </a> */}
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/raphaelcomputacao">
                                        <span>
                                            <FiFacebook size={20}/>
                                        </span> 
                                    </a>                                     
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/raphaeloliveiraifs/">
                                        <span>
                                        <FiLinkedin size={20}/>
                                        </span> 
                                    </a>   
                            </div>
                            
                        </div>
                        <div className="rodape">
                            <h3 className="text-muted"><i>"É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso." Bill Gates.</i></h3>
                        </div>

                    </div>                    

                </div>

            </div>

        </div>
    )
}

