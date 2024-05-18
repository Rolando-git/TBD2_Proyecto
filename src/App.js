import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home';
import CrearU from './components/CrearU';
import BuscarU from './components/BuscarU';
import NavBarExample from './Layout/navbar';
import EditarU from './components/EditarU';
import CrearE from './components/CrearE';
import BuscarE from './components/BuscarE';

function App() {
  const [solicitantes, setSolicitantes] = useState([]);
  const [Empresas, setEmpresas] = useState([]);

  const addSolicitante = (usua) => {
    setSolicitantes([...solicitantes, usua])
  }

  const buscarSolicitante = (dni) => {
    return (
      solicitantes.find(solicitante => solicitante.dni === dni)
    )
  }
  const elimSolicitante = (id) => {
    const newSolicitantes = solicitantes.filter(s => s.dni != id)
    setSolicitantes(newSolicitantes)
  }
  /*
    useEffect(() => {
      //console.log(solicitantes)
  }, [solicitantes])
  */

  const addEmpresa = (empr) => {
    setEmpresas([...Empresas, empr])
  }

  const buscarEmpresa = (cif) => {
    return (
      Empresas.find(Empresa => Empresa.cif === cif)
    )
  }
  const elimEmpresa = (cif) => {
    const newEmpresas = Empresas.filter(Empresa => Empresa.cif != cif)
    setEmpresas(newEmpresas)
  }

  useEffect(() => {
    console.log(Empresas)
  }, [Empresas])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExample />}>
            <Route index element={<Home empresas={Empresas} solicitantes={solicitantes}/>} />
            <Route path='CrearU' element={<CrearU addSoli={addSolicitante} />} />
            <Route path='BuscarU' element={<BuscarU busSoli={buscarSolicitante} elimSoli={elimSolicitante} />} />
            <Route path='EditarU/:idusuario' element={<EditarU addSoli={addSolicitante} busSoli={buscarSolicitante} elimSoli={elimSolicitante} />} />

            <Route path='CrearE' element={<CrearE addEmpresa={addEmpresa} />} />
            <Route path='BuscarE' element={<BuscarE busEmpr={buscarEmpresa} elimEmpr={elimEmpresa} />} />
            <Route path='*' element={<Navigate replace to={"/"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
