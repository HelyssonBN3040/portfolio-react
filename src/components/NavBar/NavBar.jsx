import React from 'react'
import ButtonCv from '../ButtonCV/ButtonCv'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        <header className='ContainerNav'>
          <p>LogoTipo</p>
            <ul className="NavBar">
                <li>Home</li>
                <li>Projetos</li>
                <li>Contato</li>
                <li>Certificados</li>
            </ul>
            <ButtonCv/>
        </header>
    </div>
  )
}

export default NavBar