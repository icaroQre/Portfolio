"use client"
import "./style.scss"
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { motion } from "framer-motion"
import Image from "next/image"

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
                <motion.div 
                initial={{opacity: 0, translateY: -200} }
                whileInView={{opacity: 1, translateY: 0}}
                transition={{duration: 0.8, delay: 0}}
                className="name-wrapper">
                    <h1> Ícaro Queiroz </h1>
                    <h2> Desenvolvedor <span> Front-end </span> </h2>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, translateY: 200} }
                whileInView={{opacity: 1, translateY: 0}}
                transition={{duration: 0.8, delay: 0.3}}
                className="description">
                    <p> Olá! sou um estudante de Ciência da Computação apaixonado por criar experiências digitais incríveis. Com habilidades técnicas sólidas e uma atenção especial ao design, transformo conceitos em interfaces web interativas e funcionais. Pegue um café e conheça um pouco sobre mim e alguns projetos em que trabalhei. </p>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, translateY: 200} }
                whileInView={{opacity: 1, translateY: 0}}
                transition={{duration: 0.8, delay: 0.5}}
                className="contact">
                    <a href="https://www.linkedin.com/in/%C3%ADcaro-queiroz-reccanello-9b903a235/"><FaLinkedin /></a>
                    <a href="https://github.com/icaroQre"><BsGithub /></a>
                    <a href="https://www.instagram.com/icaroqre/"><AiFillInstagram /></a>
                    <a href="https://wa.me/5543999774648"><RiWhatsappFill /></a>
                    <div className="contact-button"> <p> Currículo </p> </div>
                </motion.div>
                </div>
            </div>
            <motion.div
            initial={{opacity: 0, translateX: 500} }
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className="image-div">
                <Image src="/images/hero-2.png" alt="Ícaro Queiroz Reccanello" width={450} height={450}></Image>
            </motion.div>
        </div>
    )
}