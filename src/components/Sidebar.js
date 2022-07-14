function User(props){
  return(
          <div className="usuario">
            <img src={props.picture} />
            <div className="texto">
              <strong>{props.nickname}</strong>
              {props.name}
            </div>
          </div>
        )
}

function Suggestion(props){
  return(
          <div className="sugestao">
            <div className="usuario">
              <img src={props.picture} />
              <div className="texto">
                <div className="nome">{props.nickname}</div>
                <div className="razao">Segue você</div>
              </div>
            </div>
            <div className="seguir">Seguir</div>
          </div>
        )
}

export default function Siderbar(){
  const user = {
                 nickname: "catanacomics",
                 name: "Catana",
                 picture: "assets/img/catanacomics.svg"
               };

  const user_suggestions = [
                            {
                              nickname:"bad.vibes.memes",
                              picture: "assets/img/bad.vibes.memes.svg"
                            },
                            {
                              nickname:"chibirdart",
                              picture: "assets/img/chibirdart.svg"
                            },
                            {
                              nickname:"razoesparaacreditar",
                              picture: "assets/img/razoesparaacreditar.svg"
                            },
                            {
                              nickname:"adorable_animals",
                              picture: "assets/img/adorable_animals.svg"
                            },
                            {
                              nickname:"smallcutecats",
                              picture: "assets/img/smallcutecats.svg"
                            }
                           ];

  return(
          <div className="sidebar">
            <User nickname={user.nickname} name={user.name} picture={user.picture} />
            <div className="sugestoes">
              <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
              </div>
              { user_suggestions.map(user => <Suggestion nickname={user.nickname} picture={user.picture} />) }
            </div>
            <div className="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div className="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
          </div>
        )
}