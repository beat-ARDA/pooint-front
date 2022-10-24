import React from "react";
import './aside-chats.css';
import { useState, useEffect } from 'react';
import axios from "axios";

const AsideChats = ({ joinRoom, titleAside, messagesOrteams, closeConnection }) => {
    const baseUrlGetAllUsers = 'https://localhost:44349/api/User/GetAllUsers';
    const baseUrlPostChat = 'https://localhost:44349/api/Chats/InsertChat';
    const baseUrlObtenerChatsPorUsuario = 'https://localhost:44349/api/Chats/GetChatsByUserId';
    const baseUrlEliminarChatPorId = 'https://localhost:44349/api/Chats/DeleteChatById';

    const [dataUsers, setDataUsers] = useState([]);
    const [dataChats, setDataChats] = useState([]);
    const [userId, setIdUsuario] = useState();
    const [chatId, setIdChat] = useState();
    const [room, setRoom] = useState();

    const ObtenerUsuarios = async () => {
        await axios.get(baseUrlGetAllUsers).then(response => {
            setDataUsers(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const InsertarChat = async (userId1, userId2) => {
        await axios.post(baseUrlPostChat, { userId1, userId2 }).then(response => {
            if (!response.data)
                alert("Ocurrio un error inesperado!");
        }).catch(error => {
            alert("Error de conexion");
            console.log(error);
        });
    }

    const ObtenerChatsPorUsuario = async () => {
        await axios.get(baseUrlObtenerChatsPorUsuario, { params: { Id: parseInt(localStorage.getItem("UserId")) } })
            .then(response => {
                setDataChats(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    const EliminarChatPorId = async () => {
        axios.delete(baseUrlEliminarChatPorId, { chatId }).then(response => {
            if (response.data)
                alert("El chat a sido eliminado!");
            else
                alert("No se pudo eliminar el chat!");
        }).catch(error => {
            alert("Error de conexion!");
        });
    }

    useEffect(() => {
        ObtenerUsuarios();
        ObtenerChatsPorUsuario();
    }, []);

    const data = [{ name: "John Doe", "age": 44, id: 1 }, { name: "Jane Doe", "age": 45, id: 2 }]
    return (
        <aside className='aside-chats d-flex align-items-center flex-column'>
            <div className="row w-100 m-0 d-flex flex-column align-items-center">
                <input
                    list="searchList"
                    className="col-12 w-75 mt-2"
                    type="text"
                    placeholder="Search.."
                    id="search"
                    onChange={(e) => {
                        InsertarChat(parseInt(localStorage.getItem("UserId")), parseInt(e.target.value.split('-')[0]));
                    }} />
                <datalist className="col-12 w-75 " id="searchList">
                    {
                        dataUsers.map((dato, key) =>
                            <option
                                id={dato.id}
                                key={key}>
                                {dato.id}-{dato.username}
                            </option>
                        )
                    }
                </datalist>
            </div>
            <div className="row w-100 m-0 row-chats-title">
                <div className="col-12 d-flex justify-content-center p-0">
                    <label className="aside-chat-title">{titleAside}</label>
                </div>
            </div>
            {

                messagesOrteams == "messages" ?
                    dataChats.map(chat =>
                        <div key={chat.id} className="row w-100 m-0 tarjeta-chat py-2">
                            <div className="col-2 d-flex align-items-center p-0">
                                <img src="perfil.jpg" className="img-tarjeta-chat ms-2" />
                            </div>
                            <div className="col-8 d-flex align-items-center justify-content-center p-0">
                                <label>Nombre usuario</label>
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