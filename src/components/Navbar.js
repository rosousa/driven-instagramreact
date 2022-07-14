function Icons(props){
  return(
          <ion-icon name={props.icon}></ion-icon>
        )
}

export default function Navbar(){

  const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

  return(
          <div className="navbar">
            <div className="container">
              <div className="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="separador"></div>
                <img src="assets/img/logo.png" />
              </div>

              <div className="logo-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>

              <div className="instagram-mobile">
                <img src="assets/img/logo.png" />
              </div>

              <div className="pesquisa">
                <input type="text" placeholder="Pesquisar" />
              </div>

              <div className="icones">
                {icons.map(icon => <Icons icon={icon} />)}
              </div>

              <div className="icones-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
            </div>
          </div>
        )
}