import React from "react";
import './aside-chats.css';
import { useState } from 'react';

const AsideChats = ({ joinRoom , titleAside, messagesOrteams, closeConnection}) => {
    const [room, setRoom] = useState();
    const data = [{ name: "John Doe", "age": 44, id: 1 }, { name: "Jane Doe", "age": 45, id: 2 }]
    return (
        <aside className='aside-chats d-flex flex-column'>
            <div className="row w-100 m-0 row-chats-title">
                <div className="col-12 d-flex justify-content-center p-0">
                    <label className="aside-chat-title">{titleAside}</label>
                </div>
            </div>
            {
                data.map(person =>
                    messagesOrteams == "messages" ?
                        <div key={person.id} className="row w-100 m-0 tarjeta-chat py-2">
                            <div className="col-2 d-flex align-items-center p-0">
                                <img src="perfil.jpg" className="img-tarjeta-chat ms-2" />
                            </div>
                            <div className="col-8 d-flex align-items-center justify-content-center p-0">
                                <label>Nombre usuario</label>
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-end p-0">
                                <label className="pe-2">Status</label>
                            </div>
                        </div> :
                        <div key={person.id} onClick={e => {
                            closeConnection();
                            joinRoom(localStorage.getItem('UserName'), 'room');
                        }} className="row w-100 m-0 tarjeta-chat py-2">
                            <div className="col-2 d-flex align-items-center p-0">
                                <img src="equipos.png" className="img-tarjeta-chat ms-2" />
                            </div>
                            <div className="col-10 d-flex align-items-center justify-content-center p-0">
                                <label>Nombre equipo</label>
                            </div>
                        </div>
                )
            }
        </aside>
    );
}

export default AsideChats;