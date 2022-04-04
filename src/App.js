import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [invitados, setInvitados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const invitadoNuevo = {
      name: firstName,
      lastname: lastName,
    };
    setInvitados([...invitados, invitadoNuevo]);
    setFirstName((e.target.value = ""));
    setLastName((e.target.value = ""));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="action">
              <button type="submit" className="btn btn-primary">
                Agregar Invitado
              </button>
            </div>
          </form>

          <table className="table bordered-table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
              </tr>
            </thead>
            <tbody>
              {invitados.map((invitado, index) => (
                <tr key={index}>
                  <td>{invitado.name}</td>
                  <td>{invitado.lastname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
