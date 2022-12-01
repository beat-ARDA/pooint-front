import axios from 'axios';
import {
    baseUrlGetAvisosSubID,
    baseUrlPostAvisos
} from './constantes';

const ObtenerAvisosSGyGrupId = async (id_SubGrupo) => {
    let response;
    try {
        console.log("que pedos");
        response = await axios.get(baseUrlGetAvisosSubID, { params: { id_SubGrupo: id_SubGrupo } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

const InsertarAviso = async (id_user,id_SubGrupo,texto) => {
    let response;
    try {
        
        
        id_user = parseInt(id_user)
        //console.log(typeof(id_user))
        //console.log(id_user)
        id_SubGrupo = parseInt(id_SubGrupo)
        
        response = await axios.post(baseUrlPostAvisos, { id_user, id_SubGrupo, texto });
        
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

export { ObtenerAvisosSGyGrupId, InsertarAviso }