import React from "react";

export default function Main(props){
    
    return <main className="conteudo">
    <section className="center">{props.conteudo()} 
    <button className="botaoMostra" onClick={showMore}>Ainda mais produtos aqui!</button>
    </section>
  </main>
}

