import React, { useContext, useState } from 'react';
import './registro.css';
import swal from 'sweetalert';
import { CartContext } from '../../contexts/CartContext';

const Registro = () => {
    const [check, setCheck] = useState(false);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');

    const { addInformation } = useContext(CartContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!check) {
            swal('Error', 'Debe aceptar los terminos y condiciones', 'error');
            return;
        }
        if ([nombre, email, direccion, telefono].includes('')) {
            swal('Error', 'Debe llenar todos los campos', 'error');
            return;
        }

        addInformation({
            nombre,
            email,
            direccion,
            telefono,
        });

        swal('Exito', 'Se ha registrado correctamente', 'success');
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="mt-5 mb-4 text-white">Registra tus datos</h2>
            <form onSubmit={onSubmit} className="form">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-back">
                        Correo
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Ingresa tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                        Nunca compartimos tu correo con nadie mas.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label text-back">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Ingresa tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="envio" className="form-label text-back">
                        Direccion de Envío
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="envio"
                        placeholder="Ingresa la direccion de Envío"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label text-back">
                        Teléfono
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="telefono"
                        placeholder="Ingresa tu numero de telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input text-back"
                        id="exampleCheck1"
                        value={check}
                        onChange={() => setCheck(!check)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Acepto terminos y condiciones
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default Registro;
