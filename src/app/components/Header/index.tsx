"use client"
import MobileMenu from "../MobileMenu"
import "./style.scss"
import { Link } from "react-scroll"

export default function Header () {
    return (
        <header className='header'>
            <div className='header-logo'>
            QRE
            </div>
            <div>
            <ul className='header-itens'>
                <li> <Link to="home-container" smooth={true} > Home </Link> </li>
                <li> <Link to="about-container" smooth={true}> Sobre </Link> </li>
                <li> <Link to="home-container" smooth={true} > Contato </Link> </li>
                <li><a href="https://github.com/icaroQre"> Git Hub </a></li>
                <div className='header-button'> <Link  to="project-container" smooth={true}> Projetos </Link> </div>
            </ul>
            <div className="mobile-menu">
                <MobileMenu />
            </div>
            </div>
      </header>
    )
}