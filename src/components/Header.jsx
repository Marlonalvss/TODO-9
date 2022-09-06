import React,{useState} from "react";
import { validaEmail } from "./Form-validation/Form-validation";
import marlon from "/Users/Resilia/Desktop/projeto pessoal/projectReact/project-react/src/assets/2.png";


// FUNÇÃO QUE VAI USAR A VALIDAÇÃO DE E-MAIL E CPF. 
//function useValidateR(){
//if(validaEmail)
//}


function Header(){
  const [input , setInput] = useState({})

    return <div className="main">
    <div className="center">
      <div className="menu">
        <div className="logo">
          <img className="logo" src={marlon} alt="foto" />
        </div>
        <div className="organiz">
        <div className="item-menu">
          <a href="#">Produtos</a>
        </div>
        <div className="item-menu">
          <a href="#">Compartilhe</a>
        </div>
        <div className="item-menu">
          <a href="#">Login</a>
        </div>
      </div>
      </div>
      
      <div className="form">
        <form>
          <div className="textT">
          <h2 className="tituloP">Ajude o algorítimo a ser mais certeiro</h2>
          <p className="pTitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus. </p>
          </div>
          <div className="items-form">
            <h2> Entre em contato!</h2>
            <input placeholder="Nome completo" type="text" />
            <input onChange={(e)=> setInput(e.target.value)} placeholder="Digite seu e-mail" type="email" name="" id="" />
            <input placeholder="Digite seu CPF" type="number"/>
            <div className="caixaS">
            <input type="radio" name="radio" />
            <label htmlFor="">Masculino</label>
            <input type="radio" name="radio" />
            <label htmlFor="radio">Feminino</label>
            </div>
            <input type="submit" placeholder="Enviar" />
          </div>
        </form>
      
    </div>
    </div>
   
  </div>
}

export default Header;