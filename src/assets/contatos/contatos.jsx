import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

import './contatos.css'

function Contatos() {
  return (
    <section className="contatosContainer" id="contatos">
      <div className="topoContatos">
        <h2>Entre em Contato</h2>
        <p>
          Fale conosco para saber mais sobre o espaço, reservas e disponibilidade
          para eventos.
        </p>
      </div>

      <div className="cardsContatos">
        {/* Atendimento e reservas */}
        <a
          href="https://wa.me/5553981555422"
          target="_blank"
          rel="noopener noreferrer"
          className="cardContato"
        >
          <FaWhatsapp aria-hidden="true" />
          <h3>WhatsApp</h3>
          <p>Solicite informações e reservas.</p>
        </a>

        {/* Rede social oficial */}
        <a
          href="https://instagram.com/centroportuguesrgoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="cardContato"
        >
          <FaInstagram aria-hidden="true" />
          <h3>Instagram</h3>
          <p>Acompanhe fotos e novidades.</p>
        </a>

        {/* Endereço no Google Maps */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=-32.138161,-52.193124"
          target="_blank"
          rel="noopener noreferrer"
          className="cardContato"
        >
          <FaMapMarkerAlt aria-hidden="true" />
          <h3>Localização</h3>
          <p>Rio Grande - RS</p>
        </a>
      </div>
    </section>
  )
}

export default Contatos
