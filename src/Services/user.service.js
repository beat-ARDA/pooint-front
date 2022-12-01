import axios from 'axios';
import { baseUrlGetAllUsers,  baseUrlEstado} from './constantes';

const ObtenerUsuarios = async () => {
    let response;

    try {
        response = await axios.get(baseUrlGetAllUsers);
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null;
}
const SetStatus = async (id_user, Estado) => {
    let response;
    try {
        id_user = parseInt(id_user)
        console.log(typeof(id_user))
        console.log(id_user)
        console.log(typeof(Estado))
        console.log(Estado)
        response = await axios.post(baseUrlEstado, {  id_user, Estado});
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

export { ObtenerUsuarios, SetStatus };