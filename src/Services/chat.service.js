import axios from 'axios';
import {
    baseUrlObtenerChatExistente,
    baseUrlPostChat,
    baseUrlObtenerChatsPorUsuario,
    baseUrlEliminarChatPorId
} from './constantes';

const IniciarChat = async (id1, id2) => {
    let response;
    try {
        response = await axios.get(baseUrlObtenerChatExistente, { params: { UserId1: id1, UserId2: id2 } });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const InsertarChat = async (userId1, userId2, username1, username2) => {
    let response;
    try {
        response = await axios.post(baseUrlPostChat, { userId1, userId2, username1, username2 });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const ObtenerChatsPorUsuario = async () => {
    let response;
    try {
        response = await axios.get(baseUrlObtenerChatsPorUsuario, { params: { Id: parseInt(localStorage.getItem("UserId")) } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

const EliminarChatPorId = async () => {
    axios.delete(baseUrlEliminarChatPorId, { chatId }).then(response => {
        if (response.data)
            alert("El chat a sido eliminado!");
        else
            alert("No se pudo eliminar el chat!");
    }).catch(error => {
        alert("Error de conexion!");
    });
}

export { IniciarChat, ObtenerChatsPorUsuario, EliminarChatPorId, InsertarChat }