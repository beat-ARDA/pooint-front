import React from "react";
import './aside-chats.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { ObtenerUsuarios } from '../../Services/user.service';
import { ObtenerChatsPorUsuario, IniciarChat, InsertarChat } from '../../Services/chat.service';

const AsideChats = ({ joinRoom, titleAside, messagesOrteams, closeConnection }) => {
    const [dataUsers, setDataUsers] = useState([]);
    const [dataUsersSearch, setDataUsersSearch] = useState([]);
    const [dataChats, setDataChats] = useState([]);
    const [chatId, setIdChat] = useState();
    const [userId, setIdUsuario] = useState();
    const [room, setRoom] = useState();

    useEffect(() => {
        ObtenerUsuarios()
            .then((response) => {
                setDataUsers(response);
                setDataUsersSearch(response);
            })
            .catch((error) => {
                console.log(error);
            });

        ObtenerChatsPorUsuario()
            .then((response) =>
                setDataChats(response))
            .catch((error) => console.log(error));
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
                    id="search"
                    onClick={(e) => {
                    }} />
                <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="form-floating w-100">
                                    <input
                                        onChange={e => {
                                            if (
                                                e.target.value == "" ||
                                                e.target.value == null ||
                                                e.target.value == undefined)
                                                setDataUsersSearch(dataUsers);
                                            else {
                                                setDataUsersSearch(dataUsers.filter(user => {
                                                    let i = user.username.indexOf(e.target.value);
                                                    if (i !== -1)
                                                        return user;
                                                    else return false;
                                                }));
                                            }
                                        }}
                                        className="form-control"
                                        placeholder="Search..."
                                        id="searchArea" />
                                    <label htmlFor="searchArea">Search:</label>
                                </div>
                            </div>
                            <div className="modal-body">
                                <section>
                                    <label className="title-search-user w-100 text-center">Usuarios</label>
                                    <ul className="userSearchElements">
                                        {dataUsersSearch.map((user, id) =>
                                            <li
                                                onClick={(e) => {
                                                    IniciarChat(
                                                        parseInt(localStorage.getItem("UserId").toString()),
                                                        user.id
                                                    ).then((response) => {
                                                        response.data.length > 0 ? null
                                                            :
                                                            InsertarChat(
                                                                parseInt(localStorage.getItem("UserId").toString()),
                                                                user.id,
                                                                localStorage.getItem("UserName"),
                                                                user.username
                                                            ).then((response) => {
                                                                if (response.data)
                                                                    ObtenerChatsPorUsuario();
                                                            }).catch((error) => console.log(error));
                                                    }).catch((error) => console.log(error));
                                                }}
                                                data-bs-dismiss="modal"
                                                key={id}
                                                id={user.id}>
                                                {user.username}
                                            </li>
                                        )}
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

                messagesOrteams == "messages" ?
                    dataChats.map((chat, index) =>
                        <div key={index}
                            onClick={() => {
                                closeConnection();
                                joinRoom(localStorage.getItem('UserName'), chat.username1 + 'and' + chat.username2, chat.id);
                            }}
                            className="row w-100 m-0 tarjeta-chat py-2">
                            <div className="col-2 d-flex align-items-center p-0">
                                <img src="perfil.jpg" className="img-tarjeta-chat ms-2" />
                            </div>
                            <div className="col-8 d-flex align-items-center justify-content-center p-0">
                                <label>{chat.username1} and {chat.username2}</label>
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-end p-0">
                                <label className="pe-2">Status</label>
                            </div>
                        </div>) :
                    <div key={1} onClick={e => {
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

            }
        </aside>
    );
}

export default AsideChats;