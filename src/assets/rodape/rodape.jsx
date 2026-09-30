import './rodape.css'

function Rodape() {
  return (
    <footer className="rodapeContainer">
      <p>© 2026 Centro Português do Rio Grande. Todos os direitos reservados.</p>

      {/* Crédito do desenvolvedor */}
      <p className="assinatura">
        Desenvolvido por{' '}
        <a
          href="https://github.com/Quintava"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adriel Alves Quintava
        </a>
      </p>
    </footer>
  )
}

export default Rodape
