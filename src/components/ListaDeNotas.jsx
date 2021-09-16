import React, { Component } from "react"

export default class ListaDeNotas extends Component {

    //Precisa ter o render para renderizar a página
    render() {
        return (
            <ul>
                <li>
                    <section>
                        <header>
                            <h3>Título</h3>
                        </header>
                        <p>Escreva sua nota</p>
                    </section>
                </li>
                <li>
                    <section>
                        <header>
                            <h3>Título</h3>
                        </header>
                        <p>Escreva sua nota</p>
                    </section>
                </li>
            </ul>
        );
    }

}