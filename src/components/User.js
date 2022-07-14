function UserTemplate(props){
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

export default function User(){

  const user = {
                 nickname: "catanacomics",
                 name: "Catana",
                 picture: "assets/img/catanacomics.svg"
               };

  return(
          <>
            <UserTemplate nickname={user.nickname} name={user.name} picture={user.picture} />
          </>
        )
}