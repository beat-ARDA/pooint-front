import axios from 'axios';
import {
    baseUrlGetallSGrups,
    baseUrlSGrupsIDGrp,
    baseUrlSGrupsID,
    baseUrlPostSubGrp
} from './constantes';


const ObtenerSGrupos = async () => {
    let response;
    try {
        response = await axios.get(baseUrlGetallSGrups);
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

const ObtenerSubGrupByGrupId = async (id_Grupo) => {
    let response;
    try {
        response = await axios.get(baseUrlSGrupsIDGrp, { params: { id_Grupo: id_Grupo } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

const ObtenerSubGrupBySGId = async (id_SubGrupo) => {
    let response;
    try {
        id_SubGrupo = parseInt(id_SubGrupo)
        console.log(typeof(id_SubGrupo))
        console.log(id_SubGrupo)
        response = await axios.get(baseUrlSGrupsID, { params: { id_SubGrupo: id_SubGrupo } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}

const InsertarSGrup = async (nombre, id_Grupo) => {
    let response;
    try {
        response = await axios.post(baseUrlPostSubGrp, { nombre, id_Grupo });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

export { ObtenerSGrupos, ObtenerSubGrupByGrupId, ObtenerSubGrupBySGId, InsertarSGrup }