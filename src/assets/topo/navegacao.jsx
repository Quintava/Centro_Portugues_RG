import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import emblema from '../img/emblema.png'
import './nav.css'

function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <div className="container">
      <nav className="menuBox" aria-label="Navegação principal">
        {/* Emblema do clube */}
        <a href="#inicio" className="logo" onClick={fecharMenu}>
          <img src={emblema} alt="Emblema do Centro Português" />
        </a>

        {/* Links principais do site */}
        <div className={`menu ${menuAberto ? 'active' : ''}`}>
          <a href="#inicio" className="box" onClick={fecharMenu}>
            Início
          </a>
          <a href="#espaco" className="box" onClick={fecharMenu}>
            Espaço
          </a>
          <a href="#sobre" className="box" onClick={fecharMenu}>
            Sobre
          </a>
          <a href="#contatos" className="box" onClick={fecharMenu}>
            Contatos
          </a>
        </div>

        {/* Botão exibido somente em telas menores */}
        <button
          type="button"
          className="menuMobile"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </div>
  )
}

export default Navegacao
