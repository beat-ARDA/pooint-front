import axios from "axios";
import { baseUrlPostChatTeamsMessages, baseUrlObtenerChatTeamsMessages } from "./constantes";

const InsertarChatTeamsMessage = async (idChatTeam, message, user) => {
    let response;
    try {
        response = await axios.post(baseUrlPostChatTeamsMessages, { idChatTeam, message, user });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const ObtenerChatTeamsMessages = async (idChatTeam) => {
    let response;
    try {
        response = await axios.get(baseUrlObtenerChatTeamsMessages, { params: {idChatTeam: idChatTeam} });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

export {InsertarChatTeamsMessage, ObtenerChatTeamsMessages}