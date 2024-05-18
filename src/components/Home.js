const Home = (params) => {

    const { solicitantes, empresas } = params
    return (

        <div>
            <h1>Home</h1>
            <br /><br /><br />

            <div className="container w-75 " style={{ display: "flex" }}>

                <div className="shadow rounded p-3 formBackground" style={{ flex: "1", marginRight: "10px" }}>
                    <h5 style={{ textAlign: "center" }}>Solicitantes</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>DNI</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitantes.map((elemento, index) => (
                                <tr key={index}>
                                    <td>{elemento.dni}</td>
                                    <td>{elemento.nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="shadow rounded p-3 formBackground" style={{ flex: "1", marginLeft: "10px" }}>
                    <h5 style={{ textAlign: "center" }}>Empresas</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>CIF</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empresas.map((elemento, index) => (
                                <tr key={index}>
                                    <td>{elemento.cif}</td>
                                    <td>{elemento.nombre}</td>
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