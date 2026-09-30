import { FaInstagram } from 'react-icons/fa'

import emblema from '../img/emblema.png'
import './inicio.css'

function Inicio() {
  return (
    <section className="inicioContainer" id="inicio">
      <div className="inicioOverlay">
        <div className="inicioConteudo">
          <span className="inicioEtiqueta">
            Tradição • Eventos • Confraternização
          </span>

          {/* Identidade visual principal do clube */}
          <img
            src={emblema}
            alt="Centro Português do Rio Grande"
            className="logoInicio"
          />

          <p>
            Um espaço acolhedor para festas, formaturas, celebrações e momentos
            especiais com família, amigos e comunidade.
          </p>

          <div className="inicioBotoes">
            <a href="#espaco" className="botaoInicio principal">
              Conhecer o espaço
            </a>

            <a
              href="https://instagram.com/centroportuguesrgoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="botaoInicio secundario"
            >
              <FaInstagram aria-hidden="true" />
              Acompanhar no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
