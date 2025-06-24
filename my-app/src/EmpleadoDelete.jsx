import { useState } from 'react';
import axios from 'axios';

function EmpleadoDelete() {

    const [formData, setFormData] = useState({
        idUsuario: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {

        e.preventDefault();
        console.log(JSON.stringify(formData));

        try {

            const options = {
                method: 'DELETE',
                url: 'http://localhost:8080/api-dev/empleados/delete/' + formData.idUsuario,
                headers: {
                    'content-type': 'application/json'
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                alert(response.data);
            }).catch(function (error) {
                console.error(error);
            });

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>

            <h2>Eliminar Usuario</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="idUsuario" placeholder="idUsuario" onChange={handleChange} required /><br />
                <button type="submit">Eliminar</button>
            </form>

        </div>
    );

}

export default EmpleadoDelete;