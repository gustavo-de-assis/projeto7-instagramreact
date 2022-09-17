import React, {useState} from "react";

function InformacoesUsuario(props) {
  return (
    <>
      <img src={props.imagem} alt={props.nome} onClick={props.funcaoImagem}/>
      <div class="texto">
        <strong>{props.nickname}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil" onClick={props.funcaoNome}></ion-icon>
        </span>
      </div>
    </>
  )
}

export default function Usuario() {
  const [nomeUsuario, setNome] = useState('Catana');
  const [imagemUsuario, setImagem] = useState("assets/img/catanacomics.svg");
  
  function mudaNomeUsuario(){
    const novoNome = prompt("Entre com um novo nome:");
    setNome(novoNome);
  }

  function mudaImagemUsuario(){
    const novaImagem = prompt("Entre com um link da Imagem:");
    setImagem(novaImagem);
  }

  return (
    <div class="usuario">
      <InformacoesUsuario nome={nomeUsuario} funcaoNome={mudaNomeUsuario}
      imagem={imagemUsuario} funcaoImagem={mudaImagemUsuario}
      nickname={'catanacomics'}/>
    </div>
  );
}