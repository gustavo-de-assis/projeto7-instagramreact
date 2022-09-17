
function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                {/*<img src="assets/img/9gag.svg" /> */}
                <img src={props.imagem} alt={props.nomeUsuario}/>
            </div>
            <div class="usuario">
                {/* 9gag */}
                <p>{props.nomeUsuario}</p>
            </div>
        </div>
    )
}

export default function Stories() {
    const stories = [
        {nomeUsuario: '9gag',imagem:'assets/img/9gag.svg' },
        {nomeUsuario:'meowed',imagem:'assets/img/meowed.svg'},
        {nomeUsuario:'barked',imagem:'assets/img/barked.svg' },
        {nomeUsuario:'nathanwpylestrangeplanet',imagem:'assets/img/nathanwpylestrangeplanet.svg' },
        {nomeUsuario:'wawawicomics',imagem:'assets/img/wawawicomics.svg' },
        {nomeUsuario:'respondeai',imagem:'assets/img/respondeai.svg' },
        {nomeUsuario:'filomoderna',imagem:'assets/img/filomoderna.svg' },
        {nomeUsuario:'memeriagourmet',imagem:'assets/img/memeriagourmet.svg' }
    ];

    return (
        <div class="stories">
            {stories.map((s,i)=>(<Story nomeUsuario={s.nomeUsuario} imagem={s.imagem} key={i}/>))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}