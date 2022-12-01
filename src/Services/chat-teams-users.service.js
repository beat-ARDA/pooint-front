import axios from 'axios';
import { baseUrlPostChatTeamsUsers, baseUrlObtenerChatTeamsUsersByUserId } from './constantes';

const InsertarChatTeamUser = async (userId, chatTeamsId) => {
    let response;
    try {
        response = await axios.post(baseUrlPostChatTeamsUsers, { userId, chatTeamsId });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

const ObtenerChatTeamsUsersByUserId = async (userId) => {
    let response;
    try {
        response = await axios.get(baseUrlObtenerChatTeamsUsersByUserId, { params: { userId: userId } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

export { InsertarChatTeamUser, ObtenerChatTeamsUsersByUserId };