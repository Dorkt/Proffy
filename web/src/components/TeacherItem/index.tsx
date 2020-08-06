import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/48105857?s=460&u=e786705175d1234b31cf62a8112f69569f36bca3&v=4" alt="Gabriel Duque"/>
                <div>
                    <strong>Gabriel Duque</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Incrivel quimiquisista.
                <br/><br/>
                maoi
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;