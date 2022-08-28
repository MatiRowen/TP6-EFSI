import React from 'react'
import { useParams } from 'react-router-dom';
import Personas from '../Personas';


export default function Detalle() {
  const { id } = useParams();
  
  return (
    <div>
      {Personas.find
      (Persona => Persona.id === id)
      }
      <p>aass</p>
    </div>
  )
}
