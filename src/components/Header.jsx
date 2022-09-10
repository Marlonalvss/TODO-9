import React, { useState } from "react";
import { validaCpf, validateEmail } from "./Form-validation/Form-validation.jsx";
import marlon from "/src/assets/2.png";


function Header() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  console.log(email)

  function checkInput(event) {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("E-mail invalido! Por favor insira um e-mail valido.")
      return

    } if (!validaCpf(cpf)) {
      alert("Numero de cpf incorreto! Por favor insira um cpf valido.")
      return
    }
    alert("Cadastro feito com sucesso")

    window.location.reload()
  }

  return <header className="main">
    <div className="center">
      <div className="menu">
        <div className="logo">
          <img className="logo" src={marlon} alt="foto" />
        </div>
        <nav>
          <ul className="organiz">
            <li className="item-menu">
              <a href="#">Produtos</a>
            </li>
            <li className="item-menu">
              <a href="#">Compartilhe</a>
            </li>
            <li className="item-menu">
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="form">
        <form onSubmit={checkInput}>
          <div className="textT">
            <h2 className="tituloP">Ajude o algorítimo a ser mais certeiro</h2>
            <p className="pTitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus. </p>
          </div>
          <div className="items-form">
            <h2> Entre em contato!</h2>
            <input required placeholder="Nome completo" type="text" />
            <label htmlFor="email"></label>
            <input required onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" type="text" id="email" value={email} />
            <input required onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF" type="number" />
            <div className="caixaS">
              <input required type="radio" name="radio" />
              <label htmlFor="">Masculino</label>
              <input type="radio" name="radio" />
              <label htmlFor="radio">Feminino</label>
            </div>
            <input type="submit" placeholder="Enviar" />
          </div>
        </form>

      </div>
    </div>

  </header>
}

export default Header;