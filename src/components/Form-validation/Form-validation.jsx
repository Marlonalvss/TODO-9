import React from "react";


// CRIANDO UMA VALIDAÇÃO PARA O E-MAIL E EXPORTANDO ELE. 
export function validaEmail(email){
email.toLowerCase().match(/^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/)

}
// CRIANDO UMA VALIDAÇÃO PARA O CPF E EXPORTANDO ELE. 
export function validaCpf(cpf){

cpf.match(/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/)

}

