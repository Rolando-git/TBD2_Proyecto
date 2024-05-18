import { useState, useEffect } from "react";
import "./CrearU.css";
import { useParams } from 'react-router-dom';

const EditarU = (params) => {
    const { addSoli, busSoli, elimSoli, edSoli } = params
    const { idusuario } = useParams()

    const [solicitante, setSolicitante] = useState({
        dni: "",
        nombre: "",
        apellido: ""
    })

    const handleChange = ({ target }) => {
        setSolicitante({ ...solicitante, [target.name]: target.value })
    }

    function funcion1() {
        return new Promise((resolve, reject) => {
            elimSoli(idusuario)
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    const guardarSolici = (e) => {
        e.preventDefault();

        funcion1().then((result) => {
            addSoli(solicitante);
        })
        console.log(solicitante)
        setSolicitante({
            dni: "",
            nombre: "",
            apellido: ""
        })
    }

    useEffect(() => {
        const newU = busSoli(idusuario);
        if (newU) {
            setSolicitante(newU);
        }

    }, [busSoli, idusuario])

    return (

        <div className="container w-75">
            <br />
            <h1>Editar solicitante</h1>
            <br />
            <h4>DATOS BASICOS</h4>
            <form className=" shadow rounded p-3 formBackground" onSubmit={guardarSolici}>
                <h5 >Dni</h5>
                <input readOnly className="form-control" type="text" name="dni" placeholder="Dni" value={solicitante.dni} onChange={handleChange} />
                <br />
                <h5 >Nombre</h5>
                <input className="form-control" type="text" name="nombre" placeholder="Nombre" value={solicitante.nombre} onChange={handleChange} />
                <br />
                <h5 >Apellido</h5>
                <input className="form-control" type="text" name="apellido" placeholder="Apellido" value={solicitante.apellido} onChange={handleChange} />
                <br />
                <input className="btn btn-primary" type="submit" value="Guardar" />
            </form>
        </div>

    );
};

export default EditarU;