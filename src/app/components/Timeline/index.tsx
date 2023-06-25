"use client"
import "./style.scss"
import {motion} from "framer-motion"

export default function Timeline () {
    return (
        <div className="timeline-container">
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="timeline-item">
                <div className="dot"></div>
                <div className="timeline-item-content">
                    <h1> Final de 2021 </h1>
                    <p> Primeiro contato com a programação na faculdade de Ciência da Computação (UENP) </p>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="timeline-item">
                <div className="dot"></div>
                <div className="timeline-item-content">
                    <h1> 2022 </h1>
                    <p> Estudo em desenvolvimento WEB com JavaScript e introdução a bibliotecas avançadas </p>
                </div>
                </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="timeline-item">
                <div className="dot"></div>
                <div className="timeline-item-content">
                    <h1> 2023 </h1>
                    <p> Estudo de frameworks e estudo em UX e UI </p>
                </div>
                </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className="timeline-item">
                <div className="dot"></div>
                <div className="timeline-item-content">
                    <h1> 2023 </h1>
                    <p> Entrada no mercado e trabalhos como freelancer </p>
                </div>
                </motion.div>

            <div className="timeline-line"></div>
        </div>
    )
}