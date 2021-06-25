import React from "react";
import  antigravityIMG from "../assets/img/antigravityIMG.svg";
import logoIMG from "../assets/img/logoIMG.svg";
import googleIconIMG from "../assets/img/google_icon.svg";
import "../styles/home.scss";



export function Home() {
  return (
    <div id = "page-home">
      <aside>
        <div>{/*Onde vai ficar a imagem*/}
            <img src={antigravityIMG} alt="" />
        </div>
        <div>
          <h1>
              Toda pergunta tem uma resposta.       
          </h1>
          <p>
              Aprenda e compartilhe conhecimento com outras pessoas
          </p>
        </div>
      </aside>
      <main>
        <form className="form-login">
            <img src={logoIMG} alt="Logo"/>
            <button>
                <img src={googleIconIMG} alt="GoogleLogo" />
                Crie sua sala com o Google
            </button>
            <div>
                Ou entre em uma sala
            </div>
            <input type="text" placeholder="Digite o código da sala" />
            <button>
                <img src="" alt="" />
                Entrar na sala
            </button>
        </form>
      </main>
    </div>
  );
}
