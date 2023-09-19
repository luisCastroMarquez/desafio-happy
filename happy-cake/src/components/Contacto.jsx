import React, { useState } from "react";

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario, por ejemplo, una solicitud HTTP a un servidor.
    console.log("Email:", email);
    console.log("Descripción:", descripcion);
    // Limpia los campos después de enviar
    setEmail("");
    setDescripcion("");
  };

  return (
    <div>
      <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
