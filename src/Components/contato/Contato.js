import React from "react"
import styles from "./Contato.module.css"
import foto from "../../img/contato.jpg"
import Head from "../Head"

const Contato = () => {
    return (
        <section className={`${styles.contato} animaLeft`}>
            <Head title="Ranek | Contato" />

            <img src={foto} alt="Máquina de escrever" />
            <div>
                <h1>Entre em Contato.</h1>
                <ul className={styles.dados}>
                    <li>robertofeitosa06@gmail.com</li>
                    <li>99999-9999</li>
                    <li>Rua Ali perto, 999</li>
                </ul>
            </div>
            <h1>Contato</h1>
        </section>
    )
}

export default Contato;