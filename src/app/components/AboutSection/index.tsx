import "./style.scss"
import html from "../../../../public/icons/vscode-icons_file-type-html.png"
import css from "../../../../public/icons/vscode-icons_file-type-css.png"
import js from "../../../../public/icons/skill-icons_javascript.png"
import react from "../../../../public/icons/skill-icons_react-dark.png"
import typescript from "../../../../public/icons/skill-icons_typescript.png"
import styledcomponents from "../../../../public/icons/skill-icons_styledcomponents.png"
import figma from "../../../../public/icons/logos_figma.png"
import Image from "next/image"
import Timeline from "../Timeline"

export default function AboutSection () {
    return(
        <>

        <div className="about-container">
        <div className="skill-container">
            <p> Um pouco sobre mim. </p>
            <div> 
                <Image src={html} width={50} height={50} alt="html-icon"/>
                <Image src={css} width={50} height={50} alt="css-icon"/>
                <Image src={js} width={50} height={50} alt="js-icon"/>
                <Image src={react} width={50} height={50} alt="react-icon"/>
                <Image src={typescript} width={50} height={50} alt="typescript-icon"/>
                <Image src={styledcomponents} width={50} height={50} alt="styled-componets-icon"/>
                <Image src={figma} width={33} height={50} alt="figma-icon"/>
            </div>
        </div>
        <Timeline />
        </div>

        </>
    )
}