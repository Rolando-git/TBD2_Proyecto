import { useState } from "react";
import { useParams } from "react-router-dom";

const SoliEmpleo = (params) => {
    const { puestos } = params
    const { idSolici, nombreSolici } = useParams()

    const [empleo, SetEmpleo] = useState({
        idEmp: Date.now,
        idSolicitante: { idSolici },
        nombreSolicitante: { nombreSolici },
        nombreEmpr: ""
    })

    const [selectedJob, setSelectedJob] = useState(null);

    const handleButtonClick = (job) => {
        setSelectedJob(job);
        saveEmp()
    };

    const saveEmp = () => {
        SetEmpleo({
            ...empleo,nombreEmpr: selectedJob.nombre_empresa
        })
    }

    return (
        <div className="container w-75">
            <div  className=" shadow rounded p-3">
            <h3>{nombreSolici}</h3>
            </div>
            <br/><br/><br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Empresa</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Lugar</th>
                        <th scope="col">Sueldo</th>
                        <th scope="col">Contrato</th>
                    </tr>
                </thead>
                <tbody>
                    {puestos.map((elemento, index) => (
                        <tr key={index}>
                            <td >{elemento.nombre_empresa}</td>
                            <td >{elemento.tipo_puesto}</td>
                            <td >{elemento.descripcion}</td>
                            <td >{elemento.lugar_empleo}</td>
                            <td >{elemento.sueldo}</td>
                            <td >{elemento.tipo_contrato}</td>
                            <td>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" onClick={() => handleButtonClick(elemento)} data-bs-target="#staticBackdrop">
                                    Enviar Curriculum
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Curriculum Enviado!</h1>
                            </div>
                            <div class="modal-body">
                                Numero de solicitud {empleo.idEmp }
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Entendido</button>
                            </div>
                        </div>
                    </div>
                </div>

            </table>
        </div>
    )
}

export default SoliEmpleo;