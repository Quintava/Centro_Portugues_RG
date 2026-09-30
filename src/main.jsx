import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Contatos from './assets/contatos/contatos.jsx'
import Destaques from './assets/destaques/destaques.jsx'
import Inicio from './assets/inicio/inicio.jsx'
import Rodape from './assets/rodape/rodape.jsx'
import Sobre from './assets/sobre/sobre.jsx'
import Navegacao from './assets/topo/navegacao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
    <main>
      <Inicio />
      <Destaques />
      <Sobre />
      <Contatos />
    </main>
    <Rodape />
  </StrictMode>,
)
