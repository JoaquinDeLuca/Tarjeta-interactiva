import './App.css'
import Edit from './components/editCard/Edit'
import MpLogo from './assets/mp.svg'
import Linkedin from './assets/linkedin.svg'
import GitHub from './assets/github-mark.svg'

function App() {
  return (
    <main className='appMain'>
      <Edit/>
      <img className='appLogoMp' src={MpLogo} alt='logo de mercado pago'/>
      <div className='appSocialMedia'>
        <p>Desarrollado por</p>
        <div className='appSocialMediaContainer'>
          <a href='https://www.linkedin.com/in/joaquindeluca/' target='_blank'><img src={Linkedin} alt='linkedin'/></a>
          <a href='https://github.com/JoaquinDeLuca' target='_blank'><img src={GitHub} alt='Git Hub'/></a>
        </div>
      </div>
    </main>
  )
}

export default App