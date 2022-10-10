import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUserName] = useState();
    return (
        <div className='login container-fuid d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='row w-50 d-flex justify-content-center tarjeta-login m-0'>
                <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                    <form className="row d-flex flex-column g-3">
                        <div className="col-auto text-center">
                            <label className='text-login'>Login</label>
                        </div>
                        <div className="col-auto text-center">
                            <input onChange={e => setUserName(e.target.value)} type="text" className="input-login" id="username" placeholder="Username" />
                        </div>
                        <div className="col-auto text-center">
                            <input type="password" className="input-login" id="password" placeholder="Password" />
                        </div>
                        <div className="col-12">
                            <Link to="/messages">
                                <button onClick={() => localStorage.setItem('UserName', username)} type="submit" className='w-100 btn btn-color mb-3'>Sigin</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;