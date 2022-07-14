import User from './User';
import Suggestion from './Suggestion';

export default function Siderbar(){

  return(
          <div className="sidebar">
            <User />
            <div className="sugestoes">
              <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
              </div>
              <Suggestion />
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