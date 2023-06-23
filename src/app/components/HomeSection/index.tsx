import "./style.scss"
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Home () {
    return (
        <div className="home-container">
            <div className="date"> 
                <div className="year"> 2023 </div>
                <p> Portfolio </p>
            </div>
            <MdOutlineKeyboardArrowDown className="arrow"/>
            <div className="text-div">
                <div className="text-wrapper">
                <div className="name-wrapper">
                    <h1> Ícaro Queiroz </h1>
                    <h2> Desenvolvedor <span> Front-end </span> </h2>
                </div>
                <div className="description">
                    <p> Olá! sou um estudante de Ciência da Computação apaixonado por criar experiências digitais incríveis. Com habilidades técnicas sólidas e uma atenção especial ao design, transformo conceitos em interfaces web interativas e funcionais. Pegue um café e conheça um pouco sobre mim e alguns projetos em que trabalhei. </p>
                </div>
                <div className="contact">
                    <FaLinkedin className="contact-icons"/>
                    <BsGithub className="contact-icons"/>
                    <AiFillInstagram className="contact-icons"/>
                    <RiWhatsappFill className="contact-icons"/>
                    <div className="contact-button"> <p> Currículo </p> </div>
                </div>
                </div>
            </div>
            <div className="image-div"></div>
        </div>
    )
}