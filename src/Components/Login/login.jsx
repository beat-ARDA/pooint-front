import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { SetStatus } from '../../Services/user.service';

const Login = () => {
    const navigate = useNavigate();
    const baseUrl = 'https://localhost:44349/api/User/GetUserLogin';
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const IniciarSesion = async () => {
        await axios.get(baseUrl, { params: { username: username, password: password } })
            .then(response => {
                if (response.data == "")
                    alert("Credenciales incorrectas");
                else {
                    localStorage.setItem('UserName', username);
                    localStorage.setItem('UserId', response.data.id_user);
                    SetStatus(localStorage.getItem("UserId"),true);               
                    alert("Inicio de sesion exitoso");
                    navigate('/messages');
                }
            }).catch(error => {
                alert('Error de conexion');
                console.log(error);
            });
    }

    return (
        <div className='login container-fuid d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='row w-50 d-flex justify-content-center tarjeta-login m-0'>
                <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                    <form className="row d-flex flex-column g-3">
                        <div className="col-auto text-center">
                            <label className='text-login'>Login</label>
                        </div>
                        <div className="col-auto text-center">
                            <input
                                onChange={e => {
                                    let regExp = / /;
                                    if (!regExp.test(e.target.value))
                                        setUserName(e.target.value)
                                }}
                                type="text"
                                className="input-login"
                                id="username"
                                placeholder="Username"
                                value={username} />
                        </div>
                        <div className="col-auto text-center">
                            <input
                                onChange={(e) => {
                                    let regExp = / /;
                                    if (!regExp.test(e.target.value))
                                        setPassword(e.target.value)
                                }}
                                type="password"
                                className="input-login"
                                id="password"
                                placeholder="Password"
                                value={password} />
                        </div>
                        <div className="col-12 d-flex flex-column">

                            <button onClick={() => IniciarSesion()} type="button" className='w-100 btn btn-color mb-3'>Sigin</button>

                            <Link to="/register">
                                ¿No tienes cuenta? Registrate
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;