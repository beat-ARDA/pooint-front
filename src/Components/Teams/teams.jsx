import './teams.css';
import AsideChats from '../AsideChats/aside-chats';
import ZoneChats from '../ZoneChats/zone-chats';

export default function Teams() {
    return (
        <div className='chats container-fluid d-flex p-0'>
            <div className='row w-100 m-0'>
                <div className='col-4 p-0'>
                    <AsideChats titleAside="Equipos" messagesOrteams={"teams"} />
                </div>
                <div className='col-8 p-0'>
                    <ZoneChats titleZoneChat="Nombre equipo" videollamada={false} messagesOrteams="teams" />
                </div>
            </div>
        </div>
    );
}