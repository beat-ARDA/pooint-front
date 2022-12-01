import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Chats from './Components/Chats/chats';
import Teams from './Components/Teams/teams';
import NoMatch from './Components/NoMatch/NoMatch';
import Register from './Components/Register/Register';
import Grupos from './Components/Grupos/Grupos';
import SubGrup from './Components/SubGrupo/SubGrupo';
import Call from './Components/Call/videocall';


export default function Router() {
    return (
        <Routes>
            
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/messages' element={<Chats />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/Grupos' element={<Grupos/>} />
            <Route path='/SubGrupo:idSubGrupo' element={<SubGrup/>} />
            <Route path='/VideoCall' element={<Call/>} />
            <Route path='*' element={<NoMatch/>} />

        </Routes>
    );
}