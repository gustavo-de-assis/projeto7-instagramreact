import React, { useState } from "react"

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagemUsuario} alt={props.nomeUsuario} />
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
            <img src={props.imagemConteudo} alt={props.descricaoImagem} onDoubleClick={props.funcaoCurtir} />
        </div>
    )
}

function Fundo(props) {
    
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name={props.iconeLike} style={{color:props.corLike}} onClick={props.funcaoCurtir}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name={props.iconeSalvar} onClick={props.funcaoSalvar}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.imagemCurtidoPor} alt={props.nomeCurtidoPor} />
                <div class="texto">
                    <p>Curtido por <strong>{props.nomeCurtidoPor}</strong> e <strong>outras {props.curtidas}{/*101.523*/} pessoas</strong></p>
                </div>
            </div>
        </div>
    )
}

function Post(props) {
    const [curtidas, setCurtidas] = useState(props.numCurtidas);
    const [iconeSalvar, setBookmark] = useState('bookmark-outline');
    const [iconeLike, setLike] = useState('heart-outline');
    const [corLike, setCor] = useState('');

    
    function estadoSalvar() {
        let novoEstado;
        iconeSalvar === 'bookmark-outline' ? novoEstado = 'bookmark' : novoEstado = 'bookmark-outline';
        setBookmark(novoEstado);
    }

    function estadoLike() {
        let novoEstado;
        let mudaCor;
        let contador = curtidas;
        
        iconeLike === 'heart-outline' ? novoEstado = 'heart' : novoEstado = 'heart-outline';
        novoEstado === 'heart'? mudaCor = '#ff0000': mudaCor ='';
        novoEstado === 'heart'?  contador++ : contador--;
        
        setCor(mudaCor);
        setLike(novoEstado);
        setCurtidas(contador);

    }

    return (
        <div class="post">
            <Topo nomeUsuario={props.nomeUsuario} imagemUsuario={props.imagemUsuario} />

            <Conteudo imagemConteudo={props.imagemConteudo} descricaoImagem={props.descricaoImagem} 
            funcaoCurtir={estadoLike}/>

            <Fundo nomeCurtidoPor={props.nomeCurtidoPor} imagemCurtidoPor={props.imagemCurtidoPor}
             curtidas={curtidas} iconeLike={iconeLike} corLike={corLike} iconeSalvar={iconeSalvar}
             funcaoCurtir={estadoLike} funcaoSalvar={estadoSalvar}/>
        </div>
    )
}

export default function Posts() {
    const conteudoPosts = [
        {
            nomeUsuario: "meowed", imagemUsuario: "assets/img/meowed.svg",
            imagemConteudo: "assets/img/gato-telefone.svg", descricaoImagem: "gato-telefone.svg",
            nomeCurtidoPor: "respondeai", imagemCurtidoPor: "assets/img/respondeai.svg", numCurtidas: 101526
        },

        {
            nomeUsuario: "barked", imagemUsuario: "assets/img/barked.svg",
            imagemConteudo: "assets/img/dog.svg", descricaoImagem: "dog.svg",
            nomeCurtidoPor: "adorable_animals", imagemCurtidoPor: "assets/img/adorable_animals.svg", numCurtidas: 101526
        },

        {
            nomeUsuario: "meowed", imagemUsuario: "assets/img/meowed.svg",
            imagemConteudo: "assets/img/gato-telefone.svg", descricaoImagem: "gato-telefone.svg",
            nomeCurtidoPor: "respondeai", imagemCurtidoPor: "assets/img/respondeai.svg", numCurtidas: 101526
        },

    ];

    return (
        <div class="posts">

            {conteudoPosts.map((p, i) => (<Post nomeUsuario={p.nomeUsuario} imagemUsuario={p.imagemUsuario}
                imagemConteudo={p.imagemConteudo} descricaoImagem={p.descricaoImagem}
                nomeCurtidoPor={p.nomeCurtidoPor} imagemCurtidoPor={p.imagemCurtidoPor} numCurtidas={p.numCurtidas} key={i} />))}


        </div>

    )
}
