import axios from "axios";
import { baseUrlPostChatTeamsMessages, baseUrlObtenerChatTeamsMessages, secretKey} from "./constantes";
import { encrypt } from "n-krypta";


const InsertarChatTeamsMessage = async (idChatTeam, message, user, encryptado) => {
    let response;
    try {
        const encryptMessage = encrypt(message, secretKey);
        encryptado?
        response = await axios.post(baseUrlPostChatTeamsMessages, { idChatTeam: idChatTeam, message: encryptMessage, user: user, encryptado: 1 }):  response = await axios.post(baseUrlPostChatTeamsMessages, { idChatTeam: idChatTeam, message: message, user: user, encryptado: 0 });
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