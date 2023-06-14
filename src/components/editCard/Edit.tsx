import './edit.css'
import Card from '../card/card'
import {ChangeEvent, useState} from 'react'


export default function Edit() {

    const [dataCard, setdataCard] = useState<dataCardOne>({
        nameOfOwner: '',
        cardNumber: '',
        expirationDateMonth:'',
        expirationDateYear: '',
        securityCode: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        if (name === "cardNumber") {
            // Elimina cualquier carácter que no sea un dígito
            const digitsOnly = value.replace(/\D/g, "");
            // Separa los dígitos en grupos de cuatro
            const separatedDigits = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ");
        
            setdataCard({ ...dataCard, [name]: separatedDigits });
        } else {
            const uppercasedValue = value.toUpperCase();
            setdataCard({ ...dataCard, [name]: uppercasedValue });
        }
    }

    return (
        <>
            <Card data={dataCard}/>
            <div className='editInputs'>
                <input maxLength={25} className='editInput' placeholder="Nombre del titular" type="text" name='nameOfOwner'  onChange={handleChange} required/>
                <input className='editInput' maxLength={16} placeholder="Nro de tarjeta" type="text" name='cardNumber'  onChange={handleChange} required/>
                <select className='editInput' defaultValue={"default"} name='expirationDateMonth' onChange={handleChange}>
                    <option value={"default"} disabled>Mes</option>
                    <option value={"01"}>01</option>
                    <option value={"02"}>02</option>
                    <option value={"03"}>03</option>
                    <option value={"04"}>04</option>
                    <option value={"05"}>05</option>
                    <option value={"06"}>06</option>
                    <option value={"07"}>07</option>
                    <option value={"08"}>08</option>
                    <option value={"09"}>09</option>
                    <option value={"10"}>10</option>
                    <option value={"11"}>11</option>
                    <option value={"12"}>12</option>
                </select>
                <select className='editInput' defaultValue={"default"} name='expirationDateYear' onChange={handleChange}>
                    <option value={"default"} disabled>Año</option>
                    <option value={"23"}>2023</option>
                    <option value={"24"}>2024</option>
                    <option value={"25"}>2025</option>
                    <option value={"26"}>2026</option>
                    <option value={"27"}>2027</option>
                    <option value={"28"}>2028</option>
                    <option value={"29"}>2029</option>
                    <option value={"30"}>2030</option>
                    <option value={"31"}>2031</option>
                    <option value={"32"}>2032</option>
                    <option value={"33"}>2033</option>
                    <option value={"34"}>2034</option>
                </select>
                <input className='editInput' maxLength={3} placeholder="Cogido se seguridad" type="text" name='securityCode' onChange={handleChange} required/>
                <button>Confirmar</button>
            </div>
        </>
    )
}
