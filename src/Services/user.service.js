import axios from 'axios';
import { baseUrlGetAllUsers } from './constantes';

const ObtenerUsuarios = async () => {
    let response;

    try {
        response = await axios.get(baseUrlGetAllUsers);
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null;
}

export { ObtenerUsuarios };