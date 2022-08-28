import Personas from '../Personas';
import {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [query, setQuery] = useState("")
  let navigate = useNavigate();

  return (
  <div>
  <input placeholder="Ingrese el nombre de la persona" onChange={event => setQuery(event.target.value)} />
      {
  Personas.filter(Persona => {
    if (query === '') {
      return Persona;
    } else if (Persona.nombre.toLowerCase().includes(query.toLowerCase())) {
      return Persona;
    }
  }).map((Persona) => (
    <div key={Persona.id} onClick={() => navigate(`/detalle/,${Persona.id}`)}>
      <p >{Persona.nombre}</p>
    </div>
  ))
}
  </div>
  )
}
