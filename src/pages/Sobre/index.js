import React from 'react';
import './sobre.css';
import Header from '../../components/Header';
import Title from '../../components/Title';

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
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Nossos Humildes Começos.</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Começamos a Idealisação este projeto para fins acadêmicos visando comclusão do curso de sistemas de informação na UFS - Universidade Federal de Sergipe.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Nasce um Projeto</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"> Este projeto visa tornar público todos os processos das chefias da UFS (Universidade Federal de Sergipe). Este trabalho foi executado pelo o departamento de sistemas de informação.</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Transição para projeto completo.</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">De um projeto que era para ser o armazenamento das modelagens BPMNs dos processos das chefias da UFS, ele ficou maior projetando um site para apresentação dos processos modelados em HTML e Bootstrap. </p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020</h4>
                                <h4 class="subheading">Expansão.</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">e para finalizar esta aplicação web é uma melhoria construida em React que está mais amigavel e facil de navegar. Porém continua com o objetivo de publicar não só os processos das chefias mas também foi criados modulos para outras categorias de processos.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                UFS<br />
                                Eu Fiz Parte
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