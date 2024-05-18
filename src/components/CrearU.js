import { useState } from "react";
import "./CrearU.css";

const CrearU = (params) => {

    const { addSoli } = params
    const [alerta, setAlerta] = useState(false)
    const [solicitante, setSolicitante] = useState({
        dni: "",
        nombre: "",
        apellido: ""
    })


    const handleChange = ({ target }) => {
        setSolicitante({ ...solicitante, [target.name]: target.value })
    }

    const addSolici = (e) => {
        e.preventDefault();
        addSoli(solicitante)
        setSolicitante({
            dni: '',
            nombre: "",
            apellido: ""
        })
        setAlerta(true)
    }


    return (
        <div className="container w-75">
            <br />
            <h1>Crear solicitante</h1>
            <br />

            <h4>DATOS BASICOS</h4>
            <form className=" shadow rounded p-3 formBackground" onSubmit={addSolici}>
                <h5 >Dni</h5>
                <input className="form-control" type="text" name="dni" placeholder="Dni" value={solicitante.dni} onChange={handleChange} required />
                <br />
                <h5 >Nombre</h5>
                <input className="form-control" type="text" name="nombre" placeholder="Nombre" value={solicitante.nombre} onChange={handleChange} required />
                <br />
                <h5 >Apellido</h5>
                <input className="form-control" type="text" name="apellido" placeholder="Apellido" value={solicitante.apellido} onChange={handleChange} required />
                <br />
                <input className="btn btn-primary" type="submit" value="Crear" />
            </form>

            

            {
                alerta && 
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Solicitante agregado!</strong>
                <button type="button" className="btn-close" onClick={() => setAlerta(false)} aria-label="Close"></button>
            </div>
            }
        </div>



    );
};

export default CrearU;