function UserStory(props){
  return(
    <div className="story">
      <div className="imagem">
        <img src={props.img} />
      </div>
      <div className="usuario">
        {props.name}
      </div>
    </div>
  )
}

export default function Story(){

  const users = [
                {name: "9gag", image: `assets/img/9gag.svg`},
                {name: "meowed", image: `assets/img/meowed.svg`},
                {name: "barked", image: `assets/img/barked.svg`},
                {name: "nathanwpylestrangeplanet", image: `assets/img/nathanwpylestrangeplanet.svg`},
                {name: "wawawicomics", image: `assets/img/wawawicomics.svg`},
                {name: "respondeai", image: `assets/img/respondeai.svg`},
                {name: "filomoderna", image: `assets/img/filomoderna.svg`},
                {name: "memeriagourmet", image: `assets/img/memeriagourmet.svg`}
                ]

  return(
    <div className="stories">

      {users.map(user => <UserStory name={user.name} img={user.image} />)}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

    </div>
  )
}