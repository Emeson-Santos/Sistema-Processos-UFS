import React from 'react';
import ReactDOM from 'react-dom'
import './email.css';
import { FiMail } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';
import emailjs from "emailjs-com";


export default function Email() {

    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_a96cnfh', e.target, 'user_AKO5NRnp5Bf6iePYrQpfL')
            .then((result) => {
                alert("Menságem enviada com sucesso! :) ");
                e.target.reset();
            }, (error) => {
                alert(error.message);
                e.target.reset();
            });
    }
    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Email">
                    <FiMail size={17} />
                </Title>
                <div className="container-email-index">
                    <div className="grid-top">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Fale conosco!</h2>
                            <h3 class="section-subheading text-muted">Responderemos assim que possível.</h3>
                        </div>
                    </div>
                    <form onSubmit={enviarEmail}>
                        <div className="componet-border">
                            <div className="comp-lab-inp">
                                <span className="all">
                                    <label htmlFor="Nome">Nome: </label>
                                    <input type="text" required="Por favor, digite seu nome." name="name" placeholder="Por favor, digite seu nome..." />
                                </span>

                                <span className="all">
                                    <label htmlFor="Email">Email: </label>
                                    <input type="text" name="email" required="Por favor, digite seu e-mail" placeholder="Por favor, digite seu e-mail..." />
                                </span>
                            </div>
                            <div className="comp-msn-textarea">
                                <span className="msn">
                                    <label htmlFor="Mensagem">Mensagem: </label>
                                    <textarea className="text-area" name="message" required="Por favor, digite algo." placeholder="Por favor, escreva algo..." cols="30" rows="10"></textarea>
                                </span>

                            </div>

                        </div>
                        <input type="submit" value="Enviar" />

                    </form>

                </div>

            </div>
        </div>
    )
}