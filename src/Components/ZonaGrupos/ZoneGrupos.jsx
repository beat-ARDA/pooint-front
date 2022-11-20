import React from "react";
import './ZoneGrupos.css';
import { useState, useEffect } from 'react';
import { ObtenerGrupos } from '../../Services/Grupos_service';

const ZoneChat = ({ joinSGrup, titleAside, closeConnection }) => {
    const [dataUsers, setDataUsers] = useState([]);
    const [dataUsersSearch, setDataUsersSearch] = useState([]);
    const [dataChats, setDataChats] = useState([]);
    const [dataTeamsUsers, setDataTeamsUsers] = useState([]);
    
    const [dataGrupos, setDataGrupos] = useState([]);
    

    useEffect(() => {
        ObtenerGrupos()
            .then((response) => {
                setDataGrupos(response);
                
            })
            .catch((error) => {
                console.log(error);
            });
                
    }, []);

    return (
        <aside className='aside-chats d-flex align-items-center flex-column'>
            <div className="row w-100 m-0 d-flex flex-column align-items-center">
                <input
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    className="col-12 w-75 mt-2"
                    type="text"
                    placeholder="Search.."
                    id="search" />
                <div
                    className="modal fade"
                    id="searchModal"
                    tabIndex="-1"
                    aria-labelledby="searchModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="form-floating w-100">
                                   
                                </div>
                            </div>
                            <div className="modal-body">
                                <section>
                                    <label className="title-search-user w-100 text-center">Usuarios</label>
                                    <ul className="userSearchElements">
                                        
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row w-100 m-0 row-chats-title">
                <div className="col-12 d-flex justify-content-center p-0">
                    <label className="aside-chat-title">{titleAside}</label>
                </div>
            </div>
            {
                    dataGrupos.map((grupos, index) =>
                        <div key={index}
                            onClick={() => {
                                alert(grupos.id_grupo);
                                joinSGrup(localStorage.getItem('UserName'),grupos.id_grupo);
                                closeConnection();
                            }}
                            className="row w-100 m-0 tarjeta-chat py-2">
                            <div className="col-2 d-flex align-items-center p-0">
                                <img src="FCFM.png" className="img-tarjeta-chat ms-2" />
                            </div>
                            <div className="col-8 d-flex align-items-center justify-content-center p-0">
                                <label>{grupos.id_grupo}  {grupos.nombre}</label>
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-end p-0">
                                <label className="pe-2">Status</label>
                            </div>
                        </div>
                    ) 
                    
            }
        </aside>
    );
}

export default ZoneChat;