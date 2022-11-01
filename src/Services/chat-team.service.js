import axios from 'axios';
import {
    baseUrlPostChatTeam,
    baseUrlObtenerChatTeamId,
    baseUrlObtenerChatTeamById
} from './constantes';

const InsertarChatTeam = async (chatName) => {
    let response;
    try {
        response = await axios.post(baseUrlPostChatTeam, { chatName });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

const ObtenerChatTeamId = async (chatName) => {
    let response;
    try {
        response = await axios.get(baseUrlObtenerChatTeamId, { params: { chatName: chatName } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}


const ObtenerChatTeamById = async (id) => {
    let response;
    try {
        response = await axios.get(baseUrlObtenerChatTeamById, { params: { id: id } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

export { InsertarChatTeam, ObtenerChatTeamId, ObtenerChatTeamById };