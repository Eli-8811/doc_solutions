import { useState } from 'react';
import axios from 'axios';

function EmpleadoAll() {

    const [formData, setFormData] = useState({
        idUsuario: ''
    });

    const [usuarios, setUsuarios] = useState(null);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {

        e.preventDefault();
        console.log(JSON.stringify(formData));

        try {

            const options = {
                method: 'GET',
                url: 'http://localhost:8080/api-dev/empleados/select/all',
                headers: {
                    'content-type': 'application/json'
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                setUsuarios(response.data);
            }).catch(function (error) {
                console.error(error);
            });

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>

            <h2>Consulta de Usuarios</h2>

            <form onSubmit={handleSubmit}>
                <button type="submit">Consultar</button>
            </form>

            {usuarios && (

                <div style={{ marginTop: '1rem' }}>
                    <ul>
                        {usuarios.map((item) => (
                            <li key={item.id}>
                                {item.nombre} {item.apellido}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );

}

export default EmpleadoAll;