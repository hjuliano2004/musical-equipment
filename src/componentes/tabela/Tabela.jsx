import styles from './tabela.module.css';

export function Tabela({lista}){

    return (
        <section className={styles.section}>
        <h1>Lista de Instrumentos</h1>
        <article className={styles.container}>
        <div className={styles.celula}>Nome</div>
        <div className={styles.celula}>Tipo</div>
        <div className={styles.celula}>Marca</div>
        <div className={styles.celula}>Voltagem</div>
        <div className={styles.celula}>Ano</div>
        <div className={styles.celula}>Preço (R$)</div>
        <div className={styles.celula}>Peso (Kg)</div>
        <div className={styles.celula}>Status</div>
        </article>

 
    
    {lista.map((item)=>{
        return (
            <article className={styles.container} key={lista[0].id} >
                    <div className={styles.item}>{item.nome}</div>
                    <div className={styles.item}>{item.tipo}</div>
                    <div className={styles.item}>{item.marca}</div>
                    <div className={styles.item}>{item.voltagem}</div>
                    <div className={styles.item}>{item.ano}</div>
                    <div className={styles.item}>{item.preco}</div>
                    <div className={styles.item}>{item.peso_kg}</div>
                    <div className={styles.item}>{JSON.stringify(item.ativo)}</div>
                </article>
        )
    })}
    
    </section>
    )
}