import './App.css'
import Edit from './components/editCard/Edit'
import MpLogo from './assets/mp.svg'

function App() {
  return (
    <main className='appMain'>
      <Edit/>
      <img className='appLogoMp' src={MpLogo} alt='logo de mercado pago'/>
    </main>
  )
}

export default App
