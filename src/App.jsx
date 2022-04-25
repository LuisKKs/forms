import React, { useState } from 'react';
import EditorialesF from './comp/EditorialesF'
import TitulosF from './comp/TitulosF'
import {v4 as uid} from 'uuid'
function App() {
  const titulosData = [{
    id: uid(), 
    nom_libro: 'El principito',
    precio: '350',
    adelanto: '100',
    vtot: '5',
    fedepub: '01-01-1999' 
  },{
    id: uid(), 
    nom_libro: 'It',
    precio: '500',
    adelanto: '250',
    vtot: '45',
    fedepub: '01-02-1999' 
  }]
  const editorialesData = [{
    id: uid(), 
    editorial: 'Trillas',
    nombre: 'El principito',
    ciudad: 'Fresnillo',
  },{
    id: uid(), 
    editorial: 'Publicaciones chidas',
    nombre: 'It',
    ciudad: 'Guajaka',
  },{
    id: uid(), 
    editorial: 'Sevilla',
    nombre: '',
    ciudad: '',
  },{
    id: uid(), 
    editorial: 'Publicaciones conspiranoicas',
    nombre: '',
    ciudad: '',
  }]
  const [Titulo, setTitulo] = useState(titulosData)
  const [Editorial, setEditorial] = useState(editorialesData)
  const addEditorial = (editorial) =>{
    editorial.id = uid()
    setEditorial([...Editorial, editorial])
  }
  const addTitulo = (titulo) =>{
    titulo.id = uid()
    setTitulo([...Titulo, titulo])
  }
  return (
    <div className="App row">
      <div className='container col-md-6 mt-4'>
        <EditorialesF Editorial={Editorial} Titulo={Titulo} addEditorial={addEditorial} />
      </div>
      <div className='container col-md-6 mt-4'>
        <TitulosF Titulo={Titulo} addTitulo={addTitulo} />
      </div>
    </div>
  );
}
export default App;