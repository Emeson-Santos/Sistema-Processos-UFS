import React from 'react';
import { FiMail } from 'react-icons/fi';
 import Header from '../../components/Header';
import Title from '../../components/Title';
import emailjs from "emailjs-com";

import './email.css';


export default function Email(){   

  function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_a96cnfh', e.target, 'user_AKO5NRnp5Bf6iePYrQpfL')
      .then((result) => {
          alert("Menságem enviada com sucesso! :) ");
      }, (error) => {
          alert(error.message);
          e.target.reset();
      });
  }
    return(
        <div>
            <Header/>
            <div className="content">
                    <Title name="Email">
                        <FiMail size={17}/>
                    </Title>
                <div className="container-container">
                {/* method = " POST " action = " mailto: esodegemeos@gmail.com " */}
                   <form onSubmit={enviarEmail}>
                        <label htmlFor="Nome">Nome: </label>
                        <input type="text" name="name" placeholder="Por favor, digite seu nome..."/>

                        <label htmlFor="Email">Email: </label>
                        <input type="text" name="email" placeholder="E-mail de destino..." />
                            
                            
                        {/* <label htmlFor="anexo">Anexo</label>
                        <input type="file" id="anexo" name="anexo" /> */}
                                    
                        <label htmlFor="Mensagem">Mensagem: </label>
                        <textarea className="text-area" name="message" placeholder="Por favor, escreva algo..." cols="30" rows="10"></textarea>
                                        
                        <input type="submit" value="Enviar" />
                   </form>

                </div>

            </div>
        </div>
    )
}