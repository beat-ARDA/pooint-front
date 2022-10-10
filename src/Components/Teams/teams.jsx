import './teams.css';
import AsideChats from '../AsideChats/aside-chats';
import ZoneChats from '../ZoneChats/zone-chats';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const Teams = () => {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);

    const joinRoom = async (user, room) => {
        try {
            const connection = new HubConnectionBuilder().withUrl("https://localhost:44349/chat")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user, message) => {
                setMessages(messages => [...messages, { user, message }]);
            });

            connection.onclose(e => {
                setConnection();
                setMessages([]);
            });

            await connection.start();
            await connection.invoke("JoinRoom", { user, room });
            setConnection(connection);
        } catch (e) {
            console.log(e);
        }
    }

    const sendMessage = async (message) => {
        try {
            await connection.invoke("SendMessage", message);
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
        <div className='teams container-fluid d-flex p-0'>
            <div className='row w-100 m-0'>
                <div className='col-4 p-0'>
                    <AsideChats
                        joinRoom={joinRoom}
                        titleAside="Equipos"
                        messagesOrteams={"teams"} 
                        closeConnection={closeConnection}/>
                </div>
                {
                    connection ?
                        <div className='col-8 p-0'>
                            <ZoneChats
                                sendMessage={sendMessage}
                                messages={messages}
                                titleZoneChat="Nombre equipo"
                                videollamada={false}
                                messagesOrteams="teams" />
                        </div>
                        : null
                }
            </div>
        </div>
    );
}

export default Teams;