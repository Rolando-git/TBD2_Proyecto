const Home = (params) => {

    const { solicitantes, empresas, puestos, solicitudes } = params
    return (

        <div>
            <h1>Home</h1>
            <br /><br /><br />

            <div className=" w-100" style={{ display: "flex", justifyContent: "space-between" }}>

                <div className="shadow rounded p-3 formBackground" style={{ flex: "1 1 50%", maxWidth: "50%", margin: "0 5px" }}>
                    <h5 style={{ textAlign: "center" }}>Solicitantes</h5>
                    <table class="table table-borderless" >
                        <thead>
                            <tr>
                                <th >DNI</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitantes.map((elemento, index) => (
                                <tr key={index}>
                                    <td >{elemento.dni}</td>
                                    <td >{elemento.nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="shadow rounded p-3 formBackground" style={{ flex: "1 1 50%", maxWidth: "50%", margin: "0 5px" }}>
                    <h5 style={{ textAlign: "center" }}>Empresas</h5>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th >CIF</th>
                                <th >Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empresas.map((elemento, index) => (
                                <tr key={index}>
                                    <td >{elemento.cif}</td>
                                    <td >{elemento.nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <br/>
            <div className=" w-100" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="shadow rounded p-3 formBackground" style={{ flex: "1 1 50%", maxWidth: "50%", margin: "0 5px" }}>
                    <h5 style={{ textAlign: "center" }}>Puestos de Trabajo</h5>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th >Empresa</th>
                                <th >Tipo de Puesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {puestos.map((elemento, index) => (
                                <tr key={index}>
                                    <td>{elemento.nombre_empresa}</td>
                                    <td >{elemento.tipo_puesto}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="shadow rounded p-3 formBackground" style={{ flex: "1 1 50%", maxWidth: "50%", margin: "0 5px" }}>

                    <h5 style={{ textAlign: "center" }}>Solicitudes</h5>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th>Id Solicitud</th>
                                <th>DNI solicitante</th>
                                <th>Solicitante</th>
                                <th >Empresa</th>
                                <th >Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                        {solicitudes.map((elemento, index) => (
                                <tr key={index}>
                                    <td>{elemento.idEmp}</td>
                                    <td >{elemento.idSolicitante}</td>
                                    <td >{elemento.nombreSolicitante}</td>
                                    <td >{elemento.nombreEmpr}</td>
                                    <td >{elemento.accion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    )
}

export default Home