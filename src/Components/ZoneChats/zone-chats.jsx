import { useState, useRef, useEffect } from "react";
import './zone-chats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane, faVideoCamera, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ZoneChat = ({ messages, sendMessage, messagesOrteams, titleZoneChat, videollamada, messagesDb, idChat }) => {
    const baseUrlInsertarMessage = 'https://localhost:44349/api/ChatMessage';
    const messageRef = useRef();

    const InsertarChat = async (idChat, message, user) => {
        await axios.post(baseUrlInsertarMessage, { idChat: idChat, message: message, user: user }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const [message, setMessage] = useState('');
    const [messagesData, setMessagesData] = useState([]);

    return (
        <div className='zonechat d-flex flex-column align-items-center'>
            <div className='row flex-nowrap w-100 m-0 header-zonechat'>
                <div className='col-2 p-0 d-flex align-items-center justify-content-center ps-2'>
                    {
                        messagesOrteams == "messages" ?
                            <img src='perfil.jpg' className="img-header-zonechat" /> :
                            <div>
                                <img src='equipos.png' className="img-header-zonechat" />
                            </div>
                    }
                </div>
                <div className='col-8 p-0 d-flex align-items-center justify-content-center'>
                    <label className="title-chat">{titleZoneChat}</label>
                </div>
                {
                    videollamada ?
                        <div className="col-2 p-0 d-flex align-items-center justify-content-center pe-2">
                            <FontAwesomeIcon icon={faVideoCamera} size="2x" />
                        </div> :
                        <div className="col-2 p-0 d-flex align-items-center justify-content-center pe-2">
                            <FontAwesomeIcon
                                data-bs-toggle="modal"
                                data-bs-target="#addUserModal"
                                className="añadir-persona"
                                onClick={() => console.log("cruz")}
                                icon={faCrosshairs}
                                size="2x" />

                            <div className="modal fade" id="addUserModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="form-floating w-100">
                                                <input
                                                    onChange={e => { console.log("GG") }}
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
                                                    <li>Datos</li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>

            <div ref={messageRef} className="p-0 m-0 w-100 chat-zone d-flex flex-column">
                {
                    messagesOrteams == "messages" ?
                        messagesDb.map((m, index) =>
                            m.user != localStorage.getItem("UserName") ?
                                <div key={index} className="align-self-start row tarjeta p-0 ms-3 my-1 d-flex flex-column align-items-center">
                                    <div className="wrapper text-center col-12 m-0 p-2 text-tarjeta">{m.message}</div>
                                    <div className="wrapper col-12 m-0 p-0 text-user">{m.user}</div>
                                </div>
                                :
                                <div key={index} className="align-self-end row tarjeta p-0 me-3 my-1 d-flex flex-column align-items-center">
                                    <div className="wrapper text-center col-12 m-0 p-2 text-tarjeta-user">{m.message}</div>
                                    <div className="wrapper text-end col-12 m-0 p-0 text-user">{m.user}</div>
                                </div>
                        )
                        :
                        messages.map((m, index) =>
                            m.user != localStorage.getItem("UserName") ?
                                <div key={index} className="align-self-start row tarjeta p-0 ms-3 my-1 d-flex flex-column align-items-center">
                                    <div className="wrapper text-center col-12 m-0 p-2 text-tarjeta">{m.message}</div>
                                    <div className="wrapper col-12 m-0 p-0 text-user">{m.user}</div>
                                </div>
                                :
                                <div key={index} className="align-self-end row tarjeta p-0 me-3 my-1 d-flex flex-column align-items-center">
                                    <div className="wrapper text-center col-12 m-0 p-2 text-tarjeta-user">{m.message}</div>
                                    <div className="wrapper text-end col-12 m-0 p-0 text-user">{m.user}</div>
                                </div>
                        )
                }
            </div>
            <div className="row w-100 m-0 footer-chatzone d-flex align-items-center ">
                <div className="col-2 p-0 pe-2 d-flex justify-content-end">
                    <FontAwesomeIcon icon={faPaperclip} size="2x" />
                </div>
                <div className="col-6 p-0 d-flex align-items-center">
                    <input onChange={e => setMessage(e.target.value)} value={message} type="text" className="form-control" placeholder="Message..."
                        aria-label="Message" aria-describedby="basic-addon1" />
                </div>
                <div className="col-2 p-0 d-flex align-items-center">
                    <button onClick={e => {
                        e.preventDefault();
                        sendMessage(message);
                        setMessage('');
                        InsertarChat(idChat, message, localStorage.getItem('UserName'));
                    }} type="button">Send</button>
                </div>
                <div className="col-2 p-0 ps-2">
                    <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                </div>
            </div>
        </div>
    );
}

export default ZoneChat;