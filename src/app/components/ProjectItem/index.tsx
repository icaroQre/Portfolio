"use client"
import "./style.scss"
import {BsBoxArrowUpRight} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import { motion } from "framer-motion"


interface ProjectProps {
    source: string;
    description: string;
    github: string;
    url: string;
}

export default function ProjectItem ({source, description, github, url}: ProjectProps) {
    return(
        <>
        <motion.div
        initial={{opacity: 1, translateX: 200} }
        whileInView={{opacity: 1, translateX: 0}}
        transition={{duration: 0.8}}

        className="project-item-container">
            <img className="project-image" src={source}/>
            <div className="description-container">
                <div className="description-text">{description}</div>
                <div className="description-link">
                    <div><a href={github}><AiFillGithub/></a></div>
                    <div><a href={url}><BsBoxArrowUpRight/></a></div>
                </div>
            </div>
        </motion.div>
        </>
    )
}