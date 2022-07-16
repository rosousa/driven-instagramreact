import React from 'react';

function UserPost(props){
  
  const [like, setLike] = React.useState("unliked md hydrated");
  const [heart, setHeart] = React.useState("heart-outline");
  const [postLike, setPostLike] = React.useState("post-like md hydrated");

  function handleLike(){
    if(like === "unliked md hydrated"){
      setLike("liked md hydrated");
      setHeart("heart");
    } else {
      setLike("unliked md hydrated");
      setHeart("heart-outline");
    }
  }

  function likeAnimation(){
    setPostLike("post-liked post-like md hydrated")
      setTimeout(() => {
        setPostLike("post-like md hydrated");
      }, 1000);
  }

  function handlePostLike(){
    if(like === "unliked md hydrated"){
      likeAnimation();
      handleLike();
    } else {
      likeAnimation();
    }
  }
  
  return(
          <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src={props.picture} />
                {props.name}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
            <div className="conteudo" onDoubleClick={() => {
              handlePostLike();
            }}>
              <img src={props.content} />
              <ion-icon class={postLike} name="heart"></ion-icon>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name={heart} onClick={()=>{
                    handleLike();
                  }} class={like}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.like} />
                <div className="texto">
                  Curtido por <strong>{props.like_name}</strong> e <strong>outras {props.likes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        )
}

export default function Post(){

  const posts = [
                      {
                        user_name: "barked", 
                        user_picture: "assets/img/barked.svg", 
                        user_post: "assets/img/gato-telefone.svg",
                        like_picture: "assets/img/respondeai.svg",
                        like_name: "respondeai",
                        likes: 101.523
                      },
                      {
                        user_name: "meowed", 
                        user_picture: "assets/img/meowed.svg", 
                        user_post: "assets/img/dog.svg",
                        like_picture: "assets/img/adorable_animals.svg",
                        like_name: "adorable_animals",
                        likes: 99.159
                      }
                    ]

  return(
          <div className="posts">
            { posts.map(post => <UserPost name={post.user_name} picture={post.user_picture} content={post.user_post} like={post.like_picture} like_name={post.like_name} likes={post.likes} /> ) }
          </div>
        )
}