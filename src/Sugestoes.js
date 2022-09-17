function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} alt={props.nome}/>
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}


export default function Sugestoes() {
    const sugestoes=[
        {nome:'bad.vibes.memes',imagem:"assets/img/bad.vibes.memes.svg", razao:"Segue Você" },
        {nome:'chibirdart',imagem:"assets/img/chibirdart.svg", razao:"Segue Você"},
        {nome:'razoesparaacreditar' ,imagem:"assets/img/razoesparaacreditar.svg", razao:"Novo no Instagram" },
        {nome:'adorable_animals' ,imagem:"assets/img/adorable_animals.svg" ,razao:"Segue Você"},
        {nome:'smallcutecats' ,imagem:"assets/img/smallcutecats.svg" ,razao:"Segue Você"}
    ];
    
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s,i)=>(<Sugestao nome={s.nome} imagem={s.imagem} razao={s.razao} key={i}/>))}
        </div>
    )
}