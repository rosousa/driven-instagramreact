function SuggestionTemplate(props){
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

export default function Suggestion(){
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
          <>
          { user_suggestions.map(user => <SuggestionTemplate nickname={user.nickname} picture={user.picture} />) }
          </>
         )
}