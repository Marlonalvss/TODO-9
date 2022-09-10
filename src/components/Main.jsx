import Reactm, { useState, useEffect } from "react";

export default function Main() {
  // criando o useState, o useState é nada mais que uma variável,  o mesmo
  // é conhecido como HOOKS.

  const [page, atPage] = useState(1); // HOOK VARIÁVEL QUE COMEÇA COM O
  // VALOR DE 1 PARA QUE A API COMEÇE NA PAGINA UM, ATRAVÉS DO ATPAGE
  // VOCÊ CONSEGUE ATUALIZAR O VALOR DESSE HOOK PARA OUTRO VALOR OU IR 
  // ATUALIZANDO DE ACORDO COM O QUE VOCÊ QUISER. 

  // HOOK PARA UTILIZAR A API 
  const [endereco, setEndereco] = useState([]);

  // atribuindo o endereço da API a uma variável
  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
  // aqui irá fazer a chamada da Api, usamos Async/ await para que a mesma
  // espere a chegada dos dados para então algo acontecer. 
  // 
  const getAddress = async () => {
    // aqui atribuimos o try/ catch para se der certo, faça algo, se não, mostre o erro
    // no console.
    // aqui foi criada uma variável "res" com o await, ou seja, ela precisa esperar o metodo
    // fetch acontecer para então receber o dado.
    // na segunda variável o mesmo ocorre, ela espera a "res" ser transformada em Json
    // para então atribuir esse valor a ela. 
    // GET = FETCH
    try {
      let res = await fetch(url)  // TXT 
      let data = await res.json() // TXT = JSON  [PRODUTOS[ITEM , ITEM ]]
      // Aqui usamos o SetEndereco, ou seja o "endereco" que foi criado usando o 
      // useState, irá receber este valor já transformado em Json, em seguida colocamos o
      //  ponto products para que ele acesse os products deste objeto.
      // setEndereco recebe esses 3 pontinhos para que o mesmo, copie os dados e 
      // adicione os dados seguintes. 
      console.log(data) // verificar como está a URL
      setEndereco([...endereco, ...data.products]) // [PRODUTOS[ITEM, ITEM , ITEM]]

    }
    // aqui usamos o catch para que caso algo de errado nesse caminho, ele ira usar
    // o console.log para exibir estes erros. 
    catch (error) {
      console.log(error)
    }
  }
  // aqui estou usando o console.log para ver como está nosso array de products.
  console.log(endereco)
  // {}


  // Aqui estamos usando o metodo Map, que no caso é, para cada elemento existente
  // dentro deste array de objetos, me retorne algo. foi criado uma Arrow Function
  // recebendo um paramêtro "e", seria um nome ficticio para cada elemento. 
  // em seguida falamos o que queremos acessar daquele elemento, ou seja,
  // foi passado, name, image, price.
  // esses sinais de <> e </> significa uma div ficticia apenas para o React
  // não dar erro, o mesmo aceita itens dentro de uma div, fora o mesmo pode dar erro.
  const enderecoAtt = endereco.map(
    (e) => <>
      <div className="conteudo-single">
        <h3>{e.name}</h3>
        <figure>
          <img className="proPhoto" src={e.image} />
        </figure>
        <p>{e.description}</p>
        <h4>{"De R$: " + e.oldPrice}</h4>
        <h3>{"Por R$: " + e.price}</h3>
        <input className="botaoEnv" type="submit" name />
      </div>
    </>
  )
  // FUNÇÃO QUE CHAMA O HOOK PAGE E ATUALIZA O VALOR EM +1 
  // ESSA FUNÇÃO VAI SER CHAMADA EM UM BOTÃO.  
  const showMore = () => {
    atPage(page + 1)
  }
  // useEffect trabalha com renderização da pagina, ou seja, a primeira vez que for carregada
  // ela irá invocar a função que chama API, para ser usado corretamente é necessário passar
  // o array no fimal dela para que os dados da api não fiquem descontrolados.
  useEffect(() => {
    getAddress()
  }, [page])

  return <main className="conteudo">
    <section className="center">{enderecoAtt}
      <button className="botaoMostra" onClick={showMore}>Ainda mais produtos aqui!</button>
    </section>
  </main>
}

