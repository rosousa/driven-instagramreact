function Icon(props){
  return(
          <ion-icon name={props.name}></ion-icon>
        )
}

export default function FooterMobile(){
  const icons = ['home', 'search-outline', 'add-circle-outline', 'heart-outline', 'person-outline'];
  return(
          <div className="fundo-mobile">
            {icons.map(icon => <Icon name={icon} /> )}
          </div>
        )
}