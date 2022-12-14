import React from "react";
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

function Footer() {

  return <footer className="cont2">
    <form className="fFooter">
      <p className="pFooter">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <div className="fOrganiza">
        <input className="fName" type="text" placeholder="Nome Completo" name="nome" />
        <input className="fEmail" type="email" placeholder="Insira seu e-mail" name="email_usuario" />
      </div>
      <button className="fSubmit">Enviar agora</button>
      <p className="p2Footer">Testando suas habilidades em HTML, CSS e JS. Resilia 2022</p>
      <div>
      <a href="https://www.linkedin.com/in/marlon-alvss/"><img src={linkedin} alt="linkedin" /></a>
      <a href="https://github.com/Marlonalvss"><img src={github} alt="github" /></a>
      </div>
    </form>
  </footer>
}

export default Footer