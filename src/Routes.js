import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Chats from './Components/Chats/chats';
import Teams from './Components/Teams/teams';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/messages' element={<Chats />} />
            <Route path='/teams' element={<Teams />} />
        </Routes>
    );
}