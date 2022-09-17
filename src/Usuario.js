function InformacoesUsuario(props) {
  return (
    <>
      <img src={props.imagem} alt={props.nome}/>
      <div class="texto">
        <strong>{props.nickname}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </>
  )
}

export default function Usuario() {
  return (
    <div class="usuario">
      <InformacoesUsuario imagem={"assets/img/catanacomics.svg"} nome={'Catana'} nickname={'catanacomics'}/>
    </div>
  );
}