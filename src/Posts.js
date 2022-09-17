function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagemUsuario} alt = {props.nomeUsuario}/>
                <p>{props.nomeUsuario}</p>
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {
    return (
        <div class="conteudo">
             <img src={props.imagemConteudo}  alt={props.descricaoImagem} />
        </div>
    )
}

function Fundo(props) {
    return (
        <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemCurtidoPor} alt={props.nomeCurtidoPor} />
                    <div class="texto">
                         <p>Curtido por <strong>{props.nomeCurtidoPor}</strong> e <strong>outras 101.523 pessoas</strong></p>
                    </div>
                </div>
            </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <Topo nomeUsuario={props.nomeUsuario} imagemUsuario={props.imagemUsuario}/>
            <Conteudo imagemConteudo={props.imagemConteudo} descricaoImagem={props.descricaoImagem} />
            <Fundo nomeCurtidoPor={props.nomeCurtidoPor} imagemCurtidoPor={props.imagemCurtidoPor} />  
        </div>
    )
}

export default function Posts() {
    const conteudoPosts =[
        {nomeUsuario: "meowed" , imagemUsuario:"assets/img/meowed.svg" ,
        imagemConteudo: "assets/img/gato-telefone.svg", descricaoImagem:"gato-telefone.svg",
         nomeCurtidoPor: "respondeai",imagemCurtidoPor:"assets/img/respondeai.svg"},
        
         {nomeUsuario: "barked" , imagemUsuario:"assets/img/barked.svg" ,
        imagemConteudo: "assets/img/dog.svg", descricaoImagem:"dog.svg",
         nomeCurtidoPor: "adorable_animals",imagemCurtidoPor:"assets/img/adorable_animals.svg"},
        
         {nomeUsuario: "meowed" , imagemUsuario:"assets/img/meowed.svg" ,
        imagemConteudo: "assets/img/gato-telefone.svg", descricaoImagem:"gato-telefone.svg",
         nomeCurtidoPor: "respondeai",imagemCurtidoPor:"assets/img/respondeai.svg"},

    ];
 
 return (
     <div class="posts">
        
         {conteudoPosts.map((p,i) =>(<Post nomeUsuario={p.nomeUsuario} imagemUsuario={p.imagemUsuario} 
         imagemConteudo={p.imagemConteudo} descricaoImagem={p.descricaoImagem}
         nomeCurtidoPor={p.nomeCurtidoPor} imagemCurtidoPor={p.imagemCurtidoPor} key={i}/>))}

            
        </div>

    )
}