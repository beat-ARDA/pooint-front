import axios from 'axios';
import {
    baseUrlGetallGrups
} from './constantes';


const ObtenerGrupos = async () => {
    let response;
    try {
        response = await axios.get(baseUrlGetallGrups);
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}



export { ObtenerGrupos }