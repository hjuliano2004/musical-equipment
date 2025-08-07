import React from "react";
import style from "./Cards.module.css";

export function Cards({lista}){

    return (

        <>
        <h1>Lista de instrumentos</h1>
        <section className={style.section}>
            
            {lista.map((item)=>{
                return (
                    <div className={style.card} key={item.id}>
                        <h3>{item.nome}</h3>
                        <ul>
                            <li>Tipo:    <spam>{item.tipo}</spam></li>
                            <li>Marca:   <spam>{item.marca}</spam></li>
                            <li>Voltagem:<spam>{item.voltagem}</spam></li>
                            <li>Ano:     <spam>{item.ano}</spam></li>
                            <li>Preço:   <spam>R${" "}{item.preco}</spam></li>
                            <li>Peso:    <spam>{item.tipo}</spam></li>
                            <li>Status:  <spam className="status"></spam></li>
                        </ul>
                    </div>
                )
            })}
            {status(lista)}
        </section>
        
        </>
    )}


function status(lista){

    let spam = document.getElementsByClassName("status");

    for(let i=0;i<spam.length;i++){
        if(lista[i].ativo){
            spam[i].textContent = "Ativo";
            spam[i].style.color ="green";
        }else{
            spam[i].textContent = "Inativo";
            spam[i].style.color ="red";
        }

        spam[i].style.fontWeight = "bold";
    }
}