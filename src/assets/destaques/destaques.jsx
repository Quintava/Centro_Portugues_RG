import churrasqueira from '../img/churrasqueira.jpg'
import estacionamento from '../img/estacionamento.jpg'
import salao from '../img/interno-salao.jpg'
import './destaques.css'

function Destaques() {
  return (
    <section className="destaquesContainer" id="espaco">
      <div className="topoDestaques">
        <h2>Conheça Nosso Espaço</h2>
        <p>
          Estrutura completa para confraternizações, eventos e momentos especiais.
        </p>
      </div>

      {/* Salão principal */}
      <div className="destaqueItem">
        <img src={salao} alt="Salão principal do Centro Português" />
        <div className="textoDestaque">
          <h3>Salão amplo e aconchegante</h3>
          <p>
            Ambiente espaçoso e preparado para aniversários, confraternizações,
            jantares e eventos especiais.
          </p>
        </div>
      </div>

      {/* Área da churrasqueira */}
      <div className="destaqueItem reverse">
        <img src={churrasqueira} alt="Churrasqueira do Centro Português" />
        <div className="textoDestaque">
          <h3>Espaço com churrasqueira</h3>
          <p>
            Estrutura ideal para encontros entre amigos e famílias, oferecendo
            conforto e praticidade para sua confraternização.
          </p>
        </div>
      </div>

      {/* Área de estacionamento */}
      <div className="destaqueItem">
        <img src={estacionamento} alt="Estacionamento do Centro Português" />
        <div className="textoDestaque">
          <h3>Estacionamento amplo e seguro</h3>
          <p>
            Espaço pensado para oferecer comodidade, segurança e tranquilidade aos
            convidados durante os eventos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destaques
