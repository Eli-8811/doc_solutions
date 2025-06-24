import { useState } from 'react';
import axios from 'axios';

function EmpleadoInsert() {

    const [formData, setFormData] = useState({
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
            /*
            const response = await axios.post('http://localhost:8080/api-dev/empleados/insert', JSON.stringify(formData));
            console.log(response.data);
            */

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
                method: 'POST',
                url: 'http://localhost:8080/api-dev/empleados/insert',
                headers: {
                    'content-type': 'application/json'
                },
                data: request
            };

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
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="nombre" onChange={handleChange} required /><br />
                <input type="text" name="apellido" placeholder="apellido" onChange={handleChange} required /><br />
                <input type="email" name="email" placeholder="email" onChange={handleChange} required /><br />
                <input type="text" name="telefono" placeholder="telefono" onChange={handleChange} required /><br />
                <input type="text" name="fechaIngreso" placeholder="fechaIngreso" onChange={handleChange} required /><br />
                <input type="text" name="salario" placeholder="salario" onChange={handleChange} required /><br />
                <input type="text" name="departamento" placeholder="departamento" onChange={handleChange} required /><br />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );

}

export default EmpleadoInsert;