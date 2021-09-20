import React from 'react';
import './sobre.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Comeco from '../../assets/img-Sobre/1.png';
import Nascimento from '../../assets/img-Sobre/2.png';
import Transicao from '../../assets/img-Sobre/3.png';
import Expancao from '../../assets/img-Sobre/4.png';


export default function Sobre(){
    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Sobre">

                </Title>             
                    
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Sobre</h2>
                    <h3 class="section-subheading text-muted">Como chegamos até aqui.</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={Comeco} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Nossos Humildes Começos.</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Começamos a Idealisação este projeto para fins acadêmicos visando comclusão do curso de sistemas de informação na UFS - Universidade Federal de Sergipe.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={Nascimento} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Nasce um Projeto</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"> Este projeto visa tornar público todos os processos das chefias da UFS (Universidade Federal de Sergipe). Este trabalho foi executado pelo o departamento de sistemas de informação.</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={Transicao} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Transição para projeto completo.</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">De um projeto que era para ser o armazenamento das modelagens BPMNs dos processos das chefias da UFS, ele ficou maior projetando um site para apresentação dos processos modelados em HTML e Bootstrap. </p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={Expancao} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Expansão.</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">E para finalizar, esta aplicação web é uma melhoria construída em React que está mais amigável e facil de navegar. Porém continua com o mesmo objetivo de publicar não só os processos das chefias mas também foi criados modulos para outras categorias de processos futuramente.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4 className="ufs">
                                UFS<br />
                                Eu Faço Parte
                                <br />
                                Dessa História.
                            </h4>
                        </div>
                    </li>
                </ul>
            </div> 
        </div>
    </div>
    )
       
}