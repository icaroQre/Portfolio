import MobileMenu from "../MobileMenu"
import "./style.scss"

export default function Header () {
    return (
        <header className='header'>
            <div className='header-logo'>
            QRE
            </div>
            <div>
            <ul className='header-itens'>
                <li> Home </li>
                <li> Sobre </li>
                <li> Contato </li>
                <li> Git Hub </li>
                <div className='header-button'> Projetos </div>
            </ul>
            <div className="mobile-menu">
                <MobileMenu />
            </div>
            </div>
      </header>
    )
}