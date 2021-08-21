import React, {useState } from 'react';
import './dev.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiInfo } from "react-icons/fi";
import img1 from '../../assets/icons8-livros-50.png';
import img2 from '../../assets/icons8-livros-50.png';
import img3 from '../../assets/icons8-livros-50.png';
import img4 from '../../assets/icons8-livros-50.png';

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
                    <FiInfo size={17}/>
                </Title>

                <div className="container">
                    <div className="image-dev">

                        <img src={img1} alt="img do dev 0"/>
                        <img src={img2} alt="img do dev 0"/>
                        <img src={img3} alt="img do dev 0"/>
                        <img src={img4} alt="img do dev 0"/>

                        {/* <button onClick={chamaLista}>BTN</button> */}
                    </div>

                </div>

            </div>

        </div>
    )
}

