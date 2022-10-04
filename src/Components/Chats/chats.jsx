import AsideChats from "../AsideChats/aside-chats";
import ZoneChat from "../ZoneChats/zone-chats";
import './chats.css';

export default function Chats() {
    return (
        <div className='chats container-fluid d-flex p-0'>
            <div className='row w-100 m-0'>
                <div className='col-4 p-0'>
                    <AsideChats titleAside="Chats" messagesOrteams={"messages"} />
                </div>
                <div className='col-8 p-0'>
                    <ZoneChat titleZoneChat="Nombre usuario" videollamada={true} messagesOrteams="messages" />
                </div>
            </div>
        </div>
    );
}