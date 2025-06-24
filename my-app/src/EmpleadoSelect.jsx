import { useState } from 'react';
import axios from 'axios';

function EmpleadoSelect() {

    const [formData, setFormData] = useState({
        idUsuario: ''
    });

    const [usuario, setUsuario] = useState(null);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {

        e.preventDefault();
        console.log(JSON.stringify(formData));

        try {

            const options = {
                method: 'GET',
                url: 'http://localhost:8080/api-dev/empleados/select/' + formData.idUsuario,
                headers: {
                    'content-type': 'application/json'
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                setUsuario(response.data);
            }).catch(function (error) {
                console.error(error);
            });

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>

            <h2>Consulta de Usuario</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="idUsuario" placeholder="idUsuario" onChange={handleChange} required /><br />
                <button type="submit">Consultar</button>
            </form>

            {usuario && (
                
                <div style={{ marginTop: '1rem' }}>
                    <h3>Datos del Usuario</h3>
                    <p><strong>Nombre:</strong> {usuario.nombre}</p>
                    <p><strong>Apellido:</strong> {usuario.apellido}</p>
                    <p><strong>Email:</strong> {usuario.email}</p>
                    <p><strong>Telefono:</strong> {usuario.telefono}</p>
                    <p><strong>Fecha Ingreso:</strong> {usuario.fechaIngreso}</p>
                    <p><strong>Salario:</strong> {usuario.salario}</p>
                    <p><strong>Departamento:</strong> {usuario.departamento}</p>
                </div>
            )}

        </div>
    );

}

export default EmpleadoSelect;