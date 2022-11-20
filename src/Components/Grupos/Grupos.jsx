import ZoneGrupos from "../ZonaGrupos/ZoneGrupos";
import ZoneSubG from "../ZoneSubG/ZoneSubG"
import './Grupos.css';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import axios from "axios";

const Chats = () => {
    const baseUrlObtenerChatUsuario = 'https://localhost:44349/api/ChatMessage/GetChatsMessages';


    
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [messagesDb, setMessageDb] = useState([]);
    const [idSubGrup, setIdChat] = useState();

    const joinSGrup = async (user, id_grup) => {
        try {
            
            setIdChat(id_grup);
        } catch (e) {
            console.log(e);
        }
    }



    const closeConnection = async () => {
        try {
            await connection.stop();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='chats container-fluid d-flex p-0'>
            <div className='row w-100 m-0'>
                <div className='col-3 p-0 mt-1'>
                    <ZoneGrupos
                        titleAside="Grupos"
                        messagesOrteams={"messages"}
                        joinSGrup={joinSGrup}
                        closeConnection={closeConnection} />
                </div>
                
                    
                        <div className='col-9 mt-2'>
                          {
                           idSubGrup != null ?
                            <ZoneSubG 
                            idGrup={idSubGrup}/>
                            : <></>
                          }
                           
                        </div> 
                
            </div>
        </div>
    );
}

export default Chats;