import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Produto.module.css"
import Head from '../Head'

const Produto = () => {
    const [produto, setProduto] = React.useState(null);
    const [load, setLoad] = React.useState(false);

    const { id } = useParams();

    React.useEffect(() => {
        getProduto();
    }, [id]);

    const getProduto = async () => {
        try {
            setLoad(true);
            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
            const data = await response.json();
            setProduto(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoad(false);
        }
    }

    if (load) return <div className="loading"></div>
    if (produto === null) return null;
    return (
        <section className={`${styles.produto} animaLeft`}>
            <Head title={`Ranek | ${produto.nome}`} />
            <div>
                {
                    produto.fotos.map(foto => (
                        <img key={foto.src} src={foto.src} alt={foto.titulo} />
                    ))
                }
            </div>
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p>{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto
