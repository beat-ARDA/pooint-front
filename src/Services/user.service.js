import axios from 'axios';
import { baseUrlGetAllUsers } from './constantes';

const ObtenerUsuarios = async () => {
    let response;

    try {
        response = await axios.get(baseUrlGetAllUsers);
    } catch (e) {
        // catch error
        throw new Error(e.message)
    }

    // if success return value
    return response?.data ? response?.data : null // or set initial value
}

export { ObtenerUsuarios };