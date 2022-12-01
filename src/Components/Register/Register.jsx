import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

export default function Register() {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const baseUrl = 'https://localhost:44349/api/User';
    const GuardarUsuario = async () => {
        if (username == "" || username == null || password == "" || password == null) {
            alert("Campos incompletos!");
            return;
        }

        await axios.post(baseUrl, { username, password })
            .then(response => {
                if (response.data) {
                    alert('Registro exitoso');
                    navigate('/');
                }
                else {
                    alert('El reistro no se pudo insertar');
                }
            }).catch(error => {
                alert('Error de conexion');
                console.log(error);
            });
    }

    return (
        <form className='register container-fluid d-flex flex-column justify-content-center align-items-center'>
            <div className='row p-0 m-0'>
                <div className='col-12'>
                    <label className='titulo-register'>Register user</label>
                </div>
            </div>
            <div className='row p-0 m-0'>
                <div className='col-12'>
                    <label className='label-text'>Username</label>
                </div>
            </div>
            <div className='row d-flex justify-content-center w-100 p-0 m-0'>
                <div className='col-12 w-25'>
                    <input
                        onChange={(e) => {
                            let regex = / /;
                            if (!regex.test(e.target.value))
                                setUserName(e.target.value);
                        }}
                        value={username}
                        className='w-100'
                        placeholder='username'
                        id='username'
                        name='username'></input>
                </div>
            </div>
            <div className='row p-0 m-0'>
                <div className='col-12'>
                    <label className='label-text'>Password</label>
                </div>
            </div>
            <div className='row d-flex justify-content-center w-100 p-0 m-0 mb-2'>
                <div className='col-12 w-25'>
                    <input
                        type="password"
                        onChange={(e) => {
                            let regex = / /;
                            if (!regex.test(e.target.value))
                                setPassword(e.target.value);
                        }}
                        value={password}
                        className='w-100'
                        placeholder='password'
                        id='password'
                        name='password'></input>
                </div>
            </div>
            <div className='row d-flex justify-content-center w-100 p-0 m-0'>
                <div className='col-12 w-25'>
                    <button onClick={(e) => {
                        GuardarUsuario();
                    }} type="button" className='btn button-save'>Guardar</button>
                </div>
            </div>
        </form>
    );
}