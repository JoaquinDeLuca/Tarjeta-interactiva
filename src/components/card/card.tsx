import './card.css'
import Signo from '../../assets/symbol.svg'
import MasterCard from '../../assets/mastercard.svg'
import Mp from '../../assets/mp.svg'

interface Props {
  data: dataCardOne
}

export default function card({ data }: Props) {
  const { cardNumber, expirationDateMonth, expirationDateYear, nameOfOwner, securityCode } = data;
  return (
    <section className='cardSection'>
      <div className='cardBack'>
        <p><span className='cardText'>CVC  </span>{securityCode}</p>
      </div>
      <div className="cardFront">
        <img className='cardMp' src={Mp}  alt='Logo de mercado pago'/>
        <img className='cardSymbolSvg' src={Signo}  alt='Signo peso'/>
        <img className='cardMasterCardSvg' src={MasterCard}  alt='Logo de masterCard'/>
        <p className='cardNumber'>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
        <div className='cardData'>
          <div className='cardName'>
            <p className='cardText'>Nombre del titular</p>
            <p className='cardP'>{nameOfOwner ? nameOfOwner : "NOMBRE Y APELLIDO"}</p>
          </div>
          <div>
            <p className='cardText'>Válida</p>
            <p>{
              expirationDateMonth || expirationDateYear 
            ? 
              `${expirationDateMonth}/${expirationDateYear}`
            :
              "MM/YY" 
            }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
