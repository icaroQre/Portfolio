import ProjectItem, { ProjectProps } from "../ProjectItem"
import "./style.scss"

export default function ProjectSection () {

    const project = [
        {
            src: "/images/localize-band.png",
            description: "Aplicação de turismo para hackaton, desenvolvido utilizando: React, styled-components, react-icons, etc",
            github: "https://github.com/icaroQre/Hackaton-Turismo",
            url: "https://hackaton-turismo.vercel.app/",
        },
        {
            src: "/images/instagram-copy.png",
            description: "Projeto de clonagem da página de login do instagram para o estudo de estilização",
            github: "https://github.com/icaroQre/Instagram-Login-Copy",
            url: "https://instagram-login-copy.vercel.app/",
        },
        {
            src: "/images/mk-combos.png",
            description: "Projeto desenvolvido para o estudo do uso de RegEx em JavaScript",
            github: "https://github.com/icaroQre/MK-Combos",
            url: "https://mk-combos.vercel.app/",
        },
        {
            src: "/images/super-mario.png",
            description: "Jogo de pontuação no navegador desenvolvido com o objetivo de estudo na manipulação de páginas Web",
            github: "https://github.com/icaroQre/Mario-Game",
            url: "https://mario-game-xi.vercel.app/",
        },
        {
            src: "/images/to-do-list.png",
            description: "To-do list desenvolvida para o estudo de elementos dinâmicos",
            github: "https://github.com/icaroQre/To-Do-List",
            url: "https://to-do-list-blond-zeta.vercel.app/",
        },
    ]

    return(
        <div className="project-container">
            <h1>Projetos</h1>
            <div className="project-item-wrapper">
                
                {
                    project.map((element: any, index) => {return (
                        <ProjectItem key={index} source={element.src} description={element.description} github={element.github} url={element.url}/>
                    )})
                }
            </div>
        </div>
    )
}