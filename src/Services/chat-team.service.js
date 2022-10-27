import axios from 'axios';
import { baseUrlPostChatTeam } from './constantes';

const InsertarChatTeam = async (chatName) => {
    await axios.post(baseUrlPostChatTeam, { chatName }).then(response => {
        if (!response.data)
            alert("Ocurrio un error inesperado!");
    }).catch(error => {
        alert("Error de conexion");
        console.log(error);
    });
}

export { InsertarChatTeam };