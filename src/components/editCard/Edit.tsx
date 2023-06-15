import "./edit.css";
import Card from "../card/card";
import { ChangeEvent, useState, FormEvent } from "react";

export default function Edit() {
  const [dataCard, setdataCard] = useState<dataCardOne>({
    nameOfOwner: "",
    cardNumber: "",
    expirationDateMonth: "",
    expirationDateYear: "",
    securityCode: "",
  });
  const [confirm, setConfirm] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "securityCode":
        // Elimina (por decir asi) cualquier carácter que no sea un dígito
        const valueReplace = value.replace(/\D/g, "");

        setdataCard({ ...dataCard, [name]: valueReplace });
        break;
      case "cardNumber":
        // Elimina (por decir asi) cualquier carácter que no sea un dígito
        const numberOnly = value.replace(/\D/g, "");
        // Separa los dígitos en grupos de cuatro
        const separateNumbers = numberOnly
          .replace(/(\d{4})(?=\d)/g, "$1 ")
          .trim();

        setdataCard({ ...dataCard, [name]: separateNumbers });
        break;
      case "nameOfOwner":
        // Reemplazar caracteres no alfabéticos
        let replace = value.replace(/[^A-Za-z\s]/g, '');
        const uppercasedValue = replace.toUpperCase();
        setdataCard({ ...dataCard, [name]: uppercasedValue });
        break;
      default:
        setdataCard({ ...dataCard, [name]: value });
        break;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    setConfirm(true);
  };

  return (
    <>
      <Card data={dataCard} />
      {!confirm && 
        <form className="editInputs" onSubmit={handleSubmit}>
        <input
          value={dataCard.nameOfOwner}
          maxLength={25}
          className="editInput"
          placeholder="Nombre del titular"
          type="text"
          name="nameOfOwner"
          onChange={handleChange}
          required
        />
        <input
          value={dataCard.cardNumber}
          className="editInput"
          maxLength={19}
          placeholder="Número de tarjeta"
          type="text"
          name="cardNumber"
          onChange={handleChange}
          required
        />
        <select
          className="editInput"
          defaultValue={"default"}
          name="expirationDateMonth"
          onChange={handleChange}
          required
        >
          <option value={"default"} disabled>
            Mes
          </option>
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
        <select
          className="editInput"
          defaultValue={"default"}
          name="expirationDateYear"
          onChange={handleChange}
          required
        >
          <option value={"default"} disabled>
            Año
          </option>
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
        <input
          id="cvc"
          className="editInput"
          placeholder="Código de seguridad"
          name="securityCode"
          type="text"
          maxLength={3}
          value={dataCard.securityCode}
          onChange={handleChange}
          required
        />
        <button>Confirmar</button>
      </form>
    }
    { confirm && 
        <div className="editThanks">
            <h2>¡Muchas Gracias!</h2>
            <p>Tus datos fueron confirmados</p>
            <button onClick={() => setConfirm(!confirm)}>Continuar</button>
        </div>
    }
    </>
  );
}
