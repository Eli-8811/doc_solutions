import { useState } from 'react';
import axios from 'axios';

function EmpleadoActualizar() {

    const [formData, setFormData] = useState({
        idUsuario: '',
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        fechaIngreso: '',
        salario: '',
        departamento: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {

        e.preventDefault();
        console.log(JSON.stringify(formData));

        try {

            let request = {
                "nombre": formData.nombre,
                "apellido":formData.apellido,
                "email": formData.email,
                "telefono": formData.telefono,
                "fechaIngreso": formData.fechaIngreso,
                "salario": formData.salario,
                "departamento": formData.departamento
            }

            const options = {
                method: 'PUT',
                url: 'http://localhost:8080/api-dev/empleados/update/'+formData.idUsuario,
                headers: {
                    'content-type': 'application/json'
                },
                data: request
            };
            debugger
            axios.request(options).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.error(error);
            });

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <h2>Actualización de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="idUsuario" placeholder="idUsuario" onChange={handleChange} required /><br />
                <input type="text" name="nombre" placeholder="nombre" onChange={handleChange} required /><br />
                <input type="text" name="apellido" placeholder="apellido" onChange={handleChange} required /><br />
                <input type="email" name="email" placeholder="email" onChange={handleChange} required /><br />
                <input type="text" name="telefono" placeholder="telefono" onChange={handleChange} required /><br />
                <input type="text" name="fechaIngreso" placeholder="fechaIngreso" onChange={handleChange} required /><br />
                <input type="text" name="salario" placeholder="salario" onChange={handleChange} required /><br />
                <input type="text" name="departamento" placeholder="departamento" onChange={handleChange} required /><br />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );

}

export default EmpleadoActualizar;