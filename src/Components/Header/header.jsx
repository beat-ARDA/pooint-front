import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPeopleGroup, faBriefcase, faRightFromBracket, faBell, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SetStatus } from '../../Services/user.service';

export default function Header() {
    const location = useLocation();

    return (
        <header className='header container-fluid d-flex align-items-center justify-content-center'>
            <div className='row w-100'>
                {
                    location.pathname == '/' || location.pathname == '/register' ? (location.pathname == '/register' ?
                        <div className='col-12 p-0 d-flex justify-content-between align-items-center'>
                            <Link to="/">
                                <FontAwesomeIcon icon={faArrowLeft} color="white" size="2x" className="icon-header" />
                            </Link>
                            <label className='titulo-login'>Team App</label>
                            <div />
                        </div>
                        :
                        <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                            <label className='titulo-login'>Team App</label>
                        </div>
                    )
                        :
                        <>
                            <div className='col-4 d-flex align-items-center'>
                                <img src='./perfil.jpg' className='img-perfil' alt='...' />
                                <label id='status-text' className='text-white ps-2'>Status</label>
                            </div>
                            <div className='col-1 d-flex justify-content-center align-items-center'>
                                <Link to="/messages">
                                    <FontAwesomeIcon icon={faComments} color="white" size="2x" className="icon-header" />
                                </Link>
                            </div>
                            <div className='col-1 d-flex justify-content-center align-items-center'>
                                <Link to="/teams">
                                    <FontAwesomeIcon icon={faPeopleGroup} color="white" size="2x" className="icon-header" />
                                </Link>
                            </div>
                            <div className='col-1 d-flex justify-content-center align-items-center'>
                                <Link to="/Grupos">
                                    <FontAwesomeIcon icon={faBriefcase} color="white" size="2x" className="icon-header" />
                                </Link>
                            </div>
                            <div className='col-1 d-flex justify-content-center align-items-center'>
                                <Link to="/notifications">
                                    <FontAwesomeIcon icon={faBell} color="white" size="2x" className="icon-header" />
                                </Link>
                            </div>
                            <div className='col-4 d-flex justify-content-end align-items-center'>
                            
                            <a href="/" onClick={() => {
                                SetStatus(localStorage.getItem("UserId"),false);

                                }}> <FontAwesomeIcon icon={faRightFromBracket}  color="white" size="2x" className="icon-header" /> </a> 
                            </div>
                        </>
                }
            </div>
        </header>
    );
}
